import { Drawer, List, ListItemIcon, ListItemText, ListItem, Typography, makeStyles, Divider } from "@material-ui/core";
import { CreateNewFolder, Dashboard, MenuBook, Notes, SupervisedUserCircle } from "@material-ui/icons";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const useStyles = makeStyles({
    logo: {
        textAlign: "center",
        fontWeight: "700",
        fontFamily: "Raleway",
        padding: "20px",
        color: "#7209b7"
    }
});

function Navigation(props) {
    const classes = useStyles();

    return (
        <Drawer
            variant="persistent"
            anchor="left"
            open={true}
            classes={props.classes}>
            <Typography variant="h4" classes={{ root: classes.logo }}>Trainee</Typography>
            <Divider/>
            <List>
                <ListItem button component={Link} to="/hub/projects">
                    <ListItemIcon><CreateNewFolder /></ListItemIcon>
                    <ListItemText primary="Create projects"/>
                </ListItem>
                <ListItem button component={Link} to="/hub/createnotebooks">
                    <ListItemIcon><Notes /></ListItemIcon>
                    <ListItemText primary="Create notebooks"/>
                </ListItem>
                <ListItem button  component={Link} to="/hub/dashboard">
                    <ListItemIcon><Dashboard /></ListItemIcon>
                    <ListItemText primary="All projects"/>
                </ListItem>
                <ListItem button component={Link} to="/hub/notebooks">
                    <ListItemIcon><MenuBook /></ListItemIcon>
                    <ListItemText primary="All notebooks"/>
                </ListItem>
                <ListItem button component={Link} to="/hub/tokens">
                    <ListItemIcon><SupervisedUserCircle /></ListItemIcon>
                    <ListItemText primary="Tokens"/>
                </ListItem>
            </List>
        </Drawer>
    )
}

Navigation.propTypes = {
    classes: PropTypes.object.isRequired
}

export default Navigation;