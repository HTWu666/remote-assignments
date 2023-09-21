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
        const [results] = await pool.query('SELECT * FROM user WHERE email = ?', [email])

        if (!results.length) {
            await pool.query('INSERT INTO user (email, password) VALUES (?, ?)', [email, password])
            return { success: true }
        } else {
            return {success: false, errorMsg: 'AlreadyRegistered'}
        }
    } catch(error) {
        console.error('Sign-up error:', error);
        return { success: false, errorMsg: error }
    }
}

exports.signIn = async (email, password) => {
    try {
        const [results] = await pool.query('SELECT * FROM user WHERE email = ? AND password = ?', [email, password])

        if (results.length) {
            return { success: true }
        } else {
            return { success: false, errorMsg: 'LoggedInFailed' }
        }
    } catch(error) {
        console.error('Sign-in error:', error);
        return { success: false, errorMsg: error }
    }
    
}
