const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')


const app = express()

const server = require('http').Server(app)

const io = require('socket.io')(server)

io.on('connection',socket =>{
  console.log('nova conexão')
})



mongoose.connect('mongodb+srv://thiago:thiago@cluster0-vnyql.mongodb.net/speak?retryWrites=true&w=majority',{
  useNewUrlParser:true,
  useUnifiedTopology:true
})

app.use(express.json())
app.use(cors())
app.use('/files',express.static(path.resolve(__dirname,'..', 'uploads')));
app.use(routes)



server.listen(3333)