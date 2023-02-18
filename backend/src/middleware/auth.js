const AppError = require("../utils/appError");
const catchAsync = require("./catchAsync");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.isAdmin = (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(
      new AppError("You do not have permission to perform this action", 403)
    );
  }
  next();
};

exports.isAuthenticatedUser = catchAsync(async (req, res, next) => {
  let token;
  if (req.headers.token && req.headers.token.startsWith("Bearer")) {
    token = req.headers.token?.split(" ")?.[1];
  }
  if (!token) {
    return next(
      new AppError("You are not logged in! Please log in to get access", 401)
    );
  }
  const decoded = jwt.verify(token, process.env.JWT_ACCESS_KEY);
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(
      new AppError(
        "The user belonging to this token does no longer exist.",
        401
      )
    );
  }
  // if (!currentUser.isActive) {
  //   return next(new AppError("Inactive user! Try again!", 401));
  // }
  req.user = currentUser;
  next();
});
