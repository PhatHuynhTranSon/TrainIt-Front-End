import { Grid } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { MyTabPanel, MyVerticalTabs } from "../../../../components/tab";
import LogisticRegressionModel from "./logisticregression";

import { createSolution } from "../../../../api"; 
import Loading from "../../../../components/loading";
import NaiveBayesModel from "./naivebayes";
import DecisionTreeModel from "./decisiontree";

const OuterWrapper = styled.div`
    padding: 3rem 0;
`;

const InnerWrapper = styled.div`
    padding: 0 2rem;
`;

function ClassificationSolutionCreation(props) {
    //Project from props
    const { project } = props;

    //Value of tabs
    const [value, setValue] = React.useState(0);
    const [loading, setLoading] = React.useState(false);

    function switchTab(event, newValue) {
        setValue(newValue);
    }

    function filterHyperparameters(hyperparameters) {
        const newHyperparameters = {}

        for (let key of Object.keys(hyperparameters)) {
            if (hyperparameters[key] !== null) {
                newHyperparameters[key] = hyperparameters[key];
            }
        }

        return newHyperparameters;
    }

    function processArguments(args) {
        //Get algorithm and parameters
        const { algorithm_name, hyperparameters } = args;

        return {
            "algorithm_name": algorithm_name,
            "hyperparameters": filterHyperparameters(hyperparameters)
        }
    }

    function onSubmitted(args) {
        //Display loading icon
        setLoading(true);

        //Process arguments
        const newArgs = processArguments(args);

        //Make request to API
        createSolution(project.id, newArgs)
            .then(response => {
                const data = response.data;
                onSuccess(data);

                //Remove loading icon
                setLoading(false);
            })
            .catch(error => {
                const errorMessage = error.response.data;
                onError(errorMessage);

                //Remove loading icon
                setLoading(false);
            });
    }

    function onSuccess(solution) {
        props.onSolutionCreatedSuccessfully(solution);
    }

    function onError(error) {
        props.onSolutionCreatedError(error);
    }

    return (
        <OuterWrapper>
            {
                loading ?
                <Loading label="Creating solution"/> : 
                <Grid container>
                    <Grid item xs={2}>
                        <MyVerticalTabs 
                            headers={["Logistic Regression", "Naives Bayes", "Decision Tree"]}
                            value={value}
                            handleChange={switchTab}/>
                    </Grid>

                    <Grid item xs={10}>
                        <MyTabPanel value={value} index={0}>
                            <InnerWrapper>
                                <LogisticRegressionModel 
                                    onSubmitted={onSubmitted}/>
                            </InnerWrapper>
                        </MyTabPanel>

                        <MyTabPanel value={value} index={1}>
                            <InnerWrapper>
                                <NaiveBayesModel 
                                    onSubmitted={onSubmitted}/>
                            </InnerWrapper>
                        </MyTabPanel>

                        <MyTabPanel value={value} index={2}>
                            <InnerWrapper>
                                <DecisionTreeModel 
                                    onSubmitted={onSubmitted}/>
                            </InnerWrapper>
                        </MyTabPanel>
                    </Grid>
                </Grid>
            }
        </OuterWrapper>
    )
}

ClassificationSolutionCreation.propTypes = {
    project: PropTypes.object.isRequired,
    onSolutionCreatedSuccessfully: PropTypes.func.isRequired,
    onSolutionCreatedError: PropTypes.func.isRequired
}

export default ClassificationSolutionCreation;