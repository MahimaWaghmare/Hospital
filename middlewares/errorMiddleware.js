import pkg from 'jsonwebtoken';
const { JsonWebTokenError } = pkg;

class ErrorHandler extends Error {
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
    }
} 

export const errorMiddleware  = (err, req, res, next) => {
    err.message = err.message || "Internal server error";
    err.statusCode = err.statusCode || 500;

    if(err.code === 11000){
        const message = `Duplicaate ${Object.keys(err.keyValue)} entered`;
        err = new ErrorHandler(message, 400);
    }
    if(err.name === "JsonWebTokenError"){
        const message = "JSON Web token is invalid, Try again!";
        err = new ErrorHandler(message, 400);
    }
    if(err.name === "CastError"){    // data galat enter kiya to example type glt likha
        const message = `Invalid ${err.path}`;
        err = new ErrorHandler(message, 400);
    }


    const errorMessage = err.errors ? Object.values(err.errors)
                                      .map((error) => error.message)
                                      .join(" ")
                                    : err.message;

    return res.status(err.statusCode).json({
        status: false,
        message: errorMessage,
    });
};

export default ErrorHandler;