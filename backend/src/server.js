const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

const { addUser, getUser, getUserInRoom, removeUser } = require('./usersFunction')


io.on('connection', socket => {
  console.log('[SOCKET]nova conexão')

  socket.on('join', ({ username, room }, callback) => {
    const { user, error } = addUser({ id: socket.id, username, room })


    console.log(username, room)
    if (error) return callback(error)

    socket.emit('message', { user: 'admin', text: `${user.username},bem vindo na sala:${user.room}` })
    socket.broadcast.to(user.room).emit('menssage',{user:'admin',text:`${user.username},ta on`})

    socket.join(user.room)
    callback()

  });

  socket.on('sendMessage',(message,callback)=>{
    const user = getUser(socket.id);

    io.to(user.room).emit('message',{user:user.username, text:message});
    callback()

  })



  socket.on('disconnect', () => {
    console.log('Usuario desconectado')
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