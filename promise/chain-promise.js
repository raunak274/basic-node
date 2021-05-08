'use strict'
const fetch = require('node-fetch');

const f1 = fetch('example_1.json');
const f2 = fetch('example_2.json');

Promise.all([f1, f2])
    .then(res => {
        console.log('Array of results', res);
    })
    .catch(err => {
        throw new Error(err);
    }) 
    .catch(err => {
        console.error(err);
    })