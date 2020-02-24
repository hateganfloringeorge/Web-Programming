'use strict';

const express = require('express');
const time = require('moment');
const app = express();
 
app.get('/', (req, res) => {
	let now = time().format('YYYY-MM-DD hh:mm');
    res.send(now);
});
 
app.listen(3000);