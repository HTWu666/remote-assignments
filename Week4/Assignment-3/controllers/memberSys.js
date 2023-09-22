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
    
    try {
        const result = await user.signUp(email, password)
        res.status(201).cookie('SIGNEDIN', true).json({message: 'Signup successfully'})
    } catch (error) {
        if (error.message === 'Already Registered') {
            res.status(409).json({message: 'Already Registered'})
        } else {
            res.status(500).json({message: 'Internal Server Error'})
        }
    }
}    

const signIn = async(req, res) => {
    const { email, password } = req.body

    try {
        const result = await user.signIn(email, password)
        res.status(200).cookie('SIGNEDIN', true).json({message: 'Login successfully'})
    } catch (error) {
        if (error.message === 'LogInFailed') {
            return res.status(401).json({message: 'Email or password is wrong'})
        } else {
            res.status(500).json({message: 'Internal Server Error'})
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