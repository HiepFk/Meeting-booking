const User = require("./../models/userModel");
const catchAsync = require("../middleware/catchAsync");
const AppError = require("../utils/appError");

const {
  createSendToken,
  generateAccessToken,
  generateRefreshToken,
} = require("../utils/jwtToken");

const jwt = require("jsonwebtoken");

let refreshTokens = [];

const authController = {
  login: catchAsync(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      createSendToken(
        user,
        200,
        req,
        res,
        (message = "Login success"),
        refreshTokens
      );
    } else {
      const newUser = new User({
        ...req.body,
      });
      const savedUser = await newUser.save();
      createSendToken(
        savedUser,
        201,
        req,
        res,
        (message = "SignUp success"),
        refreshTokens
      );
    }
  }),
  requestRefreshToken: catchAsync(async (req, res, next) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return next(
        new AppError("You're not authenticated, Please login again!", 401)
      );
    }
    if (!refreshTokens.includes(refreshToken)) {
      return next(
        new AppError("Refresh token is not valid,Please login again!", 403)
      );
    }
    jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, user) => {
      if (err) {
        console.log(err);
      }
      refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

      const newAccessToken = generateAccessToken(user);
      const newRefreshToken = generateRefreshToken(user);
      refreshTokens.push(newRefreshToken);
      res.cookie("refreshToken", newRefreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        // secure: req.secure || req.headers["x-forwarded-proto"] == "https",
        // sameSite: "none",
      });
      res.status(200).json({ accessToken: newAccessToken });
    });
  }),
  logout: (req, res, next) => {
    res.clearCookie("refreshToken");
    refreshTokens = refreshTokens.filter(
      (token) => token !== req.cookies.refreshToken
    );

    res.status(200).json({ status: "success", message: "You are loggedout" });
  },
};

module.exports = authController;
