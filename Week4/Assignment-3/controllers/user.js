const {
    getUser,
    createUser
} = require('../models/user')

const signUp = async (req, res) => {
    const {email, password} = req.body
    const [existUser] = await getUser(email)
    
    if (existUser) {
        res.status(400).json({message: 'Already Registered'})
    } else {
        await createUser(email, password)
        res.status(200).cookie('SIGNEDIN', true).json({message: 'Sign up successfully'})
    } 
}

const signIn = async (req, res, next) => {
    const {email, password} = req.body
    const [result] = await getUser(email)

    if (result && result.password === password) {
        res.status(200).cookie('SIGNEDIN', true).json({message: 'Sign in successfully'})
    } else {
        res.status(400).json({message: 'Email or password is wrong'})
    }
}

module.exports = {
    signUp,
    signIn
}