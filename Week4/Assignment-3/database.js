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

const getConnection = () => pool.getConnection()
const query = (sql, values) => pool.query(sql, values)

exports.signUp = async (email, password) => {
    const connection = await getConnection()
    const [rows] = await query('SELECT * FROM user WHERE email = ?', [email])

    if (!rows.length) {
        await query('INSERT INTO user (email, password) VALUES (?, ?)', [email, password])
        connection.release()
        return {success: true}
    } else {
        connection.release()
        return {success: false}
    }
}

exports.signIn = async (email, password) => {
    const connection = await getConnection()
    const [rows] = await query('SELECT * FROM user WHERE email = ? AND password = ?', [email, password])
    connection.release()

    if (!rows.length) {
        return { success: false, msg: 'email or password is wrong!' }
    } else {
        return { success: true }
    }
}
