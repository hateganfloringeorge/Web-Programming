'use strict';

const logger = (req, res, next) => {
  let current_datetime = new Date();
  let formatted_date =
    current_datetime.getDate() +
    "-" +
    (current_datetime.getMonth() + 1) +
    "-" +
    current_datetime.getFullYear() +
    " " +
    current_datetime.getHours() +
    ":" +
    current_datetime.getMinutes() +
    ":" +
    current_datetime.getSeconds();
  let method = req.method;
  let url = req.url;
  let status = res.statusCode;
  let log = `[${formatted_date}] ${method}:${url} ${status}`;
  
  // not sure what is happening
  if (!url.startsWith("/socket.io/")) {    
    console.log(log);
  	console.log("Body :", req.body);
	  console.log("Query :", req.query);
  }

  next();
}

module.exports = logger;