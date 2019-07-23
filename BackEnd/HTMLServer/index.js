const express = require('express')
const routes = express.Router()
const path = require('path')


routes.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'../../../Front End/index.html'));
})


module.exports = routes;