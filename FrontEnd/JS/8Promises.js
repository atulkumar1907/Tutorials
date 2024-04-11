// let p = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         console.log("This is a Promise")
//         resolve(true)
//     }, 2000);
// })
// let p2 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         console.log("This is a Promise")
//         reject(new Error('I am an error'))
//     }, 2000);
// })

// p.then((value)=>{
//     console.log(value)
// })

// p2.catch((error)=>{
//     console.log("An error occured fulfilling this Promise")
// })


// PROMISE CHAINING
let p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Resolved after 2 seconds...")
        resolve(true);
    }, 2000)
})


p3.then((value)=>{
    console.log(value)
    let p4 = new Promise((resolve, reject)=>{
        resolve("Resolve promise 2")
    })
    return p4
}).then((value)=>{
    console.log("We are done with the promises")
}).catch((error)=>{
    console.log("Oops! an error occured")
})