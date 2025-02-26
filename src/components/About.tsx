import React from "react";
import styled from "styled-components";

const AboutSectionWrapper = styled.section`
    width: 100%;

    // border: 2px solid blue;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Header = styled.h1`
    font-size: 3rem;
    margin-top: 20px;
`;

const Paragraph = styled.p`
    font-size: 20px;
    font-weight: 500;
    letter-spacing: -0.05em;
    max-width: 800px;
    justify-content: center;
    text-align: center;
    color: #e5e7eb;
    margin: 1.25rem;
`;

const AboutSection: React.FC = () => (
    <AboutSectionWrapper>
        <Header>ABOUT ME</Header>
        <Paragraph>
            I am a software developer with a passion for building web
            applications. I specialize in front-end development and have
            experience with React, Angular, and Vue. I am currently looking for
            new opportunities to work with a team of talented
            developersssssssssss.
        </Paragraph>
    </AboutSectionWrapper>
);

export default AboutSection;
