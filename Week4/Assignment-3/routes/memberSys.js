const express = require('express')
const router = express.Router()

// import request handler function
const {
    memberSys,
    signOut
} = require('../controllers/memberSys')

router.get('/', memberSys)
router.get('/signout', signOut)

module.exports = router