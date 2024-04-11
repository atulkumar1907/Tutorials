// setTimeout(() => {
//     console.log("Connecting wifi....")
// }, 2000);

// setTimeout(() => {
//     console.log("Hacking wifi....")
// }, 2000);

// try{  //only handles synchronous script
//     console.log(variable)
// }
// catch(error){
//     console.log("An Error Occured")
// }

// setTimeout(() => {
//     console.log("fetching username and password of wifi....")
// }, 2000);


// setTimeout(() => {
//     console.log("Hacked wifi....")
// }, 2000);


// Error Object

try {
    let age = "163"
    age = Number.parseInt(age)
    if (age > 150) {
        throw new Error("This is probably not true")
    }
}
catch (error) {
    console.log(error.name)
    console.log(error.message)
}
finally{
    console.log("the script is still running")
}