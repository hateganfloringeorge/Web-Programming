'use strict';

const express = require('express');
const routerBooks = express.Router();
const db = require('./database.js');
const errors = require('./errors.js');
const myError = errors.ErrorHandler;


//TODO Make wrapper for res(ult) to look better

//============================= Get  ===========================================


routerBooks.get('/', (req, res) => {

	let queryAuth = req.query.author;
	
	if (queryAuth !== undefined) {
		let [book] = db.getFromDbByAuthor(queryAuth);
		res.status(200).json(book);
	
	} else {
		let myList = db.getAllFromDb();
		console.log("Returned list: ", myList);
		res.status(200).json(myList);

	}

});


routerBooks.get('/:id', (req, res) => {

	let paramId = parseInt(req.params.id);
	let book = db.getFromDbById(paramId);
	console.log("Returned book: ", book);
	res.status(200).json(book);
	
});


//============================= Post ===========================================


routerBooks.post('/', (req, res) => {

	let body = req.body;
	if (body.id && body.title && body.author) {
		
		let newBook = {
			id: parseInt(body.id),
			title: body.title,
			author: body.author
		}
		db.insertIntoDb(newBook);
		res.status(200).json(newBook);

	} else {
		throw new myError(400, "Missing fields for POST method!");
	}
});


//============================= Put  ===========================================


routerBooks.put('/:id', (req, res) => {

	let paramId = parseInt(req.params.id);

	if (paramId) {
		let body = req.body;
		db.updateById(paramId, body);

		let message = `Updated book with id ${paramId}`;
		console.log(message);
		res.status(200).send({message});
	}
});


//============================= Delete =========================================


routerBooks.delete('/', (req, res) => {

	let queryAuth = req.query.author;
	
	if (queryAuth !== undefined && db.getFromDbByAuthor(queryAuth)) {
		db.removeFromDbByAuthor(queryAuth);
		let message = `Deleted book with author ${queryAuth}`;
		console.log(message);
		res.status(200).json({message});
	
	} else {
		let myList = db.getAllFromDb();
		if (Array.isArray(myList) && myList.length) {
			db.purgeDb();
			let message = "Database is now empty!";
			res.status(200).json({message});

		} else {
			res.status(200).json({ message: 'The list is already empty!'});
		}
	}

});


routerBooks.delete('/:id', (req, res) => {

	let paramId = parseInt(req.params.id);
	if (paramId && db.getFromDbById(paramId)) {
		db.removeFromDbById(paramId);
		let message = `Am sters cartea cu id-ul : ${paramId}`;
		console.log(message);
		res.status(200).json({message});
	}

});



//==============================================================================


module.exports = routerBooks;