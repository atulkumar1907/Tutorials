// Objects
// const course = {
//     lecture : 10,
//     section : 3,
//     title: "Javascript",
//     notes:{
//         introduction: "Welcome to JS course"
//     },
//     enroll(){
//         console.log("You are successfully enrolled!");
//     }
// }

// course.price = 999;
// course.enroll()
// console.log(course)

// factory function
// function createCourse(title, lec, sec){
//     return {
//         lecture : lec,
//         section : sec,
//         title: title,
//         notes:{
//             introduction: "Welcome to JS course"
//         },
//         enroll(){
//             console.log("You are successfully enrolled!");
//         }
//     }
// }

// const course = createCourse("Javascript", 10, 2)
// for(let key in course){
//     console.log(`${key}: ${course[key]}`)
// }

// constructor function

function Course(title){
    this.title = title,
    this.enroll = ()=>{
        console.log("You're successfully enrolled");
    }
}

const course = new Course('Javascript')

course.enroll()