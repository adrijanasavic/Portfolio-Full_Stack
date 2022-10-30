const mongoose = require("mongoose");

const homeShema = new mongoose.Schema({
  title: String,
  description: String,
});

const Home = mongoose.model("home", homeShema);

module.exports = Home;
