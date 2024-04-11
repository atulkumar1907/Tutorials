class Animal{
    constructor(name){
        this.name = Animal.capitalize(name);
    }
    walk(){
        console.log(this.name + ' is walking')
    }
    static capitalize(name){
        return name.charAt(0).toUpperCase() + name.substr(1, name.length)
    }
    get Name(){
        return this._name
    }
    set Name(newName){
         this.name = newName
    }
}
let j = new Animal('jack')
j.walk()