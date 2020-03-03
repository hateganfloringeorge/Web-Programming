'use strict';

const express = require('express');
const app = express();
const { handleError, ErrorHandler } = require('./errors.js')
const routerBooks = require('./books.js');
const logger = require('./logger.js');

app.use(express.json());
app.use(logger);
app.use('/books', routerBooks);
app.use((err, req, res, next) => {
  	handleError(err, res);
});

const port = 3000;
app.listen(port, () => console.log(`Salut, rulez pe portul ${port}!`));