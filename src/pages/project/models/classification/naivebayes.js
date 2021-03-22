import React from "react"
import PropTypes from "prop-types";

import MediumHeading from "../../../../components/typography/mediumheading";
import SmallDescription from "../../../../components/typography/smalldescription";
import Description from "../../../../components/typography/description";
import PurpleSubHeading from "../../../../components/typography/purplesubheading";
import InvertedButton from "../../../../components/button/invertedbutton";
import { MarginTopSmall } from "../../../../components/position";

import { TextField } from "@material-ui/core";

function NaiveBayesModel(props) {
    const [testSize, setTestSize] = React.useState("0.2");
    const [randomState, setRandomState] = React.useState("42");
    const [varSmoothing, setVarSmoothing] = React.useState("1e-09");

    function onTestSizeChange(event) {
        setTestSize(event.target.value);
    }

    function onRandomStateChange(event) {
        setRandomState(event.target.value);
    }

    function onVarSmoothingChanged(event) {
        setVarSmoothing(event.target.value);
    }

    function onSubmitted() {
        const args = {
            "algorithm_name": "gaussian_naive_bayes",
            "hyperparameters": {
                "test-size": testSize,
                "random-state": randomState,
                "var-smoothing": varSmoothing
            }
        };

        props.onSubmitted(args);
    }

    return (
        <React.Fragment>
            <MediumHeading>
                Gaussian Naive Bayes
            </MediumHeading>

            <Description>
                This classis model relies on Bayes' Theorem to make prediction on categorial data.
            </Description>

            { /* Section for test size */ }
            <PurpleSubHeading>
                Choose the test size
            </PurpleSubHeading>
            <SmallDescription>
                The test size determines how many percentage of data you want to preserve as validation data
            </SmallDescription>
            <TextField 
                id="test-size" 
                label="Test size" 
                type="number"
                value={testSize}
                onChange={onTestSizeChange}/>

            { /* Section for random state */ }
            <PurpleSubHeading>
                Choose random state
            </PurpleSubHeading>
            <SmallDescription>
                This random state is used when splitting the data randomly. This can be set for more reproducible result.
            </SmallDescription>
            <TextField 
                id="random-state" 
                label="Random state" 
                type="number"
                value={randomState}
                onChange={onRandomStateChange}/>

            { /* Section for varianc smoothing */ }
            <PurpleSubHeading>
                Choose variance smoothing
            </PurpleSubHeading>
            <SmallDescription>
                The value indicates the portion of the largest variance of all features that is added to variances for calculation stability.
            </SmallDescription>
            <TextField 
                id="variance-smoothing" 
                label="Variance smoothing" 
                type="number"
                value={varSmoothing}
                onChange={onVarSmoothingChanged}/>
            
            <MarginTopSmall>
                <InvertedButton onClick={onSubmitted}>
                    Create solution
                </InvertedButton>
            </MarginTopSmall>
        </React.Fragment>
    )
}

NaiveBayesModel.propTypes = {
    onSubmitted: PropTypes.func.isRequired
}

export default NaiveBayesModel;