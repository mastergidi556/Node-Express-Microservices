const gatewayLogger = (req, res, next) => {
  console.log(`[Gateway] ${req.method} ${req.originalUrl}`);
  next();
};

module.exports = gatewayLogger;
