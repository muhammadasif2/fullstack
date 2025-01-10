import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import env from "dotenv";
import Router from "./routes/contactsRoutes.js";

env.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(
  `mongodb+srv://asif:asif@cluster0.y2lwxgj.mongodb.net/mycontacts-backend?retryWrites=true&w=majority`
);

mongoose.connection.on("error", () => {
  console.log("Connection to MongoDB failed");
});

mongoose.connection.on("connected", () => {
  console.log("Connected successfully to MongoDB");
});

// Routes
app.use("/api/contacts", Router);
app.get("/", (req, res) => {
  res.json({ message: "FullStack app" });
});

app.all("*", (req, res) => {
  res.status(404).json({ error: "Route not found" });
});

export default app;
