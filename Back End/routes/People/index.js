//this is our first real look at something akin to middleware. Im not currently USING it for middleware but if i wanted all of the commands here
//to use a specific package or i wanted express to .use something that ONLY these commands need. I would put it here. Its a hub for all the
//commands that are stored in this folder.
const express = require('express')
const routes = express.Router()

//These are where we store our commands in variables. They are each stored in a seperate file. As we add commands we would simply make another
//file and call it like so. SUPER easy. Thats the point of express router. Its a bit of a pain to set up but once its up and running
//everything is SUPER easy to add and modify.
const CR = require('./create')
const DL = require('./delete')
const RT = require('./retrieve')
const UP = require('./update')

routes.post('/create', CR)
routes.get('/retrieve', RT)
routes.put('/update', UP)
routes.delete('/delete', DL)

module.exports = routes;