const express = require('express')
const multer = require('multer')
const uploadConfig = require('./config/upload')


const SessionController = require('./controllers/SessionController')
const routes = express.Router()
const upload = multer(uploadConfig)

routes.post('/sessions',upload.single('foto'), SessionController.store)
routes.post('/login', SessionController.create)
routes.post('/chat',SessionController.index)

module.exports = routes;