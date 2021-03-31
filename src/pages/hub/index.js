import React from "react";
import Dashboard from "./dashboard";
import Navigation from "./navigation";
import ProjectCreation from "../projectcreation";
import { makeStyles } from "@material-ui/core";
import { useRouteMatch, Switch, Route } from "react-router";
import ProjectDetails from "../project/details";

const drawerWidth = 240;

const useStyles = makeStyles({
    drawer: {
        width: drawerWidth
    }
});

function PersonalHub() {
    const classes = useStyles();
    const { url } = useRouteMatch();

    return (
        <React.Fragment>
            <Navigation 
                classes={{ paper: classes.drawer }}/>

            <div
                style={{
                    marginLeft: `${drawerWidth}px`,
                    width: `calc(100% - ${drawerWidth}px)`
                }}>
                <Route exact path="/hub/projects">
                    <ProjectCreation />
                </Route>

                <Route path="/hub/dashboard">
                    <Dashboard />
                </Route>

                <Route path="/hub/projects/:id">
                    <ProjectDetails />
                </Route>
            </div>
        </React.Fragment>
    )
}

export default PersonalHub;