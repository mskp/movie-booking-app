/**
 * Validates movie details before processing.
 *
 * @param {string} movieName - The name of the selected movie.
 * @param {string} timeSlot - The selected time slot for the movie.
 * @param {object} seat - An object representing selected seats.
 * @returns {string|null} - An error message if validation fails, otherwise null.
 */
export function validateMovieDetails(movieName, timeSlot, seat) {
    // Check if a movie is selected
    if (!movieName) 
        return "Please select a movie";

    // Check if a time slot is selected
    if (!timeSlot) 
        return "Please select a time slot";

    // Check if at least one seat is selected
    if (!Object.keys(seat).some((key) => seat[key] !== "" && seat[key] !== 0))
        return "Please select at least one seat";

    // If all checks pass, return null (indicating successful validation)
    return null;
};
