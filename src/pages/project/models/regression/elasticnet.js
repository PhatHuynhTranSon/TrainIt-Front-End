import React from "react"
import PropTypes from "prop-types";

import MediumHeading from "../../../../components/typography/mediumheading";
import SmallDescription from "../../../../components/typography/smalldescription";
import Description from "../../../../components/typography/description";
import PurpleSubHeading from "../../../../components/typography/purplesubheading";
import InvertedButton from "../../../../components/button/invertedbutton";
import { MarginTopSmall } from "../../../../components/position";

import { TextField } from "@material-ui/core";

function ElasticNetModel(props) {
    const [testSize, setTestSize] = React.useState("0.2");
    const [randomState, setRandomState] = React.useState("42");
    const [alpha, setAlpha] = React.useState("1.0");
    const [l1Ratio, setl1Ratio] = React.useState("0.5");

    function onTestSizeChange(event) {
        setTestSize(event.target.value);
    }

    function onRandomStateChange(event) {
        setRandomState(event.target.value);
    }

    function onAlphaChanged(event) {
        setAlpha(event.target.value);
    }
    
    function onL1RatioChanged(event) {
        setl1Ratio(event.target.value);
    }

    function onSubmitted() {
        const args = {
            "algorithm_name": "elastic_net_regression",
            "hyperparameters": {
                "test-size": testSize,
                "random-state": randomState,
                "alpha": alpha,
                "l1-ratio": l1Ratio
            }
        };

        props.onSubmitted(args);
    }

    return (
        <React.Fragment>
            <MediumHeading>
                Elastic Net Regression
            </MediumHeading>

            <Description>
                This regularized model combines linearly the L1 and L2 penalties of Lasso and Ridge methods.
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

            <PurpleSubHeading>
                Choose alpha
            </PurpleSubHeading>
            <SmallDescription>
                The alpha constant multiplies the L1 and L2 penalty terms.
            </SmallDescription>
            <TextField 
                id="alpha" 
                label="Alpha" 
                type="number"
                value={alpha}
                onChange={onAlphaChanged}/>

            <PurpleSubHeading>
                Choose l1 ratio
            </PurpleSubHeading>
            <SmallDescription>
                The ratio represents Elastic Net mixing parameter.
            </SmallDescription>
            <TextField 
                id="l1" 
                label="L1 ratio" 
                type="number"
                value={l1Ratio}
                onChange={onL1RatioChanged}/>
            
            <MarginTopSmall>
                <InvertedButton onClick={onSubmitted}>
                    Create solution
                </InvertedButton>
            </MarginTopSmall>
        </React.Fragment>
    )
}

ElasticNetModel.propTypes = {
    onSubmitted: PropTypes.func.isRequired
}

export default ElasticNetModel;