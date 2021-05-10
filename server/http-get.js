'use strict'
const fs = require('fs');
const https = require('http');
const options = {
    hostname: 'whatever.com',
    port: 443,
    path: '/todos',
    method: 'GET'
}

const req = https.request(options, res => {
    console.log(`status code ${res.statusCode}`);

    res.on('/data', d => {
        console.log(d);
    })
})

req.on('error', error => {
    console.error(error);
})

req.end()