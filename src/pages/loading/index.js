import React from "react";
import { CircularProgress } from "@material-ui/core";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const LoadingPage = () => {
    return (
        <Wrapper>
            <CircularProgress size="3rem"/>
        </Wrapper>
    )
}

export default LoadingPage