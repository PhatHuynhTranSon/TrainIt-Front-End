import { Drawer, List, ListItemIcon, ListItemText, ListItem } from "@material-ui/core";
import { CreateNewFolder, Dashboard, Notes, SupervisedUserCircle } from "@material-ui/icons";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

function Navigation(props) {
    return (
        <Drawer
            variant="persistent"
            anchor="left"
            open={true}
            classes={props.classes}>
            <List>
                <ListItem button component={Link} to="/hub/projects">
                    <ListItemIcon><CreateNewFolder /></ListItemIcon>
                    <ListItemText primary="Create projects"/>
                </ListItem>
                <ListItem button component={Link} to="/hub/notebooks">
                    <ListItemIcon><Notes /></ListItemIcon>
                    <ListItemText primary="Create notebooks"/>
                </ListItem>
                <ListItem button  component={Link} to="/hub/dashboard">
                    <ListItemIcon><Dashboard /></ListItemIcon>
                    <ListItemText primary="Dashboard"/>
                </ListItem>
                <ListItem button component={Link} to="/hub/profile">
                    <ListItemIcon><SupervisedUserCircle /></ListItemIcon>
                    <ListItemText primary="Profile"/>
                </ListItem>
            </List>
        </Drawer>
    )
}

Navigation.propTypes = {
    classes: PropTypes.object.isRequired
}

export default Navigation;