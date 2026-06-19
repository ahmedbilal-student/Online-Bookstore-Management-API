require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log("MongoDB Error:", err));

const bookRoutes = require("./routes/books");
app.use("/api/books", bookRoutes);

app.get("/api", (req, res) => {
    res.json({ message: "API Running" });
});

app.use((req, res) => {
    res.status(404).json({ message: "Route Not Found" });
});

module.exports = app;