// const express = require('express')
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import coctailRoutes from "./routes/coctail.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());
// body-parser is a middleware that parses the body of the request and attaches it to the request object as req.body

app.get('/health', (req, res) => {
    res.json({ status: "UP", message: "Server is running", author: "Kubilay Cakmak" });
});

app.use("/coctails", coctailRoutes);

app.listen(5001);