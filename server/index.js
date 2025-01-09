// import express from "express";
// import dbConnection from "./config/dbConnection.js";
// import cors from "cors";
// // import errorHandler from "./middleware/errosHandler";
// import env from "dotenv";
// import Router from "./routes/contactsRoutes.js";
// import userRoute from "./routes/userRoutes.js";
// dbConnection();
// const app = express();
// const envirement = env.config();
// app.use(cors());
// const port = process.env.PORT || 5001;
// app.use(express.json());
// app.use("/api/contacts", Router);
// app.use("/", (req, res) => {
//   res.send("fullstack web app");
// });
// // app.use("/api/users", userRoute);
// // app.use(errorHandler);

// app.listen(port, () => {
//   console.log("server is runing on", port);
// });

import express from "express";
import dbConnection from "./config/dbConnection.js";
import cors from "cors";
import env from "dotenv";
import Router from "./routes/contactsRoutes.js";
import userRoute from "./routes/userRoutes.js";

// Set up environment and DB connection
dbConnection();
const app = express();
const environment = env.config();

// Middleware
app.use(cors());
app.use(express.static("dist"));
app.use(express.json());

// Routes
app.use("/api/contacts", Router);
app.use("/", (req, res) => {
  res.send("Fullstack Web App");
});
// app.use("/api/users", userRoute);

// Export app for Vercel
export default app;
