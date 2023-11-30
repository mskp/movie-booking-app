// Import necessary modules from Mongoose
import { Schema, model } from "mongoose";

// Define the schema for the Booking model
const BookingSchema = new Schema(
  {
    movie: String,  // Name of the movie for the booking
    slot: String,       // Time of the movie show
    seats: {
      A1: Number,
      A2: Number,
      A3: Number,
      A4: Number,
      D1: Number,
      D2: Number,
    },  // Seats and their corresponding numbers
  },
  {
    timestamps: {
      createdAt: true,   // Automatically set creation timestamp
      updatedAt: false,  // Disable updating timestamp
    },
    // Custom validation function
    validate: [
      {
        validator: function () {
          // Check if at least one seat has a value other than 0
          return Object.values(this.seats).some(seat => seat !== 0 && seat !== "");
        },
        message: "At least one seat must have a value other than 0",
      },
    ],
  },
);

// Create the Booking model using the schema
const Booking = model("Booking", BookingSchema);

// Export the Booking model for use in other files
export default Booking;
