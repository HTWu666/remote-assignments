// import module
const express = require('express')
const cookieParser = require('cookie-parser')

// create Express Application object
const app = express()

// set the port number
const port = 3000

// set the path for the static file
app.use(express.static('public'))

// set the file type for the render template
app.set('view engine', 'ejs')

// set the path for the render template
app.set('views', './views')

// Enable the cookie-parser middleware
app.use(cookieParser())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/data', (req, res) => {
    let number = req.query.number

    if (number === undefined) {
        return res.send('Lack of Parameter')
    } else if (!isNaN(number)) {
        number = parseInt(number)
        let sum = 0

        for (let i = 1; i <= number; i++) {
            sum += i
        }

        return res.send(`The sum is ${sum}`)
    } else {
        return res.send('Wrong Parameter')
    }
})

app.get('/myName', (req, res) => {
    let name = req.cookies.name

    if (name !== undefined) {
        return res.send(`Your name is ${name}.`)
    } else {
        return res.render('track-name')
    }
})

app.get('/trackName', (req, res) => {
    let name = req.query.name

    res.cookie('name', name)

    return res.redirect('/myName')
})

// run the server on the specific port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`)
})
