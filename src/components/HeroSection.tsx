import React from "react";
import styled, { keyframes } from "styled-components";
// import Icon from "../icon.png";
import getImage from "../assets/images/popcorn.gif";
import heroImage from "../assets/images/hero-image.png";

const HeroWrapper = styled.section`
    width: 100%;
    margin-top: 100px;
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const bounce = keyframes`
    0%, 100% {
        transform: translateY(-25%);
        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
        transform: translateY(0);
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
`;

const Heading = styled.h1`
    width: 1000px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 5rem;
    margin-bottom: 10px;
    animation: ${bounce} 1s infinite;
    @media (max-width: 768px) {
        flex-direction: column; /* Change to column on smaller screens */
    }
`;

const SubHeading = styled.h2`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: -0.05em;
    color: #d1d5db;
    margin-bottom: 10px;
`;

const Paragraph = styled.p`
    font-size: 20px;
    font-weight: 500;
    letter-spacing: -0.05em;
    max-width: 750px;
    justify-content: center;
    text-align: center;
    color: #e5e7eb;
    opacity: 0.8;
    margin: 1.25rem;
`;

const Highlight = styled.span`
    font-weight: 600px;
    background: linear-gradient(to right, #a855f7, #f97316);
    -webkit-background-clip: text;
    color: transparent;
`;

const Highlight2 = styled.span`
    font-weight: 600px;
    background: linear-gradient(to right, #a855f7, #a855f7);
    -webkit-background-clip: text;
    color: transparent;
`;

const StyledImage = styled.img`
    height: 35px;
    width: 50px;
    margin-top: 1px;
`;

const RoundCircle = styled.div`
    height: 250px;
    width: 250px;
    background-color: #333;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
    position: relative;
    top: -50px;
`;

const HeroImage = styled.img`
    height: 150%;
    width: 150%;
    object-fit: cover;
`;

const ContactButton = styled.button`
    height: 50px;
    width: 150px;
    background-color: transparent;
    border-radius: 15px;
    border: 2px solid white;
    color: white;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    z-index: 0;
    transition: transform 0.2s, box-shadow 0.2s;
    &:hover {
        transform: scale(1.05);
        background-color: white;
        color: black;
    }
    &:focus {
        outline: none;
    }
`;

const HeroSection: React.FC = () => (
    <HeroWrapper>
        <RoundCircle>
            <HeroImage src={heroImage} />
        </RoundCircle>
        <Heading>
            Hi, I'm<Highlight2>&nbsp;Jari Pimiä!</Highlight2>
        </Heading>
        <SubHeading>
            I like to Code &&nbsp;<Highlight>Chill</Highlight>
            <StyledImage src={getImage} alt="icon" />
        </SubHeading>
        <Paragraph>
            Passionate Software Developer with a focus on React and Flutter
            development. Dedicated to crafting elegant and user-friendly web and
            mobile applications. Experienced in leveraging cloud services such
            as AWS and Azure to build scalable and efficient solutions.
        </Paragraph>
        <ContactButton
            onClick={() =>
                (window.location.href = "mailto:jari.pimiaa@gmail.com")
            }
        >
            Contact Me
        </ContactButton>
    </HeroWrapper>
);

export default HeroSection;
