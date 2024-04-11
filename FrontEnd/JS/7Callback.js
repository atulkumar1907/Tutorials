// CALLBACK FUNCTIONS
// A function that is passed as argument to another function is called a callback function

const calculate = (a, b, operation) =>{
    return operation(a, b)
}

//Method 1
const addition = calculate(3, 4, (a, b)=>{
    return a+b;
})

console.log(addition)

//Method 2
const sub = (a, b)=> a-b;
const subtraction = calculate(8, 5, sub)
console.log(subtraction)

// CALLBACK HELL

function getcheese(callback){
    setTimeout(() => {
        const cheese = "🧀";
        console.log('here is cheese',cheese)
        callback(cheese);
    }, 2000);
}
function makedough(cheese, callback){
    setTimeout(()=>{
        const dough = cheese + "🍪";
        console.log('here is the dough', dough)
        callback(dough)
    }, 2000)
}
function makkePizza(dough, callback){
    setTimeout(()=>{
        const pizza = dough + "🍕";
        console.log('here is the pizza', pizza)
        callback(pizza)
    }, 2000)
}

getcheese((cheese)=>{
    makedough(cheese, (dough)=>{
        makkePizza(dough, (pizza)=>{
            console.log('got my pizza', pizza)
        })
    })
})