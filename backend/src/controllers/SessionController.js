const User = require('../models/User')
module.exports = {
  async store(req, res) {
    
    let filename

    req.file ? ({filename}=req.file) : filename = 'perfil-padrao.png'
  



    /*let file
    req.file ? file = ({filename} = req.file) : file = 'perfil-padrao.png'
*/
    


    const { name, username, bio, foto, senha } = req.body
    let user = await User.findOne({ username })
    if (!user) {
      user = await User.create({
        name,
        username,
        bio,
        foto : filename,
        senha
      })
      
    }

    return res.json(user)

  },




  
  async create(req, res) {
    const { username, senha } = req.body;
    let user = await User.findOne({ username, senha })
    if (!user) {
      return res.status(400).json({ error: 'no USER found with this username and password' })
    }
    return res.json(user)
  },




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