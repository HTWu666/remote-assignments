const index = (req, res) => {
    res.status(200).render('index')
}

const member = (req, res) => {
    const signedIn = req.cookies.SIGNEDIN
    
    if (signedIn) {
        res.status(200).render('member')
    } else {
        res.status(302).redirect('/')
    }
}

const user = require('../models/memberSys')

const signUp = async (req, res) => {
    const { email, password } = req.body
    const result = await user.signUp(email, password)
    
    if (result.success) {
        res.status(201).cookie('SIGNEDIN', true).json({message: 'Signup successfully'})
    } else {
        if (result.errorMsg === 'AlreadyRegistered'){
            res.status(409).json({message: 'Already Registered'})
        } else {
            res.status(500).json({message: 'Server Error'})
        }
    }
}

const signIn = async(req, res) => {
    const { email, password } = req.body
    const result = await user.signIn(email, password)

    if (result.success) {
        res.status(200).cookie('SIGNEDIN', true).json({message: 'Login successfully'})
    } else {
        if (result.errorMsg === 'LoggedInFailed') {
            res.status(400).json({message: 'Email or password is wrong'})
        } else {
            res.status(500).json({message: 'Server Error'})
        }
    }
}

const signOut = (req, res) => {
    res.status(302).cookie('SIGNEDIN', '', { expires: 0 }).redirect('/')
}

module.exports = {
    index,
    member,
    signUp,
    signIn,
    signOut
}