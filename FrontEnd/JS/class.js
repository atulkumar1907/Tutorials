// class Product{
//     constructor(name, price, discount){
//         this.name = name;
//         this.price = price;
//         this.discount = discount;
//     }
//     get getprice(){
//         return this.price;
//     }
//     set setprice(val){
//         this.price = value;
//     }
// }

// let pencil = new Product("pencil", 10, 2)
// // console.log(pencil)

// const Product1 = class Product{
    
//         constructor(name, price, discount){
//             this.name = name;
//             this.price = price;
//             this.discount = discount;
//         }
    
// };


class Product {
    constructor(name){
        this.name = name;
    }
    getname(){
        return this.name+" is a Product";
    }
}

class Furniture extends Product{
    constructor(name){
        super(name);
        // calls the constructor of the parent class
    }
    getname(){
        return this.name + " is a furniture";
    }
}

let pencil = new Product("pencil");
let chair = new Furniture("chair");

