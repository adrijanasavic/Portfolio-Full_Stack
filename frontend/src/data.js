import imgHtml from "./assets/html.png";
import imgCss from "./assets/css.png";
import imgSass from "./assets/sass.png";
import tailwind from "./assets/tailwind.png";
import imgBootstrap from "./assets/bootstrap.png";
import imgGit from "./assets/git.png";
import imgGitHub from "./assets/gitHub.png";
import imgJavascript from "./assets/javascript.png";
import imgReact from "./assets/react.png";
import angularTs from "./assets/angular.png";
import imgRedux from "./assets/redux.png";
import imgNode from "./assets/node.png";
import imgMongo from "./assets/mongoDb.png";
import imgPostman from "./assets/postman.webp";
import java from "./assets/java.png";
import sql from "./assets/sql.png";
import php from "./assets/php.png"
const projects = [
    {
        id: 1,
        picture: "./images/swimming.jpg",
        title: "Swimming app",
        description: "Private swimming lessons",
        skill: ["React ", "NodeJS ", "MongoDB"],
        github: "https://github.com/adrijanasavic/frontend_swimming",
        link: "https://frontend-swimming.vercel.app/",
    },
    {
        id: 2,
        picture: "./images/portfolio.jpg",
        title: "Portfolio",
        description: "My portfolio",
        skill: ["React ", "NodeJS ", "MongoDB"],
        github: "https://github.com/adrijanasavic/Portfolio-Full_Stack",
        link: "",
    },
    {
        id: 3,
        picture: "./images/housemarket.jpg",
        title: "House Marketplace",
        description: "Delivery and rental of houses",
        skill: ["React ", "NodeJS ", "MongoDB"],
        github: "https://github.com/adrijanasavic/House-Marketplace",
        link: "https://house-marketplace-teal.vercel.app/",
    },
    {
        id: 4,
        picture: "./images/feedback.jpg",
        title: "Feedback-UI",
        description: "CRUD app.",
        skill: ["React"],
        github: "https://github.com/adrijanasavic/Feedback-UI",
        link: "https://feedback-app-react-as.netlify.app/",
    },
    {
        id: 5,
        picture: "./images/metalart.jpg",
        title: "Metal Art",
        description: "Final project on a course at SmartInIT.",
        skill: ["Angular (TypeScript) ", "Firebase"],
        github: "https://github.com/adrijanasavic/MetalArt-Angular",
        link: "https://metal-art-angular.netlify.app/",
    },
    {
        id: 6,
        picture: "./images/spacex.jpg",
        title: "SpaceX Land",
        description: "The project made in Angular with API calls.",
        skill: ["Angular (TypeScript) ", "API"],
        github: "https://github.com/adrijanasavic/SpaceX-Land-Angular",
        link: "https://spacex-land-angular.netlify.app/",
    },
    {
        id: 7,
        picture: "./images/shop.jpg",
        title: "Shop",
        description: "Project done during the course at SmartInIT.",
        skill: ["Angular (TypeScript) ", "Firebase"],
        github: "https://github.com/adrijanasavic/Shop-app-Angular",
        link: "https://shop-app-angular.netlify.app/",
    },
    {
        id: 8,
        picture: "./images/drevna.jpg",
        title: "Restaurant",
        description: "Project for the subject of Web programming",
        skill: ["HTML ", "LESS"],
        github: "https://github.com/adrijanasavic/Restaurant_LESS",
        link: "https://drevna.netlify.app/",
    },
    {
        id: 9,
        picture: "./images/novisad.jpg",
        title: "Novi Sad",
        description: "Android app about sights, nature, culture, shopping malls and restaurants in my city.",
        skill: ["Java - Android"],
        github: "https://github.com/adrijanasavic/Novi-Sad",
        link: "https://play.google.com/store/apps/details?id=com.ns.novi_sad",
    },
    {
        id: 10,
        picture: "./images/bap.jpg",
        title: "BAP Vesti",
        description: "Informing the public about events from all areas of life.",
        skill: ["Java - Android"],
        github: "https://github.com/adrijanasavic",
        link: "https://play.google.com/store/apps/details?id=app.bp",
    },
    {
        id: 11,
        picture: "",
        title: "Final test at FTN",
        description: "Final test at FTN Informatics. Successfully passed with 77%",
        skill: ["Java - Android"],
        github: "https://github.com/adrijanasavic/FTN_Zavrsni_Test",
        link: "https://www.youtube.com/watch?v=bTNHdx3LFXs&ab_channel=AdrijanaJovicicSavic",
    },
    {
        id: 12,
        picture: "",
        title: "Movies and Actors",
        description: "Android app using rest Api.",
        skill: ["Java - Android"],
        github: "https://github.com/adrijanasavic/Movies_and_Actors",
        link: "https://www.youtube.com/watch?v=bBN0-0FToLc&ab_channel=AdrijanaJovicicSavic",
    },
    {
        id: 13,
        picture: "",
        title: "Dental app",
        description: "Android app for scheduling reviews.",
        skill: ["Java - Android"],
        github: "https://github.com/adrijanasavic/Dental_app",
        link: "https://www.youtube.com/watch?v=3gwLZHnDemA&ab_channel=AdrijanaJovicicSavic",
    },
];

const skills = [
    {
        image: imgHtml,
        title: "HTML5"
    },
    {
        image: imgCss,
        title: "CSS3"
    },
    {
        image: imgSass,
        title: "SASS"
    },
    {
        image: tailwind,
        title: "Tailwind"
    },
    {
        image: imgBootstrap,
        title: "Bootstrap"
    },
    {
        image: imgJavascript,
        title: "JavaScript"
    },
    {
        image: imgReact,
        title: "React JS"
    },
    {
        image: imgRedux,
        title: "Redux"
    },
    {
        image: angularTs,
        title: "Angular TS"
    },
    {
        image: java,
        title: "Android"
    },
    {
        image: imgNode,
        title: "Node JS"
    },
    {
        image: imgMongo,
        title: "Mongo DB"
    },
    {
        image: sql,
        title: "SQL"
    },
    {
        image: php,
        title: "PHP"
    },
    {
        image: imgPostman,
        title: "Postman"
    },
    {
        image: imgGit,
        title: "Git"
    },
    {
        image: imgGitHub,
        title: "GitHub"
    },
 
  
  
]
export { projects, skills };
