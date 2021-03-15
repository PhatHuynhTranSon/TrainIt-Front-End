import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";


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
            >
            { props.children }
        </TextField>
    )
}

export default MyTextField;