require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const AboutMe = require("./models/aboutmeModel");
const Projects = require("./models/projectsModel");
const Qualifications = require("./models/qualificationsModel");
const Users = require("./models/userModel");
//mongodb+srv://adrijanajovicic:adrijana@cluster0.emwi5bs.mongodb.net/?retryWrites=true&w=majority
//mongodb+srv://adrijana:adrijana@cluster0.hiccgzr.mongodb.net/?retryWrites=true&w=majority
const app = express();

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

app.use(cors());
app.use(express.urlencoded({ extended: false, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));

mongoose.set("strictQuery", false);
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

// const data = [
//   {
//     username: "Adrijana",
//     password: "programiranje",
//   }
// ];

// data.forEach(el => {
//     const newData = new Users({
//         username: el.username,
//         password: el.password

//     });
//     newData.save();
// });

app.delete("/qualification/:id", (req, res) => {
  Qualifications.deleteOne({ _id: req.params.id })
    .then((item) => {
      Qualifications.find({}, (err, result) => {
        res.send(result);
      });
    })
    .catch((err) => console.log(err));
});

app.patch("/qualification/:id", async (req, res) => {
  try {
    const updateQualification = await Qualifications.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updateQualification);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.post("/qualification", async (req, res) => {
  let newQualification = new Qualifications(req.body);
  let addQualification = await newQualification.save();
  if (addQualification) {
    res.send("Added new qualification");
  } else {
    res.send("Didn't add new qualification");
  }
  console.log(req.body);
});

app.get("/qualification/:id", (req, res) => {
  Qualifications.findOne({ _id: req.params.id })
    .then((item) => res.json(item))
    .catch((err) => console.log(err));
});

app.get("/qualifications", (req, res) => {
  Qualifications.find({})
    .then((item) => res.json(item))
    .catch((err) => console.log(err));
});

app.delete("/project/:id", (req, res) => {
  Projects.deleteOne({ _id: req.params.id })
    .then((item) => {
      Projects.find({}, (err, result) => {
        res.send(result);
      });
    })
    .catch((err) => console.log(err));
});

app.patch("/project/:id", async (req, res) => {
  try {
    const updateProject = await Projects.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updateProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.post("/project", async (req, res) => {
  let newProject = new Projects(req.body);
  let addProject = await newProject.save();
  if (addProject) {
    res.send("Added new project");
  } else {
    res.send("Didn't add new project");
  }
  console.log(req.body);
});

app.get("/project/:id", (req, res) => {
  Projects.findOne({ _id: req.params.id })
    .then((item) => res.json(item))
    .catch((err) => console.log(err));
});

app.get("/projects", (req, res) => {
  Projects.find({})
    .then((item) => res.json(item))
    .catch((err) => console.log(err));
});

app.post("/login", (req, res) => {
  const reqBody = req.body;
  console.log(req.body);
  Users.findOne(reqBody, (err, data) => {
    if (err) {
      const errorMsg = `Error on getting user from DB: ${err}`;
      res.status(416).send(errorMsg);
      return;
    }
    if (data?.username) {
      res.send(data);
    } else {
      res.status(210).send("User not found");
    }
  });
});

app.get("/users", (req, res) => {
  Users.find({})
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
  console.log(`http://localhost:${PORT}`);
});
