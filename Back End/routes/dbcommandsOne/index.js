const express = require('express')
const routes = express.Router()

const CR = require('./create')
const DL = require('./delete')
const RT = require('./retrieve')
const UP = require('./update')

routes.post('/create', CR)
routes.get('/retrieve', RT)
routes.put('/update', UP)
routes.delete('/delete', DL)

module.exports = routes;