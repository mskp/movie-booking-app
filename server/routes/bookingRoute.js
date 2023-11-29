// Import necessary modules
import { Router } from "express";
import Booking from "../models/Booking.js"; // Import Booking model
import validateBookingData from "../middlewares/validateData.js"; // Import the validation middleware

// Create an Express router
const router = Router();

// Handle GET and POST requests for the "/api/booking" endpoint
router.route("/")
  // Handle GET request for fetching the latest booking details
  .get(async (req, res) => {
    try {
      const bookingDetails = await Booking.findOne()
        .sort({ createdAt: -1 }) // Fetch the latest booking
        .select({ movieName: 1, time: 1, seats: 1 }); // Select the required fields to be fetched

      if (bookingDetails) {
        // Respond with booking details if found
        res.json(bookingDetails);
      } else {
        // Respond with a message if no bookings are found
        res.status(404).json({ message: "No Bookings Found" });
      }
    } catch (error) {
      // Respond with an error message if any error occurs
      res.status(500).json({ error: error.message });
    }
  })

  // Handle POST request for creating a new booking
  .post(validateBookingData, async (req, res) => {
    try {
      // Fetch the required details from the JSON body
      const { movieName, time, seats } = req.body;
      
      // Create a new Booking object
      const booking = new Booking({ movieName, time, seats });

      // Save the booking details into the database
      await booking.save();

      // Send a success status code in case of successful booking
      res.sendStatus(200);
    } catch (error) {
      // Respond with an error message if any error occurs
      res.status(500).json({ error: error.message });
    }
  });

export default router;
