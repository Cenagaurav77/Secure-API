import logger from "../../configs/logger.config.js";

export const errorHandler = (err, req, res, next) => {
  const errStatus = err.statusCode || 500;
  const errMessage = err.message || "Something went wrong";
  const meta = {
    error: err.name,
    message: errMessage,
    data: err.data,
    // stack: err.stack,
  };
  res.status(errStatus).json(meta);
  logger.error(errMessage, meta);
};
