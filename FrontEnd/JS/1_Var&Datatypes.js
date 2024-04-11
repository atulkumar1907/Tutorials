/*VARIABLES
Three keywords to declare variables in JS
 -> var, let and const


1) var : 
not blocked scoped*/
console.log("USING VAR KEYWORD");
var n_blocked = "this";
{
    var n_blocked = "there";
    console.log(n_blocked);
}
console.log(n_blocked);

//can be redeclared or redefined
var a = 10;
console.log("var a is : ", a)
var a = 'atul';
a = "kumar";
console.log('var a is : ', a)

/*2) let : 
can't be redeclared but can be redefined*/
console.log("\nUSING LET KEYWORD");
let two = 10;
two = 35;
//let two = 20;  illegal
console.log("let two is :", two);

//blocked scope

two = 35;
{
    let two = 'let';
    console.log(two);
}
console.log(two);

/*
3)const 
blocked scope and can't be redifined
needs to initialize at the time of declaration */

//const a; illegal
console.log("\nUSING CONST KEYWORD");
const c = 35;
{
    const c = 34;
    console.log(c);
}
console.log(c);


/*PRIMITIVE DATATYPES
nn ss bb u
number, null, string, symbol, boolean, bigInt, undefined*/
console.log("\nPrimitive Datatypes")
let num = 23;
let nu_ll = null; 
let str = "string"; 
let symbl = Symbol('i am a symbol'); 
let boolean = true; 
let big = BigInt(567);
let undefnd = undefined;

console.log(typeof(num)," : ",num)
console.log(typeof(nu_ll)," : ",nu_ll)
console.log(typeof(str)," : ",str)
console.log(typeof(symbl)," : ",symbl)
console.log(typeof(boolean)," : ",boolean)
console.log(typeof(big)," : ",big)
console.log(typeof(undefnd)," : ",undefnd)


/*NON-PRIMITIVE DATATYPES
1)ARundefnd*/
//using new keyword
console.log("\nArrays")
let arr1 = new Array(20, 39);
console.log(arr1); // accessing array
console.log(arr1[0]); //accessing individual elements
arr1[1] = 30; // changing elements
console.log(arr1);

let arr2 = [1, 2, 3, 5, 8, 0];
console.log(arr2) 


/*2) OBJECTS : key/properties and value pairs, everything in JS is a object

using consructor function*/

//empty generic object
console.log("\nObjects")
const obj = new Object();

//user defined object

// const myCar = new Car(); needs to define car first;

//using lliteral notations

var object = {};  //empty object
var object = {
    a : 20,
    b : true,
    c : "c"
};

console.log(object)
console.log(object.a) //accessing value using dot(.) operator
console.log(object['b']) //accessing through literal
object.c = "value" //changing value
console.log(object.c)

