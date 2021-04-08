import { Button, Card, CardContent, makeStyles, CardActions, Grid } from "@material-ui/core";
import React from "react";
import PurpleSubHeading from "../../../components/typography/purplesubheading";

import NotebookState from "./notebookstate";

const useStyles = makeStyles({
    card: {
        marginBottom: "1rem"
    }
});

const NotebookCard = ({ notebook }) => {
    const classes = useStyles();

    const isInService = state => state === "InService";
    const isStopped = state => state === "Stopped";

    return (
        <Card key={notebook.id} classes={{root: classes.card}}>
            <CardContent>
                <Grid container>
                    <Grid item xs={10}>
                        <PurpleSubHeading>{ notebook.name }</PurpleSubHeading>
                    </Grid>

                    <Grid item xs={2}>
                        <NotebookState status={ notebook.status }/>
                    </Grid>
                </Grid>
            </CardContent>

            <CardActions>
            {
                isInService(notebook.status) ?
                <>
                    <Button color="primary">Access</Button>
                    <Button color="danger">Stop</Button>
                </> :
                (
                    isStopped(notebook.status) ?
                    <>
                        <Button color="primary">Start</Button>
                    </> : null
                )
            }
            </CardActions>
        </Card>
    )
}

export default NotebookCard;