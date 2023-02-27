require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
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
})
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
    console.log(`http://localhost${PORT}`);
})