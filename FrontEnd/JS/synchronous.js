//synchronous
console.log('this is first statement')
console.log('this is second statement')
console.log('this is third statement')

//asynchronous
console.log('first')
setTimeout(()=>{
    console.log("After two seconds")
},2000)
console.log('third')