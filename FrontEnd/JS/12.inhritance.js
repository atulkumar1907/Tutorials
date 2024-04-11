class Animal{
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
    run(){
        console.log(this.name + ' is running');
    }
    shout(){
        console.log(this.name + ' is shouting')
    }
}

class Monkey extends animal{
    eatBanana(){
        console.log(this.name + ' is eating banana')
    }
    showcolor(){
        console.log(this.name + "'s color is " + this.color)
    }
}

let b = new Monkey('Bruno', 'brown')
b.eatBanana()
b.showcolor()
b.shout()
