import React from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionMedia from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";

import classification from "../../media/classification.svg";
import regression from "../../media/regression.svg";
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
    chosenCard: {
        backgroundColor: "#f5f3f4",
        transitions: "transition: all 0.2s linear;"
    },

    unchosenCard: {
        backgroundColor: "white",
        transitions: "transition: all 0.2s linear;"
    }
});

function TypeInput(props) {
    //Current state
    const [type, setType] = React.useState("classification");
    const classes = useStyles();

    function chooseClassification() {
        setType("classification");
        onTypeSelected("classification");
    }

    function chooseRegression() {
        setType("regression");
        onTypeSelected("regression");
    }

    function onTypeSelected(type) {
        props.onTypeSelected(type);
    }

    return (
        <Grid container spacing={2} style={{ marginBottom: "10px" }}>
            <Grid item style={{ width: "30%" }}>
                <Card 
                    classes={{ root: type === "classification" ? classes.chosenCard : classes.unchosenCard }}
                    onClick={() => chooseClassification()}>
                    <CardActionMedia>
                        <CardMedia
                            src={classification}
                            component="img"
                            title={"Classification"}/>
                        <CardContent>
                            <Typography component="h2" variant="h5">
                                Classication
                            </Typography>

                            <Typography variant="body2" color="textSecondary" component="p">
                                Classification problems mainly involve classifying datapoints into a category. Our implementation supports binary and multiclass classication.
                            </Typography>
                        </CardContent>
                    </CardActionMedia>
                </Card>
            </Grid>

            <Grid item style={{width: "30%"}}>
                <Card 
                    classes={{ root: type === "regression" ? classes.chosenCard : classes.unchosenCard }}
                    onClick={() => chooseRegression()}>
                    <CardActionMedia>
                        <CardMedia
                            src={regression}
                            component="img"
                            title={"Regression"}/>
                        <CardContent>
                            <Typography component="h2" variant="h5">
                                Regression
                            </Typography>

                            <Typography variant="body2" color="textSecondary" component="p">
                                Classification problems mainly involve classifying datapoints into a category. Our implementation supports binary and multiclass classication.
                            </Typography>
                        </CardContent>
                    </CardActionMedia>
                </Card>
            </Grid>
        </Grid>
    )
}

TypeInput.propTypes = {
    onTypeSelected: PropTypes.func.isRequired
}

export default TypeInput;

