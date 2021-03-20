import React from "react";
import SolutionExpandedDetails from "./solutionexpanded";
import SolutionShortenedDetails from "./solutionshort";
import PropTypes from "prop-types";

import { Card, CardActions, CardContent, makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
    root: {
        "margin": "20px 0",
        "transition": "all .2s",
        "backgroundColor": "#edf6f9"
    }
});

function SolutionDetails(props) {
    const { solution } = props;
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    function toggleExpanded() {
        setExpanded(!expanded);
    }

    return (
        <Card classes={{ root: classes.root }}>
            <CardContent>
            {
                expanded ? 
                <SolutionExpandedDetails solution={solution}/> :
                <SolutionShortenedDetails solution={solution}/>
            }
            </CardContent>

            <CardActions>
                <Button 
                    size="small" 
                    color="primary"
                    onClick={toggleExpanded}>
                {
                    expanded ? "Minify" : "Expand"
                }
                </Button>
            </CardActions>
        </Card>
    )
}

SolutionDetails.propTypes = {
    solution: PropTypes.object.isRequired
}

export default SolutionDetails;