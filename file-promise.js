'use strict'

const fs = require('fs');

const getFile = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if(err) {
                reject(err)
                return
            }
            else {
                resolve(data);
            }
        })
    })
}

getFile('test-file.txt')
.then(data => console.log(data))
.catch(err => console.log(err));
