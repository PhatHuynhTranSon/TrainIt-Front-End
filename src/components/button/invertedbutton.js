import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
    button: {
        backgroundColor: "#7209b7",
        color: "white",
        display: "inline-block",
        width: "25%"
    }
});

function InvertedButton(props) {
    const classes = useStyles();

    return (
        <Button
            classes={{ root: classes.button }}
            variant="contained"
            size="large"
            {...props}>
            { props.children }
        </Button>
    )
}

export default InvertedButton;