'use strict';

let done = true

const isItDoneYet = new Promise((resolve, reject) => {
if (done) {
    const workDone = 'Here is the thing I built'
    console.log('resolve');
    resolve(workDone)
    } else {
    const why = 'Still working on something else'
    console.log('reject')
    reject(why)
    }
})