const express = require('express')
const routes = express.Router()

//command Requires
const GPFU = require('./getPostsFromUser.js')
const GFP = require('./getFriendPosts')
const MP = require('./makePost.js')

//http routes
routes.post('/getPostFromUser', GPFU)
routes.post('/getFriendsPost', GFP)
routes.post('/makePost', MP)


module.exports = routes;