// Backend (Express/Mongoose) – Recruiter-friendly scaffold
// Note: This project preview runs frontend only. Use this server folder locally.
import express from "express";
import morgan from "morgan";
import cors from "cors";
import rateLimit from "express-rate-limit";
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";
import yaml from "yamljs";
import apiRouter from "./routes/api.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.set("trust proxy", 1);

// Rate limit
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
app.use("/api", limiter);

// Swagger
const swaggerDocument = yaml.load("./server/swagger.yaml");
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api", apiRouter);

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(err.status || 500).json({ message: err.message || "Server error" });
});

export default app;
