const express = require('express')
const routes = express.Router()

//command Requires
const GFM = require('./getFromMessages.js')
const SM = require('./sendMessage.js')
const GTM = require('./getToMessages')

//http routes

routes.post('/getFromMessage', GFM)
routes.post('/getToMessage', GTM)
routes.post('/sendMessage', SM)



module.exports = routes;