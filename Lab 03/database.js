'use strict';

let myArray = [];
const errors = require('./errors.js');
const myError = errors.ErrorHandler;
 
const insertIntoDb = (obj) => { myArray.push(obj); }
const getAllFromDb = () => { return myArray; }

const getFromDbById = (id) => {
  const obj =  myArray.find(el => el.id === id); 
  if (obj !== undefined) {
    return obj;
  }
  throw new myError(404, `The object with the id = ${id} does not exists!`);
}

const getFromDbByAuthor = (author) => {
  const books = myArray.filter(el => el.author === author);
  if (Array.isArray(books) && books.length) {
    return books;
  }
  throw new myError(404, `There are no books with author ${author}`);
}

const updateById = (id, payload) => {
  let newBook = getFromDbById(id);
  if (payload.id)
    newBook.id = parseInt(payload.id);
  if (payload.author)
    newBook.author = payload.author;
  if (payload.title)
    newBook.title = payload.title;
}

const removeFromDbById = (id) => { 
  const newArray = myArray.filter(el => el.id !== id);
  myArray = newArray;
}

const removeFromDbByAuthor = (author) => {
  const newArray = myArray.filter(el => el.author !== author);
  myArray = newArray;
}

const purgeDb = () => {
  myArray = [];
}
 
module.exports = {
  insertIntoDb,
  getAllFromDb,
  getFromDbById,
  getFromDbByAuthor,
  updateById,
  removeFromDbById,
  removeFromDbByAuthor,
  purgeDb
};