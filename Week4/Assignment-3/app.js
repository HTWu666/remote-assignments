const express = require('express')
const port = 3000;

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
  res.render('index')
})

// import member system router
const memberSys = require('./routes/memberSys')
app.use('/memberSys', memberSys)

// import user router
const user = require('./routes/user')
app.use('/user', user)

// Error handler
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({message: 'Internal Server Error'});
});

// run the server
app.listen(port, () => console.log(`Server is running on http://localhost:${port}`))