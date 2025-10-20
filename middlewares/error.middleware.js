const errorMiddleware = (err, req, res, next) => {
  try {
    let error = { ...err };
    error.message = err.message;

    // Log the error for debugging
    console.error(err);

    // Handle specific error types
    if (err.name === 'ValidationError') {
      error.statusCode = 400;
      const message = Object.values(err.errors)
        .map((el) => el.message)
        .join(', ');
      error = new Error(message);
    }
    // mongoose duplicate key error
    if (err.code && err.code === 11000) {
      const field = Object.keys(err.keyValue);
      const message = `Duplicate field value: ${field}. Please use another value!`;
      error = new Error(message);
      error.statusCode = 400;
    }

    // mongoose bad ObjectId
    if (err.name === 'CastError') {
      error.statusCode = 400;
      error.message = `Invalid ${err.path}: ${err.value}.`;
    }

    // Send the error response
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || 'Server Error',
    });
  } catch (error) {
    next(error);
  }
};

export default errorMiddleware;
