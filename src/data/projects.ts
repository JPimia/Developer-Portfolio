import project1 from "../assets/images/coming.png";

export interface Project {
    title: string;
    description: string;
    image: string;
}

export const projects: Project[] = [
    {
        title: "Project 1",
        description: "This is description for this example project placeholder.",
        image: project1,
    },
    {
        title: "Project 2",
        description: "This is description for this example project placeholder.",
        image: project1,
    },
    {
        title: "Project 3",
        description: "This is description fodffsddsfaceholder.",
        image: "../assets/images/coming.png",
    },
    {
        title: "Project 4",
        description: "This is description asdholder.",
        image: "../assets/images/coming.png",
    },
]; 