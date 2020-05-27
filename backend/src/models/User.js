const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: String,
  username: String,
  senha: String,
  foto: String,
  bio: String,


},
  {
toJSON:{
  virtuals:true,
}
  }
)
UserSchema.virtual('foto_url').get(function () {
  return `http://localhost:3333/files/${this.foto}`
})
module.exports = mongoose.model('User', UserSchema)

