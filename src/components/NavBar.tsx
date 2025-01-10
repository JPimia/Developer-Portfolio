import React from "react";
import styled from "styled-components";

const NavBarWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 20px 40px;
    z-index: 1000;
    backdrop-filter: blur(5px);
    background: transparent;
    border: 2px solid red;
    position: sticky;
    width: 100%;
    top: 0;
`;

const Logo = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
`;

const Nav = styled.nav`
    a {
        border: 1px solid #fff;
        font-size: 1rem;
        padding: 5px 15px;
        border-radius: 20px;
    }
`;

const Header: React.FC = () => (
    <NavBarWrapper>
        <Logo>Jari Pimiä</Logo>
        <Nav>
            <a href="#contact">Contact</a>
        </Nav>
    </NavBarWrapper>
);

export default Header;
