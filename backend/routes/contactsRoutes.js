import express from "express";
import {
  createContact,
  deleteContact,
  getContact,
  getContacts,
  updateContact,
} from "../controllers/contactController.js";
const Router = express.Router();

// const validateToken = require('../middleware/validateTokenHandler')
// get list of contacts
// make contact private the we use
// router.use(validateToken)
Router.route("/")
  .get(getContacts)
  .post(createContact);
Router.route("/:id")
  .delete(deleteContact)
  .get(getContact)
  .put(updateContact);

export default Router;
