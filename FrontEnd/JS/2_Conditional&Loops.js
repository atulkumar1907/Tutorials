//operators 
// +, -, *, /, **, ++a, a++, --a, a--, //, +=, -=, *=, /=

//CONDITIONAL EXPRESSIONS
//IF_ELSE, SWITCH

let age = 18;

if (age < 18) {
    console.log("You're under 18");
}
else if (age == 18) {
    console.log("You're 18");
}
else {
    console.log("You're more than 18");
}

let operator = "+";
let a = 10;
let b = 20;

switch (operator) {
    case "+":
        console.log(a + b);
        break;
    case "-":
        console.log(a - b);
        break;
    case "*":
        console.log(a *b);
        break;
    case "/":
        console.log(a / b);
        break;
    case "**":
        console.log(a ** b);
        break;
    case "%":
        console.log(a % b);
        break;
  
    default:
        console.log('No Operator defined')
}


//LOOPS
//FOR, WHILE, DO...WHILE, for...In, For...Of, forEach

//For Loop : entry control loop

for(let i=0; i<5; i++){
    console.log(i+1," ");
}

//For...In loop
console.log("For...In loop")
let arr = [1, 2, 3, 4, 5];
for(let i in arr){
    console.log(arr[i])
}

//For...OF
console.log("For...of loop")
for(item of arr){
    console.log(item)
}

//forEach : only for arrays
console.log("foreach loop")

arr.forEach(element => {
    console.log(element)
});

//While Loop : entry control Loop
console.log("While Loop")
let j = 0;
while(j<arr.length){
    console.log(arr[j]," ");
    j++;
}

console.log("do...while loop")
let i = 0
do{
    console.log(arr[i]);
    i++;
}while(i<arr.length)