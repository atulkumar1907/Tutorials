const dbconnect = require('./dbconnect')

const find = async ()=>{
    let data = await dbconnect();
    data = await data.find().toArray();
    console.log(data)
}

const insert = async()=>{
    let db = await dbconnect()
    const result =await db.insert(
        {
            name: 'atul', email:"a@gmail.com", age: 17
        }
    )
    if(result.acknowledged){
        console.log("data inserted")
    }
}
insert();