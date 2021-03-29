import { Card, CardContent, makeStyles } from "@material-ui/core";
import React from "react";
import ColorStyle from "../../../components/typography/color";
import MediumHeading from "../../../components/typography/mediumheading";

const useStyles = makeStyles({
    card: {
        margin: "2rem 0rem"
    },
    cardContent: {
        textAlign: "center"
    }
});

function PredictionBox({ prediction }) {
    const classes = useStyles();

    return (
        <Card classes={{ root: classes.card }}>
            <CardContent classes={{ root: classes.cardContent }}>
                <MediumHeading gray>Prediction: { prediction ? <ColorStyle>{prediction}</ColorStyle> : <ColorStyle warning>None</ColorStyle> }</MediumHeading>
            </CardContent>
        </Card>
    )
}

export default PredictionBox;