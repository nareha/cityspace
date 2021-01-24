'use strict';

const fs = require('fs');

let rawList = fs.readFileSync('citydata.json')

let finalList = JSON.parse(rawList);

console.log("Correctly parsed list");