import { Card, CardContent, makeStyles } from "@material-ui/core";
import React from "react";
import Loading from "../../../components/loading";
import ColorStyle from "../../../components/typography/color";
import MediumHeading from "../../../components/typography/mediumheading";

const useStyles = makeStyles({
    card: {
        margin: "0rem 1rem"
    },
    cardContent: {
        textAlign: "center"
    }
});

function PredictionBox({ loading, prediction }) {
    const classes = useStyles();

    return (
        <Card classes={{ root: classes.card }}>
            <CardContent classes={{ root: classes.cardContent }}>
                {
                    loading ?
                    <Loading label="Loading prediction"/> :
                    <MediumHeading gray>
                        Prediction: { prediction ? <ColorStyle>{prediction}</ColorStyle> : <ColorStyle warning>None</ColorStyle> }
                    </MediumHeading>
                }
            </CardContent>
        </Card>
    )
}

export default PredictionBox;