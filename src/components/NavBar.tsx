import React from "react";
import styled from "styled-components";
import signature from "../assets/images/signature.png";

const NavBarWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 20px 40px;
    z-index: 1000;
    backdrop-filter: blur(5px);
    background: transparent;
    // border: 2px solid red;
    position: sticky;
    width: 100%;
    top: 0;
`;

const Logo = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    margin-left: -25px;
    margin-top: 10px;
    margin-bottom: -25px;
`;

const Signature = styled.img`
    display: flex;
    width: 250px;
    align-self: center;
    justify-self: center;
`;

const ContactButton = styled.nav`
    a {
        display: flex;
        font-size: 1rem;
        font-weight: 500;
        font-family: "Poppins", sans-serif;
        letter-spacing: 0.15px;
        color: rgb(212, 212, 212);
        padding: 10px 30px;
        border-radius: 10px;
        transform: scaleX(1.2);
        &:hover {
            background-color: rgba(112, 112, 112, 0.4);
        }
        margin-right: 25px;
    }
`;

const Header: React.FC = () => (
    <NavBarWrapper>
        <Logo>
            <a href="/">
                <Signature src={signature} alt="signature" />
            </a>
        </Logo>
        <ContactButton>
            <a href="mailto:jari.pimiaa@gmail.com">Contact</a>
        </ContactButton>
    </NavBarWrapper>
);

export default Header;
