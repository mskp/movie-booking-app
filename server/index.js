// Import necessary modules
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables from a .env file
dotenv.config();

// Import the database connection setup from the utils folder
import "./utils/dbConnect.js"; // Database connection

// Import the booking router
import bookingRouter from "./routes/bookingRoute.js"; // Booking Route

// Create an instance of the Express application
const app = express();

// Define the port for the Express application, using the provided environment variable or a default port
const PORT = process.env.PORT ?? 8080;

// Middleware: Parse incoming JSON requests
app.use(express.json());

// Middleware: Enable CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Define a basic route for the root endpoint
app.get("/", (req, res) => {
    res.send("Available route <a href='/api/booking'>/api/booking</a>");
});

// Use the booking router for handling requests to the "/api/booking" endpoint
app.use("/api/booking", bookingRouter);

// Start the Express application and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT}`);
});
