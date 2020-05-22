const User = require('../models/User')
module.exports = {
  async store(req, res) {
    const { filename } = req.file;
    const { name, username, idade, bio, foto, sexo, senha } = req.body
    let user = await User.findOne({ username })
    if (!user) {
      user = await User.create({
        name, 
        username, 
        idade, 
        bio, 
        foto :filename, 
        sexo, 
        senha
      })
      console.log('não existe')
    }

    return res.json(user)

  }


    
}


//const User = require('../models/User')


/*module.exports = {
  async store(req,res){
    const {name, username,idade,bio,foto,sexo,senha } = req.body
    let user = await User.findOne({username})

    if(!user){
      user = await User.create({name, username,idade,bio,foto,sexo,senha})
      console.log('existe')
    }

    return res.json(user)
  }
}*/