import React from "react";
import styled from "styled-components";

const FooterSection = styled.footer`
    padding: 10px;
    text-align: center;
`;

const Copyright = styled.p`
    font-size: 1.5rem;
    color: #7209B7;
`;


const Footer = () => {
    return (
        <FooterSection>
            <Copyright>@Trainee, 2021</Copyright>
        </FooterSection>
    )
}

export default Footer;