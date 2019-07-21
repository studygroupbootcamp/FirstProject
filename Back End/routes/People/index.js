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
const SI = require('./signIn.js')
const RA = require('./specificRetrieve')
const NR = require('./nameRetrieve')

//These are our different http requests. Notice how it no longer says router.use. It not has the methods that we would normally put in front of
//our commands. You now put them here. Then you set the end point that you would use on the front end and tell it what file to use when it
//hits that endpoint. So far on server.js we had routes.use / then in routes we had router.use /commands then here we have a bunch of endpoints
// so to call one of these you would do /commands/the command you want. We would normally put api in our server so that it would look more like
// api/commands/the command. But it was acting weird when i did that so i temporarily changed it.

//this is our create command
routes.post('/create', CR)

//this is our get command
routes.get('/retrieve', RT)

routes.post('/retrieveAccount', RA)

routes.post('/signIn', SI)

routes.post('/nameSearch', NR)
//this is our update command
routes.put('/update', UP)

//this is our delete command
routes.delete('/delete', DL)


//and this is where we export it as routes.
module.exports = routes;