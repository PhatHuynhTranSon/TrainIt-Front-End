import { Card, CardMedia, CardContent, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import PayButton from "./paybutton";

const useStyles = makeStyles({
    cardImage: {
        width: "50%"
    }
})

function TokenPack(props) {
    const { source, title, id, amount, onSuccess, onError } = props;
    const classes = useStyles();

    return (
        <Card>
            <CardMedia 
                src={source}
                component="img"
                title={title}
                classes={classes.cardImage}/>
            <CardContent>
                <PayButton 
                    amount={amount}
                    reference_id={id}
                    onSuccess={onSuccess}
                    onError={onError}/>
            </CardContent>
        </Card>
    )
}

TokenPack.propTypes = {
    source: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    amount: PropTypes.string.isRequired,
    onSuccess: PropTypes.func.isRequired,
    onError: PropTypes.func.isRequired
}

export default TokenPack;