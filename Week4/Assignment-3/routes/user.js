const express = require('express')
const router = express.Router()
const validUserInput = require('../middlewares/validSignUp')
const validEmailFormat = require('../middlewares/validSignIn')
const {
    signUp,
    signIn
} = require('../controllers/user')

router.post('/signup', validUserInput, signUp)
router.post('/signin', validEmailFormat,signIn)

module.exports = router