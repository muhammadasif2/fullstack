import express from "express";
import {
  loginUser,
  registerUser,
  currentUser,
  userList,
  userUpdate,
} from "../controllers/userController.js";
// const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

router.post("/login", loginUser);

router.get("/register", registerUser);

// router.get("/current", currentUser);

router.route("/").get();

router.route("/:id").put();

export default router;
