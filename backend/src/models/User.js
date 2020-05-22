const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name:String,
  username:String,
  senha:String,
  foto:String,
  idade:Number,
  sexo:String,
  bio:String,


})

module.exports = mongoose.model('User',UserSchema)