import React from "react";
import styled from "styled-components";
import { FaBriefcase } from "react-icons/fa"; // For company icon

const ExperienceWrapper = styled.section`
    width: 100%;
    padding: 50px 20px;

    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

const Header = styled.h1`
    font-size: 3rem;
    letter-spacing: 2px;
`;

const SubHeader = styled.p`
    font-weight: 600px;
    background: linear-gradient(to right, #a855f7, #f97316);
    letter-spacing: 0.25em;
    -webkit-background-clip: text;
    color: transparent;
`;

const ExperienceContainer = styled.div`
    max-width: 800px;

    padding: 30px;
    border-radius: 10px;

    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const CompanyInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.2rem;
    font-weight: 600;
    color: rgb(182, 182, 182);
`;

const Paragraph = styled.p`
    font-size: 18px;
    line-height: 1.6;
`;

const SkillsContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 15px;
`;

const SkillBadge = styled.span`
    background: rgba(255, 255, 255, 0.11);
    border: 1px solid rgba(255, 255, 255, 0.5);
    padding: 8px 15px;
    border-radius: 20px;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
`;

const ExperienceSection: React.FC = () => (
    <ExperienceWrapper>
        <Header>EXPERIENCE</Header>
        <SubHeader>SOFTWARE DEVELOPER</SubHeader>

        <ExperienceContainer>
            <CompanyInfo>
                <FaBriefcase />
                <strong>Amabit Oy / Software Developer</strong>
                <strong style={{ marginLeft: "auto" }}>
                    April 2024 - January 2025
                </strong>
            </CompanyInfo>

            <Paragraph>
                Currently, I am working on WebHR Mobile Application, a
                Cloud-based Social HR Software used worldwide. As a React.js
                developer with 2.5 years of experience, I have a strong
                foundation in creating dynamic and responsive mobile and web
                applications.
            </Paragraph>

            <SkillsContainer>
                <SkillBadge>Flutter</SkillBadge>
                <SkillBadge>React</SkillBadge>
                <SkillBadge>Python</SkillBadge>
                <SkillBadge>TypeScript</SkillBadge>
                <SkillBadge>AWS</SkillBadge>
                <SkillBadge>Azure</SkillBadge>
            </SkillsContainer>
        </ExperienceContainer>
    </ExperienceWrapper>
);

export default ExperienceSection;
