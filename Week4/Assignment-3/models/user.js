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

const getUser = async(email) => {
    try {
        const [result] = await pool.query('SELECT id, email, password FROM user WHERE email = ?', [email])
        return result
    } catch (error) {
        throw error
    }   
}

const createUser = async(email, password) => {
    try {
        return pool.query('INSERT INTO user (email, password) VALUES (?, ?)', [email, password])
    } catch (error) {
        throw error
    }
}

module.exports = {
    getUser,
    createUser
}