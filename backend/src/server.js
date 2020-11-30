const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const path = require('path')
const app = express();
app.use(express.json())
const cors = require('cors')

app.use(cors());

const server = require('http').createServer(app)
const io = require('socket.io').listen(server)

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes)
const PORT = process.env.PORT || 3333
app.listen(PORT)

const { addUser, getUser, getUserInRoom, removeUser } = require('./usersFunction')

io.on('connection', socket => { 
  
 
  
  socket.on('join', ({ username, room, foto_url, name, bio }, callback) => {
    const { user, error } = addUser({ id: socket.id, username, room, foto_url, name, bio })
  
    
    if (error) return callback(error)
    socket.join(user.room)
    
    socket.emit('message',
     { user: 'admin', text: `${user.username},bem vindo na sala:${user.room}` })
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.username} has joined!` });

   

    io.to(user.room).emit('roomData', { room: user.room, users: getUserInRoom(user.room) });
   
    callback()
  });

  socket.on('sendMessage',(message,callback)=>{
    const user = getUser(socket.id);
   

    io.to(user.room).emit('message',{user:user.username, text:message});
    
    io.to(user.room).emit('roomData',{room:user.room, users:getUserInRoom(user.room)});
    callback()
    

  })



  socket.on('disconnect', () => {
    
    const user = removeUser(socket.id);

    if(user) {
      io.to(user.room).emit('message', { user: 'Admin', text: `${user.username} saiu.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUserInRoom(user.room)});
    }
  })
})






mongoose.connect('mongodb+srv://thiago:thiago@cluster0-vnyql.mongodb.net/speak?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})








