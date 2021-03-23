import React from "react"
import PropTypes from "prop-types";

import MediumHeading from "../../../../components/typography/mediumheading";
import SmallDescription from "../../../../components/typography/smalldescription";
import Description from "../../../../components/typography/description";
import PurpleSubHeading from "../../../../components/typography/purplesubheading";
import InvertedButton from "../../../../components/button/invertedbutton";
import { MarginTopSmall } from "../../../../components/position";

import { MenuItem, Select, TextField } from "@material-ui/core";

function DecisionTreeModel(props) {
    const [testSize, setTestSize] = React.useState(0.2);
    const [randomState, setRandomState] = React.useState(42);
    const [splitter, setSplitter] = React.useState("best");
    const [maxDepth, setMaxDepth] = React.useState(null);
    const [minSamplesSplit, setMinSamplesSplit] = React.useState(1.0);
    const [minSamplesLeaf, setMinSamplesLeaf] = React.useState(0.5);
    const [minWeightFractionLeaft, setMinWeightFractionLeaft] = React.useState(0);
    const [maxFeatures, setMaxFeatures] = React.useState(null);
    const [maxLeafNodes, setMaxLeafNodes] = React.useState(null);
    const [minImpurityDecrease, setMinImpurityDecrease] = React.useState(0);

    function onTestSizeChange(event) {
        setTestSize(event.target.value);
    }

    function onRandomStateChange(event) {
        setRandomState(event.target.value);
    }

    function onSplitterChanged(event) {
        setSplitter(event.target.value);
    }

    function onMaxDepthChanged(event) {
        setMaxDepth(event.target.value);
    }

    function onMinSamplesSplitChanged(event) {
        setMinSamplesSplit(event.target.value);
    }

    function onMinSamplesLeafChanged(event) {
        setMinSamplesLeaf(event.target.value);
    }

    function onMinWeightFractionLeafChanged(event) {
        setMinWeightFractionLeaft(event.target.value);
    }

    function onMaxFeaturesChange(event) {
        setMaxFeatures(event.target.value);
    }

    function onMaxLeafNodesChanged(event) {
        setMaxLeafNodes(event.target.value);
    }

    function onMinImpurityDecreaseChanged(event) {
        setMinImpurityDecrease(event.target.value);
    }

    function onSubmitted() {
        const args = {
            "algorithm_name": "decision_tree_regression",
            "hyperparameters": {
                "test-size": testSize,
                "random-state": randomState,
                "splitter": splitter,
                "max-depth": maxDepth,
                "min-samples-split": minSamplesSplit,
                "min-samples-leaf": minSamplesLeaf,
                "min-weight-fraction-leaf": minWeightFractionLeaft,
                "max-features": maxFeatures,
                "max-leaf-nodes": maxLeafNodes,
                "min-impurity-decrease": minImpurityDecrease
            }
        };

        props.onSubmitted(args);
    }

    return (
        <React.Fragment>
            <MediumHeading>
                Decision Tree Classifier
            </MediumHeading>

            <Description>
                This model works by defining a tree-like structure (with node and leaf) which bests classify the data
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

            {/* Section for splitter */}
            <PurpleSubHeading>
                Choose splitter
            </PurpleSubHeading>
            <SmallDescription>
                This option indicates the strategy used to choose the split at each node.
            </SmallDescription>
            <Select
                id="splitter"
                value={splitter}
                onChange={onSplitterChanged}>
                <MenuItem value="best">Best</MenuItem>
                <MenuItem value="random">Random</MenuItem>
            </Select>

            {/* Section for max depth */}
            <PurpleSubHeading>
                Choose maxium depth
            </PurpleSubHeading>
            <SmallDescription>
                This value indicates the maximum depth of a tree. Leave empty for None value
            </SmallDescription>
            <TextField 
                id="max-depth" 
                label="Max depth" 
                type="number"
                value={maxDepth}
                onChange={onMaxDepthChanged}/>

            {/* Section for mininum sampel split */}
            <PurpleSubHeading>
                Chose min samples split
            </PurpleSubHeading>
            <SmallDescription>
                This value indicates the minimum number of samples required to split an internal node.
            </SmallDescription>
            <TextField 
                id="min-samples-split" 
                label="Min samples split" 
                type="number"
                value={minSamplesSplit}
                onChange={onMinSamplesSplitChanged}/>

            {/* Section for min samples leaf */}
            <PurpleSubHeading>
                Chose min samples leaf
            </PurpleSubHeading>
            <SmallDescription>
                This value indicates the minimum number of samples required to be at a leaf node.
            </SmallDescription>
            <TextField 
                id="min-samples-leaf" 
                label="Min samples leaf" 
                type="number"
                value={minSamplesLeaf}
                onChange={onMinSamplesLeafChanged}/>

            {/* Section for min weight fraction leaf */}
            <PurpleSubHeading>
                Chose min weight fraction leaf
            </PurpleSubHeading>
            <SmallDescription>
                This value indicates the minimum weighted fraction of the sum total of weights (of all the input samples) required to be at a leaf node.
            </SmallDescription>
            <TextField 
                id="min-weight-fraction-leaf" 
                label="Min weight fraction leaf" 
                type="number"
                value={minWeightFractionLeaft}
                onChange={onMinWeightFractionLeafChanged}/>

            {/* Section for max features */}
            <PurpleSubHeading>
                Chose max features
            </PurpleSubHeading>
            <SmallDescription>
                This value indicates the number of features to consider when looking for the best split.
            </SmallDescription>
            <TextField 
                id="max-features" 
                label="Max features" 
                type="number"
                value={maxFeatures}
                onChange={onMaxFeaturesChange}/>

            {/* Section for max leaf nodes */}
            <PurpleSubHeading>
                Chose max leaf nodes
            </PurpleSubHeading>
            <SmallDescription>
                Grow a tree with max_leaf_nodes in best-first fashion. Best nodes are defined as relative reduction in impurity
            </SmallDescription>
            <TextField 
                id="max-leaf-nodes" 
                label="Max leave nodes" 
                type="number"
                value={maxLeafNodes}
                onChange={onMaxLeafNodesChanged}/>

            {/* Section for max leaf nodes */}
            <PurpleSubHeading>
                Chose min impurity decrease
            </PurpleSubHeading>
            <SmallDescription>
                A node will be split if this split induces a decrease of the impurity greater than or equal to this value.
            </SmallDescription>
            <TextField 
                id="min-impurity-decrease" 
                label="Min impurity decrease" 
                type="number"
                value={minImpurityDecrease}
                onChange={onMinImpurityDecreaseChanged}/>
            
            <MarginTopSmall>
                <InvertedButton onClick={onSubmitted}>
                    Create solution
                </InvertedButton>
            </MarginTopSmall>
        </React.Fragment>
    )
}

DecisionTreeModel.propTypes = {
    onSubmitted: PropTypes.func.isRequired
}

export default DecisionTreeModel;