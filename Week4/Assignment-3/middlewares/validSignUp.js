const validUserInput = (req, res, next) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({ message: 'Missing email or password' })
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    
    if (!emailPattern.test(email)) {
        return res.status(400).json({ message: 'Invalid email format' })
    }

    next()
}

module.exports = validUserInput;
