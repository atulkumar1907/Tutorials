const mongoose = require('mongoose');
const express = require('express');
const app = express();

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1.27017');

const ProductSch = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});
let Product = mongoose.model('customers', ProductSch);

app.get('/search/:key', async (req, res)=>{
    let data = await Product.find(
        {
            "$or":[
                {"name":{$regex:req.params.key}},
                {"brand":{$regex:req.params.key}}
            ]
        }
    );
    res.send(data);
});




































app.post('/', async (req, res)=>{
    let data = new Product(req.body);
    let result = await data.save();
    console.log(data);
});

app.get('/', async (req, res)=>{
    let data = await Product.find();
});

app.delete('/delete:_id', async (req, res)=>{
    let data = await Product.deleteOne(req.params)
});

app.put('/update', async (req, res)=>{
    let data = await Product.updateOne(
        req.params,
        {$set: req.body}
    )
});

app.listen(3000)