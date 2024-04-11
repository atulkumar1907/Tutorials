class Employee{
    constructor(){
        console.log("Employee's constructor is here")
    }
    
    login(){
        console.log("Employee has logged In")
    }
    logout(){
        console.log("Employee has logged Out")
    }
    requestleaves(leaves){
        console.log("Employee has requested " + leaves + " leaves")
    }
}

class Coder extends Employee{
    requestCoffee(x){
        console.log('Coder Employee has requested ' + x + " coffees")
    }
    requestleaves(leaves){
        super.requestleaves(leaves)
        console.log("one extra leave is granted");
    }
    
}
let e = new Employee()
e.login()
e.logout()
let b = new Coder()
b.requestleaves(2)