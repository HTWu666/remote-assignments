const express = require('express')
const router = express.Router()
const validUserInput = require('../middlewares/validSignUp')
const validEmailFormat = require('../middlewares/validSignIn')
const errorHandler = require('../middlewares/errorHandler')
const {
    signUp,
    signIn
} = require('../controllers/user')

router.post('/signup', validUserInput, errorHandler(signUp))
router.post('/signin', validEmailFormat, errorHandler(signIn))

module.exports = router