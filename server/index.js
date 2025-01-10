import express from "express";
import mongoose from "mongoose";
// import dbConnection from "./config/dbConnection.js";
import cors from "cors";
// import errorHandler from "./middleware/errosHandler";
import env from "dotenv";
import Router from "./routes/contactsRoutes.js";
// import userRoute from "./routes/userRoutes.js";
// dbConnection();
mongoose.connect(
  `mongodb+srv://asif:asif@cluster0.y2lwxgj.mongodb.net/mycontacts-backend?retryWrites=true&w=majority`
);
mongoose.connection.on("error", (err) => {
  console.log("connection failed");
});

mongoose.connection.on("connected", () => {
  console.log("connected successfully with database");
});
const app = express();
env.config();
app.use(cors());
const port = process.env.PORT || 5001;
app.use(express.json());
app.use("/api/contacts", Router);
app.use("/", (req, res) => {
  res.send("fullstack web app");
});
// app.use("/api/users", userRoute);
// app.use(errorHandler);
app.get("*", (req, res, next) => {
  res.status(200).json({
    message: "bad request",
  });
});
app.get("/", (req, res) => {
  res.json("FullStack app");
});
app.listen(port, () => {
  console.log("server is runing on", port);
});
