'use strict';

let myArray = [];
const errors = require('./errors.js');

const MyError = errors.ErrorHandler;

const insertIntoDb = (obj) => { myArray.push(obj); };
const getAllFromDb = () => myArray;

const getFromDbById = (id) => {
  const obj = myArray.find((el) => el.id === id);
  if (obj !== undefined) {
    return obj;
  }
  throw new MyError(404, `The object with the id = ${id} does not exists!`);
};

const getFromDbByAuthor = (author) => {
  const books = myArray.filter((el) => el.author === author);
  if (Array.isArray(books) && books.length) {
    return books;
  }
  throw new MyError(404, `There are no books with author ${author}`);
};

const updateById = (id, payload) => {
  const newBook = getFromDbById(id);
  if (payload.id) newBook.id = parseInt(payload.id, 10);
  if (payload.author) newBook.author = payload.author;
  if (payload.title) newBook.title = payload.title;
};

const removeFromDbById = (id) => {
  const newArray = myArray.filter((el) => el.id !== id);
  myArray = newArray;
};

const removeFromDbByAuthor = (author) => {
  const newArray = myArray.filter((el) => el.author !== author);
  myArray = newArray;
};

const purgeDb = () => {
  myArray = [];
};

module.exports = {
  insertIntoDb,
  getAllFromDb,
  getFromDbById,
  getFromDbByAuthor,
  updateById,
  removeFromDbById,
  removeFromDbByAuthor,
  purgeDb,
};
