import { Close } from "@material-ui/icons";
import PropTypes from "prop-types";


function CloseIcon(props) {
    return (
        <Close
            style={{ fontSize: "1.5rem", color: "#6c757d", cursor: "pointer" }}
            onClick={props.onClick}/>
    )
}

CloseIcon.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default CloseIcon;
