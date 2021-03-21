import React from "react"
import PropTypes from "prop-types";

import MediumHeading from "../../../../components/typography/mediumheading";
import SmallDescription from "../../../../components/typography/smalldescription";
import Description from "../../../../components/typography/description";
import PurpleSubHeading from "../../../../components/typography/purplesubheading";
import InvertedButton from "../../../../components/button/invertedbutton";
import { MarginTopSmall } from "../../../../components/position";

import { TextField } from "@material-ui/core";

function LogisticRegressionModel(props) {
    const [testSize, setTestSize] = React.useState("0.2");
    const [randomState, setRandomState] = React.useState("42");

    function onTestSizeChange(event) {
        setTestSize(event.target.value);
    }

    function onRandomStateChange(event) {
        setRandomState(event.target.value);
    }

    function onSubmitted() {
        const args = {
            "algorithm_name": "logistic_regression",
            "hyperparameters": {
                "test-size": testSize,
                "random-state": randomState
            }
        };

        props.onSubmitted(args);
    }

    return (
        <React.Fragment>
            <MediumHeading>
                Logisitic Regression
            </MediumHeading>

            <Description>
                This classis model predicts the class label using a sigmoid function.
            </Description>

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
            
            <MarginTopSmall>
                <InvertedButton onClick={onSubmitted}>
                    Create solution
                </InvertedButton>
            </MarginTopSmall>
        </React.Fragment>
    )
}

LogisticRegressionModel.propTypes = {
    onSubmitted: PropTypes.func.isRequired
}

export default LogisticRegressionModel;