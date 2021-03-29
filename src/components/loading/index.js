import styled from "styled-components";
import PropTypes from "prop-types";
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        width: "60%",
        marginBottom: "20px"
    }
})

const LoadingWrapperStyle = styled.div`
    margin: 5rem auto;
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

function Loading(props) {
    const classes = useStyles();

    return (
        <LoadingWrapperStyle>
            <LinearProgress classes={{root: classes.root}}/>
            <LoadingLabelStyle>
            {
                props.label
            }
            </LoadingLabelStyle>
        </LoadingWrapperStyle>
    )
}

Loading.propTypes = {
    label: PropTypes.string.isRequired
}

export default Loading;