const express = require('express');
const app = express();

app.get('', (req, res)=>{
    res.send(`<h1>Hello, this is homepage ${req.query.name}</h1>`);
});

app.get('/about', (req, res)=>{
    res.send("Hello, this is about page");
});
app.get('/input', (req, res)=>{
    res.send(`
        <input type="text" placeholder="User name...">
        <button>Click Me!</button>
    `)
})

app.get('/help', (req, res)=>{
    res.send({
        name: "Atul",
        email: "atulashyap1907@gmail.com"
    });
});

app.listen(2000);