import mongoose from "mongoose";
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    name: {
      type: String,
      require: [true, "Please add contact name"],
    },
    email: {
      type: String,
      require: [true, "Please add contact email"],
      unique: [true, "Email address already taken"],
    },
    password: {
      type: String,
      require: [true, "Please add contact password"],
    },

    //   createdUser: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("User", userSchema);
