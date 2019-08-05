const express = require('express');
const router = express.Router();
const accounts = require('./accounts')
const tasks = require('./tasks')
const relationships = require('./relationships')

router.use('/accounts', accounts)
router.use('/tasks', tasks)
router.use('/relationships', relationships)
module.exports = router;