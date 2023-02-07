const User = require("./../models/userModel");
const catchAsync = require("../middleware/catchAsync");
const AppError = require("../utils/appError");

const {
  createSendToken,
  generateAccessToken,
  generateRefreshToken,
  generateActivationToken,
} = require("../utils/jwtToken");

const sendMail = require("../utils/sendEmail");

const jwt = require("jsonwebtoken");

let refreshTokens = [];

const CLIENT_URL = process.env.CLIENT_URL;

const authController = {
  login: catchAsync(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(new AppError("Please provide email and password!", 400));
    }

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return next(new AppError("Incorrect email ", 401));
    }

    if (!(await user.correctPassword(password, user.password))) {
      return next(new AppError("Incorrect password", 401));
    }
    createSendToken(
      user,
      200,
      req,
      res,
      (message = "Login success"),
      refreshTokens
    );
  }),
  signup: catchAsync(async (req, res, next) => {
    const { email } = req.body;
    const newUser = {
      email: req.body.email,
      name: req.body.name,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    };
    const activation_token = generateActivationToken(newUser);
    const url = `${CLIENT_URL}/user/activate/${activation_token}`;
    sendMail(res, email, url, "Verify your email address");
  }),

  activateEmail: catchAsync(async (req, res, next) => {
    const { activation_token } = req.body;
    const user = jwt.verify(activation_token, process.env.JWT_ACTIVATION_KEY);
    const { name, email, password, passwordConfirm } = user;

    const check = await User.findOne({ email });
    if (check) {
      return next(new AppError("This email already exists", 400));
    }

    const newUser = new User({
      name,
      email,
      password,
      passwordConfirm,
    });
    await newUser.save();
    createSendToken(
      newUser,
      201,
      req,
      res,
      (message = "Account has been activated!. Enjoy ❤️."),
      refreshTokens
    );
  }),

  googleAuth: catchAsync(async (req, res, next) => {
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
  updatePassword: catchAsync(async (req, res, next) => {
    const user = await User.findById(req.user.id).select("+password");

    if (
      !(await user.correctPassword(req.body.passwordCurrent, user.password))
    ) {
      return next(new AppError("Your current password is wrong.", 401));
    }

    user.password = req.body.password;
    user.passwordConfirm = req.body.passwordConfirm;
    await user.save();

    createSendToken(
      user,
      200,
      req,
      res,
      (message = "Update password success"),
      refreshTokens
    );
  }),

  forgotPassword: catchAsync(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email }).select(
      "+password"
    );
    if (!user) {
      return next(new AppError("No user found with that ID", 404));
    }
    if (!user.password) {
      return next(
        new AppError("Just login by button google login in login page ", 404)
      );
    }
    await user.save({ validateBeforeSave: false });

    const activation_token = generateActivationToken({ id: user._id });
    const url = `${CLIENT_URL}/user/reset/${activation_token}`;

    sendMail(res, req.body.email, url, "Check your email to reset");
  }),

  resetPassword: catchAsync(async (req, res, next) => {
    const { activation_token } = req.body;
    const decoded = jwt.verify(
      activation_token,
      process.env.JWT_ACTIVATION_KEY
    );

    const user = await User.findById(decoded.id);

    if (!user) {
      return next(new AppError("Token is invaild or has expired", 400));
    }
    user.password = req.body.password;
    user.passwordConfirm = req.body.passwordConfirm;

    await user.save();
    createSendToken(
      user,
      200,
      req,
      res,
      (message = "Password successfully changed!"),
      refreshTokens
    );
  }),
};

module.exports = authController;
