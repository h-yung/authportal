const express = require('express')
const router = express.Router()
const membersController = require('../controllers/members') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, membersController.getMembers) 
router.get('/test', ensureAuth, membersController.getTest) 
router.get('/:memberId', ensureAuth, membersController.getMemberProfile)

//serve members view with any shared data. This is actually /members/*

module.exports = router