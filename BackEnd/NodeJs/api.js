const express = require('express');
const mongodb = require('mongodb')
const dbconnect = require('./dbconnect')
const app = express();

app.use(express.json());

app.get('/',async (req, res)=>{
    let data = await dbconnect();
    data = await data.find().toArray();
    res.send(data);
})

app.post('/', async (req, res)=>{
    let data = await dbconnect();
    data = await data.insertOne(req.body)
    res.send(data)
})

app.put('/name', async(req, res)=>{
    let data = await dbconnect();
    data = await data.updateOne(
        {name: req.params.name},
        {$set: req.body}
    )
})

app.delete("/:id", async (req, res)=>{
    let data = await dbconnect();
    data = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
})

app.listen(4000)