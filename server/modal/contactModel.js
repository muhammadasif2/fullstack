import mongoose from "mongoose";
const Schema = mongoose.Schema;
const contactSchema = new Schema(
  {
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "User",
    },

    title: {
      type: String,
      require: [true, "Please add contact name"],
    },
    email: {
      type: String,
      require: [true, "Please add contact email"],
    },
    password: {
      type: String,
      require: [true, "Please add contact password"],
    },
    description: {
      type: String,
      require: [true, "Please add contact desciption"],
    },
  },
  {
    timestamps: true,
  }
);
// in mongodb data base of Contact will be convert into plural and lowercase like contacts
export default mongoose.model("Contact", contactSchema);
