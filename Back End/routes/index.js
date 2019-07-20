const express = require('express')
const router = express.Router();
const DBC = require('./dbcommandsOne')

router.use('/commands', DBC)

module.exports = router;