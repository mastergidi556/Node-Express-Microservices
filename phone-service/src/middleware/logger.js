const phoneLogger = (req, res, next) => {
  console.log(`[PhoneRouter] ${req.method} ${req.originalUrl}`);
  next();
};

module.exports = phoneLogger;
