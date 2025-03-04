import React from "react";
import styled from "styled-components";
import { FaBriefcase } from "react-icons/fa"; // For company icon

const ExperienceWrapper = styled.section`
    width: 100%;
    padding: 50px 20px;
    justify-content: center;
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
    display: flex;
    flex-direction: column;
    max-width: 800px;

    padding: 30px;
    border-radius: 10px;

    text-align: left;
    gap: 15px;
`;

const CompanyInfo = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;

    gap: 10px;
    font-size: 1.2rem;
    font-weight: 600;
    color: rgb(255, 255, 255);
`;

const Paragraph = styled.p`
    display: flex;
    font-size: 18px;
    justify-content: center;
    text-align: left;
    line-height: 1.6;
    opacity: 0.8;
`;

const SkillsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
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
                <strong style={{ marginBottom: -5 }}>
                    <FaBriefcase
                        style={{ marginRight: 8 }}
                        color="rgb(81, 91, 224)"
                    />
                    Amabit Oy / Software Developer
                </strong>
                <strong style={{ marginLeft: "auto", marginBottom: -5 }}>
                    April 2024 - January 2025
                </strong>
            </CompanyInfo>

            <Paragraph>
                I worked on the company's internal cross-platform project Runco
                as both a front-end and back-end developer. Runco is a
                cloud-based system framework designed to create project
                structures tailored to customer needs. It enables fully
                development-ready project setups within 30 minutes, providing a
                scalable and efficient foundation for software development.
                <br />
                <br />
                My experience with Flutter has allowed me to develop
                cross-platform mobile applications that run seamlessly on both
                iOS and Android platforms. Additionally, my proficiency in
                React.js has equipped me with the skills to create fast,
                scalable, and dynamic web pages with excellent user experiences.
                I have a great understanding of component-based architecture and
                state management.
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
