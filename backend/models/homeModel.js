const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const Home = mongoose.model("home", homeSchema);

module.exports = Home;
