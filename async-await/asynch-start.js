'use strict'

const doSomeThingAsync = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('I did Something'), 3000)
    })
}

const doSomeThing = async () => {
    console.log(await doSomeThingAsync());
}

console.log('Before')
doSomeThing()
console.log('After')
