require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

app.use(express.static("public"));

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date().toLocaleString()}`);
    next();
});

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected Successfully");
})
.catch((error) => {
    console.log(error.message);
});

const bookRoutes = require("./routes/books");

app.use("/api/books", bookRoutes);

app.get("/api", (req, res) => {
    res.status(200).json({
        message: "Online Bookstore API Running"
    });
});

app.use((req, res) => {
    res.status(404).json({
        message: "Route Not Found"
    });
});

app.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message || "Internal Server Error"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running On Port ${PORT}`);
});