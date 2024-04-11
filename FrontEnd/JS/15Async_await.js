

async function harry(){
    let p = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("27")
        }, 2000);
    })
    
    let p2 = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("29")
        }, 1000);
    })

    let delhi = await p;
    let bang = await p2;
    return (delhi, bang);
}

let a = harry()
a.then((value)=>{
    console.log(value)
})
console.log(a)