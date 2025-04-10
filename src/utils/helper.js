import {
  FaDiagramProject,
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaHouse,
  FaLinkedinIn,
  FaRenren,
  FaUser,
  FaYoutube,
} from "react-icons/fa6";
import {
  ChatApp,
  CodePenClone,
  FreshJuiceUI,
  ImageSharing,
  OpenAI,
  PixabayClone,
  PortfolioFirebase,
  RestaurantClone,
  SocialMedia,
} from "../assets";

export const Socials = [
  {
    id: `facebook-${Date.now()}`,
    Icon: FaFacebookF,
    uril: "",
    color: "#1877F2",
  },
  {
    id: `linkedin-${Date.now()}`,
    Icon: FaLinkedinIn,
    uril: "",
    color: "#0072b1",
  },
  {
    id: `github-${Date.now()}`,
    Icon: FaGithub,
    uril: "",
    color: "#fff",
  },
  {
    id: `youtube-${Date.now()}`,
    Icon: FaYoutube,
    uril: "",
    color: "#ff0000",
  },
];

export const Menus = [
  {
    id: `home-${Date.now()}`,
    Icon: FaHouse,
    uri: "#home",
    name: "Home",
  },
  {
    id: `about-${Date.now()}`,
    Icon: FaUser,
    uri: "#about",
    name: "About",
  },
  {
    id: `skills-${Date.now()}`,
    Icon: FaRenren,
    uri: "#skills",
    name: "Skills",
  },
  {
    id: `projects-${Date.now()}`,
    Icon: FaDiagramProject,
    uri: "#projects",
    name: "Projects",
  },
  {
    id: `contact-${Date.now()}`,
    Icon: FaEnvelope,
    uri: "#contact",
    name: "Contact",
  },
];
export const iconClasses = {
  html: "devicon-html5-plain",
  css: "devicon-css3-plain",
  js: "devicon-javascript-plain",
  python: "devicon-python-plain",
  flask: "devicon-flask-original",
  react: "devicon-react-original",
  nodejs: "devicon-nodejs-plain",
  nextjs: "devicon-nextjs-plain",
  express: "devicon-express-original",
  sanity: "devicon-sanity-plain",
  firebase: "devicon-firebase-plain",
  electron: "devicon-electron-original",
  typescript: "devicon-typescript-plain",
};

export const aboutIcons = [
  "devicon-html5-plain",
  "devicon-css3-plain",
  "devicon-javascript-plain",
  "devicon-python-plain",
  "devicon-flask-original",
  "devicon-react-original",
  "devicon-nodejs-plain",
  "devicon-nextjs-plain",
  "devicon-express-original",
  "devicon-sanity-plain",
  "devicon-firebase-plain",
  "devicon-electron-original",
  "devicon-typescript-plain",
];

export const ProjectsData = [
  {
    id: `food-${Date.now()}`,
    name: "Single Food Restaurant",
    imgSrc: RestaurantClone,
    gitURL: "https://github.com/CrazyDevJohn/",
    liveUrl: "#",
  },
  {
    id: `codepen-${Date.now()}`,
    name: "CodePen Clone",
    imgSrc: CodePenClone,
    gitURL: "https://github.com/CrazyDevJohn/",
    liveUrl: "#",
  },
  {
    id: `openai-${Date.now()}`,
    name: "OpenAI",
    imgSrc: OpenAI,
    gitURL: "https://github.com/CrazyDevJohn/",
    liveUrl: "#",
  },
  {
    id: `chatapp-${Date.now()}`,
    name: "Chat App Build",
    imgSrc: ChatApp,
    gitURL: "https://github.com/CrazyDevJohn/",
    liveUrl: "#",
  },
  {
    id: `imageSharing-${Date.now()}`,
    name: "Image Sharing App",
    imgSrc: ImageSharing,
    gitURL: "https://github.com/CrazyDevJohn/",
    liveUrl: "#",
  },
  {
    id: `pixabayclone-${Date.now()}`,
    name: "Pixabay Clone 2.0",
    imgSrc: PixabayClone,
    gitURL: "https://github.com/CrazyDevJohn/",
    liveUrl: "#",
  },
  {
    id: `freshjuiceui-${Date.now()}`,
    name: "Fresh Juice UI Build",
    imgSrc: FreshJuiceUI,
    gitURL: "https://github.com/CrazyDevJohn/",
    liveUrl: "#",
  },
  {
    id: `socialmedia-${Date.now()}`,
    name: "Social Media App",
    imgSrc: SocialMedia,
    gitURL: "https://github.com/CrazyDevJohn/",
    liveUrl: "#",
  },
  {
    id: `portfoliofirebase-${Date.now()}`,
    name: "Portfolio UI Fireabse",
    imgSrc: PortfolioFirebase,
    gitURL: "https://github.com/CrazyDevJohn/",
    liveUrl: "#",
  },
];

export const skillsIcons = [
  {
    lang: "html5",
    progress: "90%",
    color: "#E34C26",
  },
  {
    lang: "css3",
    progress: "85%",
    color: "#3C99DC",
  },
  {
    lang: "javascript",
    progress: "97%",
    color: "#F0DB4F",
  },
  {
    lang: "python",
    progress: "95%",
    color: "#306998",
  },
  {
    lang: "typescript",
    progress: "95%",
    color: "#135A8E",
  },
  {
    lang: "flask",
    progress: "90%",
    color: "#333",
  },
  {
    lang: "react",
    progress: "94%",
    color: "#61DBFB",
  },
  {
    lang: "nodejs",
    progress: "88%",
    color: "#058100",
  },
  {
    lang: "nextjs",
    progress: "75%",
    color: "#111",
  },
  {
    lang: "electron",
    progress: "90%",
    color: "#00AEEF",
  },
];
