const express = require('express');
const path = require('path');

const app = express();
const publicpath = path.join(__dirname, 'public')

app.set('view engine','ejs');

app.use(express.static(publicpath))

app.get('/profile',(req, res)=>{
    const user={
        name:"atul",
        email:'atulkashyap1907@gmail.com',
    }
    res.render('profile', {user});
})

app.listen(9000);