const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

var usuarios = [];




io.on('connection', socket => {

  console.log('[SOCKET]nova conexão')
  socket.on("entrar", function (apelido) {
    if (!(apelido in usuarios)) {
      socket.apelido = apelido;
      usuarios[apelido] = socket;
      io.sockets.emit("updateUsers", Object.keys(usuarios));
      console.log(usuarios)
      console.log('emitiu')
      console.log(socket.apelido)
    } else {
      console.log('não emitiu')
    }
  });


  socket.on('chat.message', data => {
    console.log('[SOCKET]chat message =>', data)
    io.emit('chat.message', data)

  })
  socket.on('disconnect', () => {
    console.log('[SOCKET]disconnect')
  })
})



mongoose.connect('mongodb+srv://thiago:thiago@cluster0-vnyql.mongodb.net/speak?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(express.json())
app.use(cors())
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes)



server.listen(3333)