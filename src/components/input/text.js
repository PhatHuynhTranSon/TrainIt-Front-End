import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";


const useStyles = makeStyles({
    resize: {
        fontSize: "1.5rem"
    }
});

function MyTextField(props) {
    const classes = useStyles();
    return (
        <TextField 
            {...props}
            style={ { width: "50% ", marginBottom: "2rem" } }
            InputProps={{
                classes: {
                    input: classes.resize
                }
            }}
            InputLabelProps={{
                style: {
                    fontSize: "1.5rem"
                }
            }}
            onChange={props.onChange}
            >
            { props.children }
        </TextField>
    )
}

MyTextField.propTypes = {
    onChange: PropTypes.func.isRequired
}

export default MyTextField;