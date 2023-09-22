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
    
        if (result) {
            res.status(201).cookie('SIGNEDIN', true).json({message: 'Signup successfully'})
        } else {
            res.status(409).json({message: 'Already Registered'})
        } 
    } catch (error) {
        res.status(500).json({message: 'Internal Server Error'})
    }
    
}

const signIn = async(req, res) => {
    const { email, password } = req.body

    try {
        const result = await user.signIn(email, password)

        if (result) {
            return res.status(200).cookie('SIGNEDIN', true).json({message: 'Login successfully'})
        } else {
            return res.status(401).json({message: 'Email or password is wrong'})
        }
    } catch (error) {
        res.status(500).json({message: 'Internal Server Error'})
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