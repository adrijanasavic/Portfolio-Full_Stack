const mongoose = require("mongoose");

const qualificationsSchema = new mongoose.Schema({
    date: String,
    degree: String,
    school: String,
    description: String,
    keywords: String,
    pdf:String
});

const Qualifications = mongoose.model("qualifications", qualificationsSchema);

module.exports = Qualifications;