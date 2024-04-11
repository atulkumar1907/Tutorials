// for loop

for(let i=0; i<5; i++){
    console.log("This is print using for loop");
}

// while loop
let i=1;
while(i<5){
    console.log("This is print using while loop");
    i++;
}

// do...while loop
do{
    console.log("this is print using do...while loop");
    i++;
}while(i<0)

// for...in
let animal = {
    name: "Zebra",
    leg: 4,
}

for(let key in animal){
    console.log(key, animal[key])
}


let arr = [1, 2, 3, 4, 5, 6];
for(let index in arr){
    console.log(index, arr[index])
}


// for...of

for(let num of arr){
    console.log(num)
}

// forEach

arr.forEach((item)=>{
    console.log(item)
})