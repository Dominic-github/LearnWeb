// Get the client
import mysql from 'mysql2/promise'
import 'dotenv/config'

// Create the connection to database
const connection = await mysql.createConnection({
  host: 'localhost',
  user: process.env.USERNAME,
  password : process.env.PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
})

// A simple SELECT query
export let selectQuess = async ()=>{
  try {
    const [results, fields] = await connection.query('SELECT * FROM `quess` ')

    console.log(results) // results contains rows returned by server
    console.log(fields) // fields contains extra meta data about results, if available
  } catch (err) {
    console.log(err)
  }
}

