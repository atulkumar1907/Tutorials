const express = require('express');
const EventEmitter = require('events');
const app = express();

let count = 0;

const event = new EventEmitter();
event.on("countAPI", ()=>{
    count++;
    console.log("event called",count)
})

app.get('/', (req, res)=>{
    res.send("api called");
    event.emit("countAPI")
})

app.get('/search', (req, res)=>{
    res.send(" search api called")
    event.emit("countAPI")
})

app.get('/update', (req, res)=>{
    res.send(" update api called")
})

app.get('*', (req, res)=>{
    res.send(" encountered 404")
})

app.listen(3000);