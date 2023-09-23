const express = require('express')
const port = 3000

// Instantiate Express app
const app = express()

// Static middleware for serving static files
app.use(express.static('./public'))

// Express middleware for accessing the req.body
app.use(express.json())

// Setup view engine
app.set("view engine", "ejs")
app.set("views", "./views")

// Express middleware for using cookie
const cookieParser = require('cookie-parser')
app.use(cookieParser())

app.get('/', (req, res) => {
  res.status(200).render('index')
})

// import member system router
const memberSys = require('./routes/memberSys')
app.use('/memberSys', memberSys)

// import user router
const user = require('./routes/user')
app.use('/user', user)

app.all('*', (req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

// Global error handler
app.use((err, req, res, next) => {
    err.statusCode = err.status || 500
    res.status(err.statusCode).render('error', {error: {
      status: err.statusCode,
      message: err.message
    }})
})

// run the server
app.listen(port, () => console.log(`Server is running on http://localhost:${port}`))