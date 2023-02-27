require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const AboutMe = require("./models/aboutmeModel");
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

app.get("/", (req, res) => {
  AboutMe.find({})
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  console.log(`http://localhost${PORT}`);
});
