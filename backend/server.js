require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const AboutMe = require("./models/aboutmeModel");
const Projects = require("./models/projectsModel");
const Qualifications = require("./models/qualificationsModel");

const app = express();

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

mongoose.connect(MONGO_URL, (err) => {
  if (!err) {
    console.log("Database connected...");
  } else {
    console.log(err);
  }
});

// const data = [
//   {
//     name: "Adrijana",
//     description: "Web and Android developer",
//     age: "xx",
//     des: "An enthusiastic Web and Android developer with good attention to detail and strong will to learn new technologies."
//   }
// ];

// data.forEach(el => {
//     const newData = new Home({
//         name: el.name,
//         description: el.description
//         age: el.age
//         des: el.des
//     });
//     newData.save();
// });

// const data = [
//   {
//     title: "Drugi",
//     description: "Web and Android developer",
//     link: "xx",
//     github: "An enthusiastic Web and Android developer with good attention to detail and strong will to learn new technologies.",
//     skill: "xx",

//   }
// ];

// data.forEach(el => {
//     const newData = new Projects({
//         title: el.title,
//         description: el.description,
//         link: el.link,
//         github: el.github,
//         skill: el.skill

//     });
//     newData.save();
// });




// const data = [
//   {
//     date: "2022 - Present",
//     degree: "Master's of information technology",
//     school:
//       "Higher Education Technical School of Professional Studies in Novi Sad - VTSNS",
//     description: "",
//     keywords: [],
//   },
// ];

// data.forEach(el => {
//     const newData = new Qualifications({
//         date: el.date,
//         degree: el.degree,
//         school: el.school,
//         description: el.description,
//         keywords: el.keywords

//     });
//     newData.save();
//  });

app.get("/qualifications", (req, res) => {
  Qualifications.find({})
    .then((item) => res.json(item))
    .catch((err) => console.log(err));
});

app.get("/projects", (req, res) => {
  Projects.find({})
    .then((item) => res.json(item))
    .catch((err) => console.log(err));
});

app.get("/", (req, res) => {
  AboutMe.find({})
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  console.log(`http://localhost${PORT}`);
});
