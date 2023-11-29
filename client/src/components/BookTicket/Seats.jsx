// Define the Seats component
export default function Seats({ styles, title, seats, handleSeatChange, availableSeats }) {
    // Render the component
    return (
        <section className={styles.inputs}>
            {/* Display the title of the seat section */}
            <h3 className={styles.input_title}>{title}</h3>

            {/* List of seat inputs */}
            <ul className={styles.seat_input}>
                {availableSeats.map((seatName) => (
                    <li key={seatName} className={styles.seat}>
                        {/* Label for the seat input */}
                        <label htmlFor={seatName} style={{fontWeight: 600}}>
                            {seatName}
                        </label>

                        {/* Input field for the seat with event handler for changes */}
                        <input
                            id={seatName}
                            inputMode="numeric"
                            value={seats[seatName] !== 0 ? seats[seatName] : ""}
                            placeholder="0"
                            onChange={(e) => handleSeatChange(seatName, e.target.value)}
                            maxLength={3}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
}
