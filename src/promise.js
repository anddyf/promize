const basicPromise = new Promise(function(resolve, reject) {
    resolve('basicPromise')
})
const funcPromise = () => new Promise(function(resolve, reject) {
    resolve('funcPromise')
})
const chainedPromise = prom => new Promise(function(resolve,reject){
    resolve(prom)
}).then(prom)

const rejectedPromise = () => new Promise(function(resolve,reject){
     throw Error("rejectedPromise")
})

module.exports = { basicPromise, chainedPromise, rejectedPromise, funcPromise };
