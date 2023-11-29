import { useCallback, useEffect } from "react";
import Header from "./components/Header"; // Import Header Component
import BookTicket from "./components/BookTicket"; // Import BookTicket Component
import BookingDetails from "./components/BookingDetails"; // Import BookingDetails Component
import useLocalStorage from "./hook"; // Import custom hook

// Define the main App component
export default function App() {
  // Use the custom hook for local storage
  const [bookedMovieDetails, setBookedMovieDetails] = useLocalStorage("bookedMovieDetails", null);

  // Function to fetch the details of the last booked movie from the server
  const fetchLastBookedMovie = useCallback(async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/api/booking`
      );
      if (response.ok) {
        // If the response is successful, parse the data and update the state
        const data = await response.json();
        setBookedMovieDetails(data);
      }
    } catch (error) {
      console.error(error.message);
    }
  }, [setBookedMovieDetails])

  // Use useEffect to handle the initial data loading and updates
  useEffect(() => {
    if (!bookedMovieDetails) {
      // If no stored data is available, fetch the last booked movie from the server
      fetchLastBookedMovie();
    }
  }, [bookedMovieDetails, fetchLastBookedMovie]); // Depend on bookedMovieDetails to trigger updates

  // Render the main content of the App
  return (
    <>
      {/* Render the Header component */}
      <Header />
      <main>
        {/* Render the BookTicket and BookingDetails components */}
        <BookTicket setBookedMovieDetails={setBookedMovieDetails} />
        <BookingDetails bookedMovieDetails={bookedMovieDetails} />
      </main>
    </>
  );
}
