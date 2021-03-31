import { Card, CardContent, Typography, makeStyles, CardActions, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    card: {
        margin: "5px"
    },
    heading: {
        color: "#7209b7"
    },
    type: {
        marginBottom: "10px"
    }
});

function ProjectCard(props) {
    const { project } = props;
    const classes = useStyles();

    return (
        <Card classes={{ root: classes.card }}>
            <CardContent>
                <Typography 
                    variant="h5" 
                    component="h2"
                    classes={{ root: classes.heading }}>
                    { project.name }
                </Typography>

                <Typography className={classes.type} color="textSecondary">
                {
                    project.type
                }
                </Typography>

                <Typography variant="body2" component="p">
                {
                    project.description
                }
                </Typography>
            </CardContent>
            <CardActions>
                <Button component={Link} to={`/hub/projects/${project.id}`} size="small">View</Button>
            </CardActions>
        </Card>
    )
}

export default ProjectCard;