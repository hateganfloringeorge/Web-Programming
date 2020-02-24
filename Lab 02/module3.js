'use strict';

const mod2 = require('./module2.js');

const valoare = mod2.paritate;

const last = (vec, numPar) => console.log(valoare(vec, numPar));

last( [1, 2, 3], 1);