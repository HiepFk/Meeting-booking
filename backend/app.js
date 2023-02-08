const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const cookieParser = require("cookie-parser");

const corsOptions = require("./src/config/corsOptions");
const credentials = require("./src/middleware/credentials");

const globalErrorHandler = require("./src/middleware/errorHandle");

const AppError = require("./src/utils/appError");

const userRoute = require("./src/routes/userRoute");
const roomRoute = require("./src/routes/roomRoute");
const departmentRoute = require("./src/routes/departmentRoute");
const bookingRoute = require("./src/routes/bookingRoute");

const app = express();

app.use(credentials);
app.use(cors(corsOptions));

app.use(cookieParser());

app.use(morgan("common"));

app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour.",
});
app.use("/api", limiter);

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));

app.use(mongoSanitize());

app.use(xss());

app.use("/api/v1/user", userRoute);
app.use("/api/v1/room", roomRoute);
app.use("/api/v1/department", departmentRoute);
app.use("/api/v1/booking", bookingRoute);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
