import React, { useRef } from "react";
import styled from "styled-components";
import { FaBriefcase } from "react-icons/fa"; // For company icon
import { motion, useInView } from "framer-motion";

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

const ExperienceContainer = styled(motion.div)`
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

const Paragraph = styled(motion.p)`
    display: flex;
    font-size: 18px;
    justify-content: center;
    text-align: left;
    line-height: 1.6;
    opacity: 0.8;
`;

const SkillsContainer = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 15px;
`;

const SkillBadge = styled(motion.span)`
    background: rgba(255, 255, 255, 0.11);
    border: 1px solid rgba(255, 255, 255, 0.5);
    padding: 8px 15px;
    border-radius: 20px;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
`;

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

const ExperienceSection: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.3 });

    return (
        <ExperienceWrapper ref={ref}>
            <Header>EXPERIENCE</Header>
            <SubHeader>SOFTWARE DEVELOPER</SubHeader>

            <ExperienceContainer
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1 }}
            >
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

                <Paragraph
                    initial={{ opacity: 0, x: 100 }}
                    animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
                    }
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    I worked on the company's internal cross-platform project
                    Runco as both a front-end and back-end developer. Runco is a
                    cloud-based system framework designed to create project
                    structures tailored to customer needs. It enables fully
                    development-ready project setups within 30 minutes,
                    providing a scalable and efficient foundation for software
                    development.
                    <br />
                    <br />
                    My experience with Flutter has allowed me to develop
                    cross-platform mobile applications that run seamlessly on
                    both iOS and Android platforms. Additionally, my proficiency
                    in React.js has equipped me with the skills to create fast,
                    scalable, and dynamic web pages with excellent user
                    experiences. I have a great understanding of component-based
                    architecture and state management.
                </Paragraph>

                <SkillsContainer
                    variants={container}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                >
                    <SkillBadge variants={item}>Flutter</SkillBadge>
                    <SkillBadge variants={item}>React</SkillBadge>
                    <SkillBadge variants={item}>Python</SkillBadge>
                    <SkillBadge variants={item}>TypeScript</SkillBadge>
                    <SkillBadge variants={item}>AWS</SkillBadge>
                    <SkillBadge variants={item}>Azure</SkillBadge>
                </SkillsContainer>
            </ExperienceContainer>
        </ExperienceWrapper>
    );
};

export default ExperienceSection;
