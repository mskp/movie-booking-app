// Import styles for the BookingDetails component
import styles from "./BookingDetails.module.css";

// Define the BookingDetails component
export default function BookingDetails({ bookedMovieDetails }) {
  // Render the component
  return (
    <section className={styles.last_booked_section}>
      {/* Display the title of the section */}
      <h2 className="section_title">Last Booking</h2>

      {/* Check if there are booked movie details */}
      {bookedMovieDetails ? (
        // If details are available, render the movie details
        <div className={styles.movie_details}>
          {/* Display the movie name */}
          <p>
            <span className={styles.title}>Movie</span>
            <span className={styles.detail}>{bookedMovieDetails.movie}</span>
          </p>

          {/* Display the booking time */}
          <p>
            <span className={styles.title}>Time</span>
            <span className={styles.detail}>{bookedMovieDetails.slot}</span>
          </p>

          {/* Display the booked seats */}
          <p className={styles.title}>Seats</p>
          <ul className={styles.seats}>
            {/* Map through each booked seat and display seat details */}
            {Object.keys(bookedMovieDetails.seats).map(seat => (
              <li key={seat} className={styles.seat}>
                <span style={{ fontWeight: 600 }}>{seat}</span>
                <span className={styles.seat_count}>{bookedMovieDetails.seats[seat]}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        // If no details are available, display a message
        <p>No movie booked yet.</p>
      )}
    </section>
  );
}
