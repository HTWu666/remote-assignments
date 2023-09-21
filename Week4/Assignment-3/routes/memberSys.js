const express = require('express')
const router = express.Router()
const validUserInput = require('../middlewares/validSignUp')
const validEmailFormat = require('../middlewares/validSignIn')

// import request handler function
const {
    index,
    member,
    signUp,
    signIn,
    signOut
} = require('../controllers/memberSys')

router.get('/', index)
router.get('/member', member)
router.post('/signup', validUserInput, signUp)
router.post('/signin', validEmailFormat,signIn)
router.get('/signout', signOut)

module.exports = router