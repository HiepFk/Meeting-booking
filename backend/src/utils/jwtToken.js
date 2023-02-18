const jwt = require("jsonwebtoken");

const generateActivationToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_ACTIVATION_KEY, {
    expiresIn: "15m",
  });
};

const generateAccessToken = (user) => {
  return jwt.sign({ id: user.id }, process.env.JWT_ACCESS_KEY, {
    expiresIn: "1m",
  });
};

const generateRefreshToken = (user) => {
  return jwt.sign({ id: user.id }, process.env.JWT_REFRESH_KEY, {
    expiresIn: "30d",
  });
};

const createSendToken = (
  user,
  statusCode,
  req,
  res,
  message,
  refreshTokens
) => {
  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);
  refreshTokens.push(refreshToken);

  res.cookie("refreshToken", refreshToken, {
    maxAge: 30 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    // secure: req.secure || req.headers["x-forwarded-proto"] == "https",
    // sameSite: "none",
  });

  user.password = undefined;
  const { password, ...others } = user._doc;
  res
    .status(statusCode)
    .json({ ...others, accessToken, status: "success", message });
};

module.exports = {
  createSendToken,
  generateRefreshToken,
  generateAccessToken,
  generateActivationToken,
};
