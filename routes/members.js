const express = require('express')
const router = express.Router()
const membersController = require('../controllers/members') 
const { ensureAuth } = require('../middleware/auth')

router.get('/members', ensureAuth, membersController.getMembers) //serve members view with any shared data

module.exports = router