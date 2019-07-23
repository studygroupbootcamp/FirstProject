const express = require('express')
const routes = express.Router()

//command Requires
const SF = require('./showFriends.js')
const AF = require('./addFriends.js')
const CF = require('./checkFriend.js')

//http routes

routes.post('/showFriends', SF)
routes.post('/addFriend', AF)
routes.post('/checkFriend', CF)



module.exports = routes;