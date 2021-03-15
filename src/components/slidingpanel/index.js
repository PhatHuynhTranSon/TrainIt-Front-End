import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles({
    paper: {
        width: "100vw",
        "padding": "5rem"
    }
});

function SlidingPanel(props) {
    const classes = useStyles();
    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={props.onClose}
            classes={{ paper: classes.paper }}>
            { props.children }
        </Drawer>
    )
}

SlidingPanel.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
}

export default SlidingPanel;