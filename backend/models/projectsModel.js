const mongoose = require("mongoose");

const projectsSchema = new mongoose.Schema({
  title: String,
  description: String,
  link: String,
  github: String,
  skill: String,
  picture: String,
});

const Projects = mongoose.model("projects", projectsSchema);

module.exports = Projects;
