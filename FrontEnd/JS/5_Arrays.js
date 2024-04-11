//ARRAYS

let arr = ['aman', 45, 'vivek', true, 'puja'];
let num = [1, 2, 3]
let num2= [4, 5, 6]
console.log(arr)
arr[1] = 'naman';
console.log(arr)

console.log("Data Type of array : ",typeof arr)


//METHODS
console.log("\nMethods of Arrays")
console.log("Reverse : ",arr.reverse())
console.log("Length of array : ",arr.length)
console.log("To String : ",arr.toString())
console.log("Join '->' : ",arr.join('->'))
console.log('Pop : ',arr.pop()) //modifies array
console.log("length after Push : ",arr.push('harsh'))
console.log("Shift : ",arr.shift())
console.log("UnShift : ",arr.unshift(5))
delete arr[0]
console.log("Delete : ",arr)
console.log(arr.concat(num, num2)) //returns new array
console.log((num.concat(num2)).sort()) //sorts new array

//for sorting in descending order
const compare = (a, b)=>{
    return b-a;
}
console.log(num.sort(compare))
console.log(arr)
console.log('splice  : ', arr.splice(2, 3, 'a', 'b', 'c', 'd'))
console.log(arr)
console.log('Slice : ', arr.slice(1, 3))

//LOOPS ON ARRAY

let array = [1, 2, 3, 4, 5, 6, 7]

// for(let i=0; i<array.length; i++){
//     console.log(array[i]);
// }

// for (const item of array) {
//     console.log(item)
// }

// for(let index in array){
//     console.log(array[index]);
// }

// array.forEach(e=>{
//     console.log(e);
// })

// ARRAY.FROM METHOD
let num3 =  Array.from('atul');
console.log(num3)

// MAP, FILTER AND REDUCE

let num4 = [46, 39, 59, 100, 28]

// MAP : creates new array by applying operation on each element
let Map = num4.map((value, index, num)=>{
    console.log(value**2, index, num)
})

// FILTER : 
let Filter = num4.filter((value)=>{
    return value%2==0
})
console.log(Filter)

// REDUCE :
let num5 = [1, 2, 3, 7, 4, 1]
let Reduce = num5.reduce((h1, h2)=>{
    return h1*h2;
})
console.log(Reduce)