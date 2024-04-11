const mongoose = require('mongoose');

mongoose.connect(`mongodb://127.0.0.1.27017/TSF_BANK`);
const ProductSch = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const insert = async () => {

    const Product = mongoose.model('customers', ProductSch);
    let data = new Product({ name: "aman" });
    let result = await data.save();
    console.log(data);
}

const update = async () => {
    const Product = mongoose.model('customers', ProductSch);
    let data = await Product.updateOne(
        { name: "aman" },
        { $set: { name: "naman", age: 25 } }
    )
}

const deleteDb = async () => {
    const Product = mongoose.model('customers', ProductSch);
    let data = await Product.deleteOne(
        { name: "atul" }
    )
}

const readDb = async () => {
    const Product = mongoose.model('customers', ProductSch);
    let data = await Product.find(
        { name: "naman" }
    )
}


