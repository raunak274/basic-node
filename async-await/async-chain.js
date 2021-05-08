'use strict'

const promiseToDoSomething = () => {
    console.log('fifth')
    return new Promise(resolve => {
        console.log('sixth')
        setTimeout(() => resolve('I did something'), 10000)
        console.log('seven');
    })
}

const watchOverSomeoneDoingSomething = async () => {
    console.log('third');
    const something = await promiseToDoSomething()
    console.log('fourth');
    return something + '\nand I watched'
}

const watchOverSomeoneWatchingSomeoneDoingSomething = async () => {
    console.log('first');
    const something = await watchOverSomeoneDoingSomething()
    console.log('second');
    return something + '\nand I watched as well'
}

watchOverSomeoneWatchingSomeoneDoingSomething().then(res => {
    console.log(res)
})