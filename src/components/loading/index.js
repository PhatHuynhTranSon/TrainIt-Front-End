import styled from "styled-components";
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        width: "60%",
        marginBottom: "20px"
    }
})

const LoadingWrapperStyle = styled.div`
    margin: 10rem auto;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const LoadingLabelStyle = styled.h2`
    font-weight: 400;
    font-size: 1.5rem;
`;

function ProjectIsLoading(props) {
    const classes = useStyles();

    return (
        <LoadingWrapperStyle>
            <LinearProgress classes={{root: classes.root}}/>
            <LoadingLabelStyle>
                Creating project
            </LoadingLabelStyle>
        </LoadingWrapperStyle>
    )
}

export default ProjectIsLoading;