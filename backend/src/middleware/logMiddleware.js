const logMiddleware = (req, res, next) => {
  console.log(`Action: ${req.method}, Endpoint: ${req.originalUrl}`);
  next();
};

module.exports = logMiddleware;
