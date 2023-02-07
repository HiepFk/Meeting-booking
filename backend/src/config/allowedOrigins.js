const allowedOrigins = [
  process.env.CLIENT_URL,
  process.env.ADMIN_URL,
  "http://localhost:1208",
  "http://localhost:3000",
];

module.exports = allowedOrigins;
