const express = require('express')
const port = 3000;
const { signUp, signIn } = require('./database.js')

const app = express()

// setup middleware
app.use(express.static('./public'))
app.use(express.json())

// signup endpoint
app.post('/signup', async(req, res) => {
    const { email, password } = req.body
    const result = await signUp(email, password)
    res.json(result)
})

// signin endpoint
app.post('/signin', async(req, res) => {
    const { email, password } = req.body
    const result = await signIn(email, password)
    res.json(result)
})

// run the server
app.listen(port, () => console.log(`Server is running on http://localhost:${port}`))