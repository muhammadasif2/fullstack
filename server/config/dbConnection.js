import mongoose from "mongoose";

const dbConnection = async () => {
  const mongoUrl = `mongodb+srv://asif:asif@cluster0.y2lwxgj.mongodb.net/mycontacts-backend?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(mongoUrl);

    // Event Listeners
    mongoose.connection.on("connected", () => {
      console.log(`MongoDB connected successfully! URL: ${mongoUrl}`);
    });

    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.log("MongoDB disconnected!");
    });
  } catch (err) {
    console.error("Database connection failed:", err);
    process.exit(1); // Exit the process with failure
  }
};

export default dbConnection;
