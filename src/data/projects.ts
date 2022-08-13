interface projectsType{
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    github: string;
    demo: string;
}

export const projects:projectsType[] = [
    {
        id:1,
        title:"Money Tracker App",
        description:"Money Tracker App es una es una aplicación diseñada para ayudar a las personas a llevar un mejor control de sus ingresos y gastos",
        image:"https://raw.githubusercontent.com/miriacode/money-tracker/main/project-images/categories-dark.jpg",
        technologies:["React", "SASS", "NodeJS", "Express"],
        github:"https://github.com/miriacode/money-tracker",
        demo:"https://todo-app-frontend-mentor-miriacode.netlify.app/",
    },
    {
        id:2,
        title:"REDUX Store",
        description:"Lorem ipsum smsksksmsmss",
        image:"https://raw.githubusercontent.com/miriacode/money-tracker/main/project-images/categories-dark.jpg",
        technologies:["React", "Typescript", "CSS"],
        github:"",
        demo:"",
    },
    {
        id:3,
        title:"Movie App",
        description:"Money Tracker App",
        image:"",
        technologies:["JS", "HTML", "CSS"],
        github:"",
        demo:"",
    },
    {
        id:4,
        title:"To Do App",
        description:"Money Tracker App",
        image:"",
        technologies:["JS", "HTML", "CSS"],
        github:"",
        demo:"",
    },
    {
        id:5,
        title:"To Do App",
        description:"Money Tracker App",
        image:"",
        technologies:["JS", "HTML", "CSS"],
        github:"",
        demo:"",
    },
    {
        id:6,
        title:"To Do App",
        description:"Money Tracker App",
        image:"",
        technologies:["JS", "HTML", "CSS"],
        github:"",
        demo:"",
    },
    {
        id:7,
        title:"Proyecto 7",
        description:"Money Tracker App",
        image:"",
        technologies:["JS", "HTML", "CSS"],
        github:"",
        demo:"",
    }
]