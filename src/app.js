import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();

if (mongoose.connection.readyState === 0) {
  connectDB();
}

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

export default app;