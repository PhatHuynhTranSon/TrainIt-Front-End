import { Button, Card, CardContent, makeStyles, CardActions, Grid } from "@material-ui/core";
import React from "react";
import { startNotebook, stopNotebook, getNotebookUrl } from "../../../api/notebook";
import PurpleSubHeading from "../../../components/typography/purplesubheading";

import NotebookState from "./notebookstate";

const useStyles = makeStyles({
    card: {
        marginBottom: "1rem"
    }
});

const NotebookCard = ({ notebook, onActionPerformed }) => {
    const classes = useStyles();

    const isInService = state => state === "InService";
    const isStopped = state => state === "Stopped";

    //Event handlers
    const onAccessButtonClicked = async () => {
        //Get the url and redirect to that url
        const url = await getNotebookUrl(notebook.id);
        redirect(url);
    }

    const redirect = (url) => {
        window.location.replace(url);
    }

    const onStopButtonClicked = async () => {
        await stopNotebook(notebook.id);
        onActionPerformed();
    }

    const onStartButtonClicked = async () => {
        await startNotebook(notebook.id);
        onActionPerformed();
    }

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
                    <Button 
                        color="primary"
                        onClick={onAccessButtonClicked}>
                        Access
                    </Button>

                    <Button 
                        color="danger"
                        onClick={onStopButtonClicked}>
                        Stop
                    </Button>
                </> :
                (
                    isStopped(notebook.status) ?
                    <>
                        <Button 
                            color="primary"
                            onClick={onStartButtonClicked}>
                            Start
                        </Button>
                    </> : null
                )
            }
            </CardActions>
        </Card>
    )
}

export default NotebookCard;