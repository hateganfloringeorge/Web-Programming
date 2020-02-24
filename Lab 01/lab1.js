'use strict';

// 1) Tutorial

/*
function myFunc(x) {console.log(x)};

// este identic cu

const myFuncArrow = (x) => console.log(x);

myFunc(3); //3
myFuncArrow(3); //3


// ==============================================


const constanta = 'abc';
let variabila = 3;

function adauga (x, y, z) {
  if (x === 'abc') {
    y = y + z;
  }
  return  y;
}

const rezultat = adauga(constanta, variabila, 10);

console.log(rezultat);


// ==============================================


const a = 10; //a este numar
const b = '10'; //b este sir de caractere

console.log(a == b); //true
console.log(a === b); //false

const c = 'abc';
const d = 'abc';

console.log(c == d); //true
console.log(c === d); //true

const fals = false; //boolean
const str = ''; //string
const zero = 0; //number

console.log(fals == str); //true
console.log(fals == zero); //true
console.log(str == zero); //true

console.log(fals === str); //false
console.log(fals === zero); //false
console.log(str === zero); //false


// ==============================================


const obj1 = {a:2};
const obj2 = obj1; // copiere prin referinta

obj2.a = 5;
console.log(obj1); // {a:5} -> valoarea s-a modificat si in obiectul original

const obj3 = Object.assign({}, obj1); // copiere prin valoare

obj3.a = 10;
console.log(obj1); // {a:5} -> valoarea nu s-a modificat

const obj4 = {...obj1} // copiere prin valoare (modern, folosind spread operator, ES6)

obj4.a = 9772;
console.log(obj1); // {a:5} -> valoarea nu s-a modificat


// ==============================================


const arr = [1, 2, 3, 4];
console.log(arr.map(x => x*2)); //2 4 6 8

const obj = { a:2, b:3, c: (x, y) => console.log(x + y)}
console.log(obj.c(obj.a, obj['b'])); //5

const func1 = (x, cb) => cb(x);
const func2 = y => console.log(y);

func1(3, func2); //3

*/


// 2)
console.log("Hello World!");


// 3)
var currentdate = new Date(); 
var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth() + 1)  + "/" 
                + currentdate.getFullYear() + " " 
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

console.log("Data si ora curenta:" + datetime);


// 4)
let arr = [];

for (let i = 0; i < 100; i++) {
	arr.push(i + 1);
}

for (let a of arr.filter(x => x % 2 == 0)) {
	console.log(a);
}


// 5)
function myfunc(v, idx, fct) {
	console.log(fct(v, idx));
}

myfunc(arr, 3, (x, y) => x[y - 1]);
