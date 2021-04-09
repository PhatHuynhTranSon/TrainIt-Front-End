import React from "react";
import styled from "styled-components";

const Circle = styled.div`
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    text-align: center;
    line-height: 9.5rem;
`
const GreenCircle = styled(Circle)`
    border: 5px solid #06D6A0;
`;

const RedCircle = styled(Circle)`
    border: 5px solid #D00000;
`

const StateLoadingWrapperStyle = styled.div`
    position: relative;
`;

const StateLoadingStyle = styled.div`
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    border: 5px solid #e9c46a;
    border-top: 5px solid transparent;
    text-align: center;
    color: #515151;
    line-height: 9.5rem;
    animation: rotation 2s linear infinite;

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
`

const StateLoadingTextStyle = styled.p`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-40%, -50%);
`;

const YellowCircle = ({ status }) => {
    return (
        <StateLoadingWrapperStyle>
            <StateLoadingStyle />
            <StateLoadingTextStyle>{ status }</StateLoadingTextStyle>
        </StateLoadingWrapperStyle>
    )
}

const NotebookState = ({ status }) => {
    const renderCircle = (status) => {
        if (status === "InService") return <GreenCircle>{ status }</GreenCircle>;
        else if (status === "Stopped") return <RedCircle>{ status }</RedCircle>;
        else return <YellowCircle status={status}/>;
    }

    return renderCircle(status);
}


export default NotebookState;