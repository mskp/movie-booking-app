import { useState } from "react";
import styles from "./BookTicket.module.css";
import toast from "react-hot-toast";
import { validateMovieDetails } from "../../utils";
import { availableMovies, availableTimeSlots, availableSeats } from "../../data";
import SelectableList from "./SelectableList";
import Seats from "./Seats";

// Define the BookTicket component
export default function BookTicket({ setBookedMovieDetails }) {
  // State to manage movie name, selected time, and seat selections
  const [movie, setMovie] = useState("");
  const [slot, setSlot] = useState("");
  const [seats, setSeats] = useState({
    A1: 0,
    A2: 0,
    A3: 0,
    A4: 0,
    D1: 0,
    D2: 0,
  });

  // Function handling seat input change
  const handleSeatChange = (seatName, value) => {
    // Validate the input value and update the state
    value = Number(value);
    if (!isNaN(value) && value >= 0) {
      setSeats((prevState) => ({
        ...prevState,
        [seatName]: value,
      }));
    }
  };

  // Function to reset all states to their initial values
  const resetStates = () => {
    setMovie("");
    setSlot("");
    setSeats({
      A1: 0,
      A2: 0,
      A3: 0,
      A4: 0,
      D1: 0,
      D2: 0,
    });
  };

  // Function to handle the movie booking process
  const bookMovie = async (e) => {
    e.preventDefault();

    // Validate movie details before proceeding
    const validationError = validateMovieDetails(movie, slot, seats);

    // Display an error toast if validation fails
    if (validationError)
      return toast.error(validationError, { id: "validation-error-toast" });

    try {
      // Prepare booking details
      const bookingDetails = { movie, slot, seats };

      // Make a POST request to the server to book the movie
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/api/booking`,
        {
          method: "POST",
          body: JSON.stringify(bookingDetails),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(bookingDetails)

      // If the booking is successful, update state and show success toast
      if (response.ok) {
        toast.success(`${movie} booked successfully`, { id: "movie-booking-toast" });
        // Store booked details in local storage
        setBookedMovieDetails(bookingDetails);
        // Reset states for the next booking
        resetStates();
      } else {
        console.log(response)
        throw new Error("Movie Booking Failed");
      }
    } catch (error) {
      // Display an error toast if the booking process fails
      toast.error(error.message, { id: "movie-booking-toast" });
    }
  };

  // Render the BookTicket component
  return (
    <section className={styles.booking_section}>
      <h2 className="section_title">Book a movie</h2>

      {/* Movies Section */}
      <SelectableList
        styles={styles}
        title="Movies"
        items={availableMovies}
        selectedItem={movie}
        onSelect={setMovie}
      />

      {/* Time Slots Section */}
      <SelectableList
        styles={styles}
        title="Time Slots"
        items={availableTimeSlots}
        selectedItem={slot}
        onSelect={setSlot}
      />

      {/* Seats Section */}
      <Seats
        handleSeatChange={handleSeatChange}
        seats={seats}
        availableSeats={availableSeats}
        styles={styles}
        title={"Seats"}
      />

      {/* Book Ticket Button */}
      <button className="btn" onClick={bookMovie}>
        Book Ticket
      </button>
    </section>
  );
}
