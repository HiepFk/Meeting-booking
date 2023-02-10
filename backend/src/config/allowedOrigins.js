const allowedOrigins = [
  process.env.CLIENT_URL,
  process.env.ADMIN_URL,
  "http://localhost:1208",
  "http://localhost:3000",
  "http://172.16.0.120",
];

module.exports = allowedOrigins;
