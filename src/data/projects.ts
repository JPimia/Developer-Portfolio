import placeholder from "../assets/images/coming.png";

export interface Project {
    title: string;
    description: string;
    image: string;
}

export const projects: Project[] = [
    {
        title: "Project 1",
        description: "This is description for this example project placeholder.",
        image: placeholder,
    },
    {
        title: "Project 2",
        description: "This is description for this example project placeholder.",
        image: placeholder,
    },
    {
        title: "Project 3",
        description: "This is description placeholder.",
        image: placeholder,
    },
    {
        title: "Project 4",
        description: "This is description placeholder alsoo.",
        image: placeholder,
    },
]; 