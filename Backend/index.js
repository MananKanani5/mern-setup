import express from "express";
import { config as dotenvConfig } from "dotenv";
import getConnection from "./database.js";

dotenvConfig();
const app = express();

app.use(express.json());
getConnection();

app.get("/", (req, res) => {
    res.send("Welcome to Home");
});
app.get("/about", (req, res) => {
    res.send("Welcome to About");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
