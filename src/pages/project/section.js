import { CardContent, makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import PropTypes from "prop-types";

const useStyles = makeStyles({
    header: {
        backgroundColor: "#e5e5e5",
        color: "#525252"
    },
    card: {
        margin: "20px 0"
    },
    cardContent: {
        padding: "30px"
    }
})

function Section(props) {
    const classes = useStyles();

    return (
        <Card classes={{root: classes.card}}>
            <CardHeader 
                classes={{ root: classes.header }}
                title={props.title}/>
            <CardContent classes={{root: classes.cardContent }}>
            {
                props.children
            }
            </CardContent>
        </Card>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired
}

export default Section;

