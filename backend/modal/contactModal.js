import mongoose from "mongoose";
const Schema = mongoose.Schema;
const contactSchema = new Schema(
  {
    user_id: {
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

    //   createdUser: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("Contact", contactSchema);
