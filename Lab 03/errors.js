'use strict';

class ErrorHandler extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

const handleError = (err, res) => {
  let { statusCode, message } = err;
  if (statusCode === undefined) statusCode = 500;
  if (message === undefined) message = 'Internal Error';
  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message,
  });
  console.log(`\tError ${statusCode} as ${message}`);
};

module.exports = {
  ErrorHandler,
  handleError,
};
