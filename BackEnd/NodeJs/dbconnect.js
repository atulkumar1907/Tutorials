const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1.27017';
const database = 'TSF_BANK';
const client = new MongoClient(url);

async function dbconnect(){
    let result = await client.connect(url);
    let db = result.db(database);
    return db.collection('customers')
   
}

module.exports = dbconnect