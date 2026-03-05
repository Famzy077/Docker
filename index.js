import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
dotenv.config();

connectDB();

const app = express();

app.get('/hello', (req, res) => {
    res.send("Hello World");
})

app.get('/', (req, res) => {
    res.json({
        message: "Hello World from Docker! 🐳",
        status: "Healthy",
        timestamp: new Date().toISOString()
    });
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})