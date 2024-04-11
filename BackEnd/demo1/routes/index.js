var express = require('express');
var router = express.Router();
const userModel = require("./users");
const passport = require('passport');
const localStrategy = require('passport-local');

passport.use(new localStrategy(userModel.authenticate()));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

// authorization and authentication
router.get('/profile', isLoggedIn, function(req, res, next) {
  res.send("send welcomet to profile")
});

router.post('/register', function(req, res){
  var userdata = new userModel({
    username: String,
    secret: String
  });

  userModel.register(userdata, req.body.password)
    .then(function(registereduser){
      passport.authenticate("local")(req, res, function(){
        res.redirect('/profile');
      })
    })

})

router.post("/login", passport.authenticate("local", {
  successRedirect: "/profile",
  failureRedirect: "/login"
}) ,function(req, res){

})

router.get("/logout", function(req, res, next){
  req.logout(function(err){
    if(err) return next(err);
    res.redirect("/")
  })
})

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/");
}

// FLASH MESSAGES

// router.get('/failed', function(req, res, next) {
//   req.flash("age", 12);
//   res.send("done");
// });

// router.get('/check', function(req, res, next) {
//   console.log(req.flash("age"));
//   res.send("check karo terminal pr")
// });

// COOKIES AND SESSION

// router.get('/', function(req, res, next) {
//   // req.session.banned = true;
//   res.cookie("age", 25)
//   res.render('index');
// });

// router.get("/read", function(req, res){
//   console.log(req.cookies);
//   res.send("check")
// });

// router.get("/delete", function(req, res){
//   res.clearCookie("age")
//   res.send("clear hogyi")
// });

// router.get("/checkban", function(req, res){
//  if(req.session.banned === true){
//   res.send("You are banned");
//  }
//  else{
//   res.send("You are not banned")
//  }
  
// })

// router.get("/removeban", function(req, res){
//   req.session.destroy(function(err){
//     if (err) throw err;
//     res.send("ban removed");
//   })
// })

// BASIC MONGODB

// router.get('/create', async function(req, res, next) {
//   const createduser = await userModel.create({
//     username: "harsh",
//   name: "harsh",
//   age: 25
//   })
//   res.send(createduser);
// });

// router.get("/allusers", async function(req, res){
//   const allusers = await userModel.findOne({username: "harsh"});
//   res.send(allusers)
//   console.log(allusers)
// })

// router.get("/delete", async function(req, res){
//   const deluser = await userModel.findOneAndDelete({username: "harsh"});
//   res.send(deluser)
// })

\
// INTERMEDIATE MONGODB

// router.get('/create', async function(req, res){
//   let userdata = await userModel.create({
//     username: "harshi",
//   nickname: "harshi",
//   description: "hello everyone",
//   categories: ['lifestyle', 'fashion']
//   });
//   res.send(userdata);
// })

// router.get("/find", async function(req, res){
  // let regex = new RegExp("^Harsh$", 'i')
  // let user = await userModel.find({username: regex});

  // let user = await userModel.find({categories: {$all: ["fashion"]}})
  
  // var date1 = new Date('2023', '11', '02');
  // var date2 = new Date('2023', '11', '03');
  // let user = await userModel.find({datecreated: {$gte: date1, $lte: date2}})
  
  
  // let user = await userModel.find({categories: {$exists: true}});
  
//   let user = await userModel.find({
//     $expr: {
//       $and: [
//         {$gte: [{$strLenCP: '$nickname'}, 0]},
//         {$lte: [{$strLenCP: '$nickname'}, 12]}
//       ]
//     }
//   });

  
//   res.send(user);
// })


module.exports = router;
