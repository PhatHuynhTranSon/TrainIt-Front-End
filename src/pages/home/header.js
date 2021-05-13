import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Icon from "../../media/Icon.svg";

const Nav = styled.nav`
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    padding-left: 20px;
`;

const Logo = styled.img`
    height: 100%;
    width: auto;
`;

const Menu = styled.div`
    display: flex;
    width: 20%;
    justify-content: space-around;
`;

const MenuLink = styled(Link)`
    display: block;
    text-decoration: none;
    color: #7209B7;
    padding: 5px;
`;

const Header = () => {
    return (
        <Nav>
            <Logo src={Icon}/>
            <Menu>
                <MenuLink to="/login">Log in</MenuLink>
                <MenuLink to="/signup">Sign up</MenuLink>
            </Menu>
        </Nav>
    )
}

export default Header;