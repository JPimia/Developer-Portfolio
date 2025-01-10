import React from "react";
import styled from "styled-components";

const ExperienceWrapper = styled.section`
    width: 100%;
    border: 2px solid green;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Header = styled.h1`
    font-size: 3rem;
    margin-top: 20px;
    margin-bottom: 40px;
`;

const Paragraph = styled.p`
    display: flex;
    font-size: 20px;
    width: 800px;
`;

const ExperienceSection: React.FC = () => (
    <>
        <ExperienceWrapper>
            <Header>EXPERIENCE</Header>
            <Paragraph>
                I have been working as a software developer for over 5 years. I
                have experience with front-end development using React, Angular,
                and Vue. I have also worked on back-end development using
                Node.js and Django. I am currently working as a full-stack
                developer at a startup company.
            </Paragraph>
        </ExperienceWrapper>
    </>
);

export default ExperienceSection;
