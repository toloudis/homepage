const skillsList = [
  { title: "WebGL", value: 75 },
  { title: "OpenGL", value: 80 },
  { title: "Typescript", value: 80 },
  { title: "C++", value: 80 },
  { title: "Python", value: 60 },
  { title: "WebGPU", value: 70 },
  { title: "Qt", value: 70 },
];
interface MyProject {
  id: number;
  title: string;
  technologies: string[];
  backgroundImage: string;
  frontImage: string;
}
const projectList = [
  {
    id: 1,
    title: "AGAVE",
    technologies: ["C++", "OpenGL", "Qt"],
    backgroundImage:
      "https://cdn.cbeditz.com/cbeditz/preview/black-red-gradient-background-wallpaper-74-11614352798fbqrv1wpuv.jpg",
    frontImage:
      "https://www.allencell.org/uploads/8/1/9/9/81996008/agave-0-0-4-2-softwarepage-2_3.jpg",
  },
  {
    id: 2,
    title: "Volume-viewer",
    technologies: ["Typescript", "WebGL", "React"],
    backgroundImage:
      "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?size=626&ext=jpg&ga=GA1.2.2102900112.1628985600",
    frontImage:
      "https://www.allencell.org/uploads/8/1/9/9/81996008/published/pathtrace-in-cfe-may-2019-1.png?1558494528",
  },
  {
    id: 3,
    title: "Simularium",
    technologies: ["Typescript", "WebGL", "React"],
    backgroundImage:
      "https://media.istockphoto.com/vectors/abstract-purple-vector-background-with-stripes-vector-id972475894?k=6&m=972475894&s=612x612&w=0&h=99AirGMOb64N2-1ZSMYRjEBp2USrAdzXUGzQMh5o6Js=",
    frontImage:
      "https://simularium.allencell.org/b7a6382c37af63d26e8f7ce51ce4f220.gif",
  },
];

const experienceList = [
  {
    id: 0,
    company: "Allen Institute for Cell Science",
    links: {
      website: "https://allencell.org",
      facebook: "",
      instagram: "",
    },
  },
  {
    id: 1,
    company: "Dreamworks Animation",
    links: {
      website: "https://dreamworks.com",
      instagram: "",
    },
  },
  {
    id: 2,
    company: "Studio | GPU",
    links: {
      website: "",
      instagram: "",
    },
  },
];

export { skillsList, projectList, experienceList };
export type { MyProject };
