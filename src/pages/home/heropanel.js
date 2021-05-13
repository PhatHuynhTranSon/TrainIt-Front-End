import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Wrapper = styled.section`
    width: 100%;
    height: 30rem;
    background-image: linear-gradient(to right bottom, #3A0CA3, #7209B7);
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const HeroHeader = styled.h1`
    text-transform: uppercase;
    color: #ffffff;
    font-size: 2.5rem;
    margin-bottom: 10px;
`;

const HeroSubheader = styled.p`
    font-weight: 200;
    font-size: 1.5rem;
    color: #ffffff;
    margin-bottom: 20px;
`;

const HeroButton = styled(Link)`
    text-decoration: none;
    background-color: #ffffff;
    color: #7209B7;
    font-weight: 200;
    display: block;
    padding: 10px 15px;
    border-radius: 200rem;
`;

const HeroPanel = () => {
    return (
        <Wrapper> 
            <HeroHeader>Cloud-based ML training</HeroHeader>
            <HeroSubheader>Fast, cheap and friendly</HeroSubheader>
            <HeroButton to="/signup">Explore</HeroButton>
        </Wrapper>
    )
}

export default HeroPanel;