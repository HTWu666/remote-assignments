const mysql = require('mysql2/promise')
const dotenv = require('dotenv')
dotenv.config()

// DB connection pool
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
})

exports.signUp = async (email, password) => {
    try {
        const [exist] = await pool.query('SELECT * FROM user WHERE email = ?', [email])

        if (!exist.length) {
            const result = await pool.query('INSERT INTO user (email, password) VALUES (?, ?)', [email, password])
            return result
        } else {
            throw new Error('Already Registered')
        }
    } catch(error) {
        console.log(error)
        throw error
    }
}

exports.signIn = async (email, password) => {
    try {
        const [results] = await pool.query('SELECT * FROM user WHERE email = ? AND password = ?', [email, password])
        
        if (results.length) {
            return results
        } else {
            throw new Error('LogInFailed')
        }
    } catch(error) {
        throw error
    }
}