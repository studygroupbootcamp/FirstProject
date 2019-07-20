const express = require('express')
const router = express.Router();
const DBC = require('./dbcommandsOne')

router.use('/DB', DBC)

module.exports = router;