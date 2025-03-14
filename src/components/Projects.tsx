import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
// import project1 from "../assets/images/coming.png";
import { projects } from "../data/projects";

const ProjectsWrapper = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    border: 1px solid red;
`;

const ProjectCard = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 800px;

    background-color: #1a1a1a;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    border: 1px solid red;
`;

const ProjectsContainer = styled(motion.div)`
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
    flex-wrap: wrap;
    border: 1px solid blue;
`;

const ProjectBadge = styled(motion.span)`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    gap: 10px;
    background: linear-gradient(to right, #a855f7, #f97316);
    -webkit-background-clip: text;
    color: transparent;
    text-align: center;
    border: 1px solid red;
    width: 45%;
    height: 100px;
    border-radius: 10px;
`;

const ProjectTitle = styled.h1`
    font-size: 1rem;
    letter-spacing: 0.25em;
    color: white;
`;

const ProjectDescription = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 0.6rem;
    font-weight: 100;
    letter-spacing: 0.25em;
    color: white;
    opacity: 0.7;
`;

const ProjectImage = styled.img`
    min-width: 40%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    align-items: center;
    align-self: left;
`;

const Header = styled.h1`
    font-size: 3rem;
    letter-spacing: 2px;
    color: white;
    text-align: center;
`;

const SubHeader = styled.p`
    font-size: 1rem;
    letter-spacing: 0.25em;
    background: linear-gradient(to right, #a855f7, #f97316);
    -webkit-background-clip: text;
    color: transparent;
    text-align: center;
`;

const Projects: React.FC = () => (
    <ProjectsWrapper>
        <ProjectCard>
            <Header>PROJECTS</Header>
            <SubHeader>EXPLORE</SubHeader>
            <ProjectsContainer>
                {projects.map((project, index) => (
                    <ProjectBadge key={index}>
                        <ProjectImage src={project.image} />
                        <ProjectDescription>
                            <ProjectTitle>{project.title}</ProjectTitle>
                            {project.description ? (
                                <ProjectDescription>
                                    {project.description}
                                </ProjectDescription>
                            ) : (
                                <ProjectDescription>
                                    This is description for this example project
                                    placeholder.
                                </ProjectDescription>
                            )}
                        </ProjectDescription>
                    </ProjectBadge>
                ))}
            </ProjectsContainer>
        </ProjectCard>
    </ProjectsWrapper>
);

export default Projects;
