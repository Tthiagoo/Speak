const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

mongoose.connect('mongodb+srv://thiago:thiago@cluster0-vnyql.mongodb.net/speak?retryWrites=true&w=majority',{
  useNewUrlParser:true,
  useUnifiedTopology:true
})

app.use(express.json())
app.use(cors())
app.use(routes)



app.listen(3333)