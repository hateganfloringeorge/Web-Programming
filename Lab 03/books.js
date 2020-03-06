'use strict';

const express = require('express');

const routerBooks = express.Router();
const db = require('./database.js');
const errors = require('./errors.js');

const MyError = errors.ErrorHandler;


// TODO Make wrapper for res(ult) to look better

//= ============================ Get  ===========================================


routerBooks.get('/', (req, res) => {
  const queryAuth = req.query.author;

  if (queryAuth !== undefined) {
    const [book] = db.getFromDbByAuthor(queryAuth);
    res.status(200).json(book);
  } else {
    const myList = db.getAllFromDb();
    console.log('Returned list: ', myList);
    res.status(200).json(myList);
  }
});


routerBooks.get('/:id', (req, res) => {
  const paramId = parseInt(req.params.id, 10);
  const book = db.getFromDbById(paramId);
  console.log('Returned book: ', book);
  res.status(200).json(book);
});


//= ============================ Post ===========================================


routerBooks.post('/', (req, res) => {
  const { body } = req;
  if (body.id && body.title && body.author) {
    const newBook = {
      id: parseInt(body.id, 10),
      title: body.title,
      author: body.author,
    };
    db.insertIntoDb(newBook);
    res.status(200).json(newBook);
  } else {
    throw new MyError(400, 'Missing fields for POST method!');
  }
});


//= ============================ Put  ===========================================


routerBooks.put('/:id', (req, res) => {
  const paramId = parseInt(req.params.id, 10);

  if (paramId) {
    const { body } = req;
    db.updateById(paramId, body);

    const message = `Updated book with id ${paramId}`;
    console.log(message);
    res.status(200).send({ message });
  }
});


//= ============================ Delete =========================================


routerBooks.delete('/', (req, res) => {
  const queryAuth = req.query.author;

  if (queryAuth !== undefined && db.getFromDbByAuthor(queryAuth)) {
    db.removeFromDbByAuthor(queryAuth);
    const message = `Deleted book with author ${queryAuth}`;
    console.log(message);
    res.status(200).json({ message });
  } else {
    const myList = db.getAllFromDb();
    if (Array.isArray(myList) && myList.length) {
      db.purgeDb();
      const message = 'Database is now empty!';
      res.status(200).json({ message });
    } else {
      res.status(200).json({ message: 'The list is already empty!' });
    }
  }
});


routerBooks.delete('/:id', (req, res) => {
  const paramId = parseInt(req.params.id, 10);
  if (paramId && db.getFromDbById(paramId)) {
    db.removeFromDbById(paramId);
    const message = `Am sters cartea cu id-ul : ${paramId}`;
    console.log(message);
    res.status(200).json({ message });
  }
});


//= =============================================================================


module.exports = routerBooks;
