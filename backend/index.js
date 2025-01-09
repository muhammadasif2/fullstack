import express from "express";
import dbConnection from "./config/dbConnection.js";
import cors from "cors";
// import errorHandler from "./middleware/errosHandler";
import env from "dotenv";
import Router from "./routes/contactsRoutes.js";
import userRoute from "./routes/userRoutes.js";
dbConnection();
const app = express();
const envirement = env.config();
app.use(cors());
const port = process.env.PORT || 5001;
app.use(express.static("dist"));
app.use(express.json());
app.use("/api/contacts", Router);
// app.use("/api/users", userRoute);
// app.use(errorHandler);

app.listen(port, () => {
  console.log("server is runing on", port);
});
