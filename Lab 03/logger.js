'use strict';

const logger = (req, res, next) => {
  const currentDatetime = new Date();
  const formattedDate = `${currentDatetime.getDate()
  }-${
    currentDatetime.getMonth() + 1
  }-${
    currentDatetime.getFullYear()
  } ${
    currentDatetime.getHours()
  }:${
    currentDatetime.getMinutes()
  }:${
    currentDatetime.getSeconds()}`;
  const { method } = req;
  const { url } = req;
  const status = res.statusCode;
  const log = `[${formattedDate}] ${method}:${url} ${status}`;

  // not sure what is happening
  if (!url.startsWith('/socket.io/')) {
    console.log(log);
    console.log('Body :', req.body);
    console.log('Query :', req.query);
  }

  next();
};

module.exports = logger;
