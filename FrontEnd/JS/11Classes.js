 class RailwayForm{
    constructor(){
        console.log("Constructor Called");
    }
    fillForm(name, Class, dest){
        this.name = name;
        this.Class = Class;
        this.dest = dest;
    }
    submit(){
        console.log(`${this.name}'s form is submitted`);
    }
    cancel(){
        console.log(`${this.name}'s form is cancelled`);
    }
    preview(){
        console.log("\nYour details are : ")
        console.log("Name : ", this.name);
        console.log("Class : ", this.Class);
        console.log("Destination : ", this.dest);
    }
    changeName(name){
        this.name = name;
    }
    changeDest(name){
        this.dest = name;
    }
    changeClass(name){
        this.class = name;
    }
    
};

let rohan = new RailwayForm();
rohan.fillForm("Rohan", "1st", "Manali");
rohan.submit();
rohan.preview()
rohan.cancel()
rohan.changeClass("2nd")
rohan.changeDest("goa")
rohan.changeName('aman')
rohan.preview()



