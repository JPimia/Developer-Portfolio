import React from "react";
import styled from "styled-components";

const AboutSectionWrapper = styled.section`
    width: 100%;

    // border: 2px solid blue;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 80px;
`;

const Header = styled.h1`
    font-size: 3rem;
    margin-top: 20px;
`;

const Paragraph = styled.p`
    font-size: 20px;
    font-weight: 500;
    letter-spacing: -0.05em;
    max-width: 780px;
    justify-content: center;
    text-align: center;
    color: #e5e7eb;
    opacity: 0.8;
    margin: 1.25rem;
`;

const AboutSection: React.FC = () => (
    <AboutSectionWrapper>
        <Header>ABOUT ME</Header>
        <Paragraph>
            I specialize in front-end development, working with React and
            Flutter to build intuitive and visually appealing mobile and web
            applications. Additionally, I have experience with backend
            development using Python and C#, as well as cloud services like AWS
            and Azure to create scalable and efficient systems. I am highly
            motivated and always eager to expand my programming knowledge.
        </Paragraph>
    </AboutSectionWrapper>
);

export default AboutSection;
