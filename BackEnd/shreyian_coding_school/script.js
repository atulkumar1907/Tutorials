const express = require('express')
const app = express()

app.set("view engine", "ejs")
app.use(express.static('./public'));

// middleware - runs before every route
app.use(function(req, res, next){
    // console.log(req);
    console.log("Middleware");
    next();
});

// routing
app.get('/', function (req, res) {
  res.render('index', {age: 12})
});

app.get('/profile', function (req, res) {
  res.render('contact')
});

// dynamic routing using routing parameters
// req.params : paramaters passed in url
app.get('/profile/:username', function (req, res) {
  res.send(`Hello World from ${req.params.username}`)
});


app.listen(3000);