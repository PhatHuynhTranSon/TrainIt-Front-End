import Button from "@material-ui/core/Button";


function InvertedButton(props) {
    return (
        <Button
            style={{
                backgroundColor: "#7209b7",
                color: "white",
                display: "inline-block",
                width: "5rem"
            }}
            variant="contained"
            size="large"
            {...props}>
            { props.children }
        </Button>
    )
}

export default InvertedButton;