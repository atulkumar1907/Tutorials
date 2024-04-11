let p1 = new Promise((resolve,  reject)=>{
    setTimeout(() => {
        reject("Value 1");
    }, 1000);
})

let p2 = new Promise((resolve,  reject)=>{
    setTimeout(() => {
        resolve("Value 2");
    }, 1000);
})

let p3 = new Promise((resolve,  reject)=>{
    setTimeout(() => {
        resolve("Value 3");
    }, 1000);
})

// Promise.all method : when all promises are done
//  let promise_all = Promise.all([p1, p2, p3])
//  promise_all.then((value)=>{
//     console.log(value);
// })

// promise.all.Settled
// let promise_all_settled = Promise.allSettled([p1, p2, p3])
// promise_all_settled.then((value)=>{
//    console.log(value);
// })


// promise.race : return first promise fulfilled ( resolved  or rejected )
// let promise_race = Promise.race([p1, p2, p3])
// promise_race.then((value)=>{
//    console.log(value);
// })

// promise.any : return firs value resolved
let promise_any = Promise.any([p1, p2, p3])
promise_any.then((value)=>{
   console.log(value);
})