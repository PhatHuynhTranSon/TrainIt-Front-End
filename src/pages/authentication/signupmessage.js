import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Message = styled.p`
    font-size: 1rem;

`;

const MessageLink = styled(Link)`
    text-decoration: none;
    color: #7209b7;

    &:visited {
        color: #7209b7;
    }
`;

const AuthMessage = ({ message, linktext, linkto }) => 
    <Message>
        {
            message
        }
        <MessageLink to={linkto}>{ linktext }</MessageLink>
    </Message>

export default AuthMessage;