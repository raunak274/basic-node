'use strict'

const done = true;
const isItDoneYetOrNot = new Promise((resolve, reject) => {
    if (done) {
        const workDone = 'Here is the thing I built'
        console.log('resolve');
        resolve(workDone)
        } else {
        const why = 'Still working on something else'
        // console.log('reject')
        reject(why)
        }
})

const checkIfItIsDone = () => {
    isItDoneYetOrNot
        .then(ok => {
            console.log(ok);
        })
        .catch(err => {
            console.error(err);
        })
} 