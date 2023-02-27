const mongoose = require("mongoose");

const aboutmeSchema = new mongoose.Schema({
  name: String,
  description: String,
  age: Number,
  des: String
});

const AboutMe = mongoose.model("aboutme", aboutmeSchema);

module.exports = AboutMe;
