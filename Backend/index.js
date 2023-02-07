import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import blogRoutes from "./routes/blogs.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/blogs", blogRoutes);

const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.DATABASE_URL)
    .then(() =>
        app.listen(PORT, () =>
            console.log(`Server running on port : http://localhost:${PORT}`)
        )
    )
    .catch((error) => console.log(error.message));
