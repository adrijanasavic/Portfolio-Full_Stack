require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

const Home = require("./models/homeModel");
const Users = require("./models/userModel");

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
//     title: "Title 1 ",
//     description: "Des 1",
//   },
//   {
//     title: "Title 2 ",
//     description: "Des 2",
//   },
// ];

// data.forEach(el => {
//     const newData = new Home({
//         title: el.title,
//         description: el.description
//     });
//     newData.save();
// });

app.post("/login", (req, res) => {
  const reqBody = req.body;

  const foundUser = Users.findOne(reqBody, (err, data) => {
    if (err) {
      const errorMsg = `Error on getting user from DB: ${err}`;
      res.status(416).send(errorMsg);
      return;
    }
    res.send(data ? data : "User not found.");
  });
});

app.get("/", (req, res) => {
  Home.find({})
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
