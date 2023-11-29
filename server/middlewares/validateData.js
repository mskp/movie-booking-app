// This middleware function is designed to validate booking data before processing the request.

// The function takes three parameters: req (request), res (response), and next (callback function to move to the next middleware).

export default function validateBookingData(req, res, next) {
    // Destructuring the movieName, time, and seats from the request body.
    const { movieName, time, seats } = req.body;

    // Checking if any of the required fields (movieName, time, seats) is missing.
    if (!movieName || !time || !seats) {
        // If any of the fields is missing, send a 400 Bad Request response with an error message.
        return res.status(400).json({
            error: "All fields (movieName, time, seats) are required."
        });
    }

    // If all required fields are present, proceed to the next middleware.
    next();
};
