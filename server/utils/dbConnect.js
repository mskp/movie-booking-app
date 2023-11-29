// Import the Mongoose library for MongoDB
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

// Define the URI for the MongoDB database, using the provided environment variable or a default local URI
const DATABASE_URI = process.env.DB_URI ?? "mongodb://127.0.0.1:27017/movies";

// Use an immediately-invoked function expression (IIFE) for asynchronous connection setup
(async () => {
  try {
    // Attempt to connect to the MongoDB database using the defined URI
    await mongoose.connect(DATABASE_URI);

    // Log a success message if the connection is successful
    console.log("DB connected");
  } catch (error) {
    // Log an error message if the connection fails, including the error message
    console.log("DB not connected: ", error.message);
  }
})();
