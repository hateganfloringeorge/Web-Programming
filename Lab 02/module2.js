'use strict';

const mod1 = require('./module1.js');
const suma = mod1.suma;

const paritate = (vec, parNum) => 
{
	let arr = vec.filter( x => x % 2 == parNum % 2);
	return suma(arr);
}

module.exports = {
  paritate
};