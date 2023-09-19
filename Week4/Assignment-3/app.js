const express = require('express')
const mysql = require('mysql2/promise')
const dbconfig = require('./dbconfig')
const port = 3000;

const app = express()

// setup middleware
app.use(express.static('./public'))
app.use(express.json())

// DB connection pool
const pool = mysql.createPool(dbconfig)
const getConnection = () => pool.getConnection()
const query = (sql, values) => pool.query(sql, values)

// signup endpoint
app.post('/signup', async(req, res) => {
    const { email, password } = req.body

    const connection = await getConnection()
    const [rows, _] = await query('SELECT * FROM user WHERE email = ?', [email])

    if (!rows.length) {
        await query('INSERT INTO user (email, password) VALUES (?, ?)', [email, password])
        connection.release()
        return res.json({success: true})
    } else {
        connection.release()
        return res.json({success: false})
    }
})

// signin endpoint
app.post('/signin', async(req, res) => {
    const { email, password } = req.body

    const connection = await getConnection()
    const [rows, _] = await query('SELECT * FROM user WHERE email = ? AND password = ?', [email, password])
    connection.release()

    if (!rows.length) {
        return res.json({ success: false, msg: 'email or password is wrong!' });
    } else {
        return res.json({ success: true });
    }
})

// run the server
app.listen(port, () => console.log(`Server is running on http://localhost:${port}`))