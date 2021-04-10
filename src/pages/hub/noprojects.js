import React from "react"
import styled from "styled-components";
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from "@material-ui/core";


const Wrapper = styled.div`
    width: 100%;
    height: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Message = styled.h1`
    color: #adb5bd;
    font-size: 2rem;
`;

const useStyles = makeStyles({
    icon: {
        fontSize: "5rem",
        color: "#adb5bd"
    }
})


const NoProjectMessage = () => {
    const classes = useStyles();

    return (
        <Wrapper>
            <AddIcon classes={{ root: classes.icon }}/>
            <Message>Create a project</Message>
        </Wrapper>
    )
}

export default NoProjectMessage;