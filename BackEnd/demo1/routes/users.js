
const mongoose = require('mongoose')

//db creation
mongoose.connect("mongodb://127.0.0.1:27017/practice")

const userschema = mongoose.Schema({
  username: String,
  nickname: String,
  description: String,
  categories: {
    type: Array,
    default: []
  },
  dateCreated: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model("user", userschema);
