const express = require('express');
const app = express();

const reqFilter = (req, res, next)=>{
    if(!req.query.age ){
        res.send("Please provide age!")
    }else if(req.query.age<18){
        res.send("You cannot access this page")
    }else{
        next();
    }
};
// application-level middleware
// app.use(reqFilter);

app.get('/',(req, res)=>{
res.send("Welcome home page");
});

// router-level middleware
app.get('/about', reqFilter,(req, res)=>{
    res.send("Welcome home page");
    });
app.listen(5000)

// for applying ddlewares on agroup of pages 
// const route = exress.Router();
// app.use('/', route);
// route.use(reqFilter);
// route.get();