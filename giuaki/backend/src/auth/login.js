import { connection } from '../config/database.js'

// A simple SELECT query
export let selectQuessQuery = async () => {
  try {
    const sql = 'SELECT * FROM `quess`'
    const [results, fields] = await connection.query(sql)

    console.log(results)
    console.log(fields)
  } catch (error) {
    console.log(error)
  }
}

// Signup
export let insertUserQuery = async (username, email, password) => {
  try {
    if (username && email && password) {
      let selectUser = `SELECT * FROM user Where username = '${username}' OR  email = '${email}'`
      let [resultsSelect, fieldsSelect] = await connection.query(selectUser)
      if (!resultsSelect[0]) {
        let sql = `INSERT INTO user(username, email, password) VALUES ( '${username}', '${email}',  '${password}')`

        let [results, fields] = await connection.query(sql)
        console.log(results[0])
        return results[0]
      }
    }
  } catch (error) {
    console.log(error)
  }
}

// Signin
export let selectUserQuery = async (email, password) => {
  try {
    if (email && password) {
      let sql = `SELECT username, email FROM user Where email = '${email}' AND password = '${password}'`
      let [results, fields] = await connection.query(sql)
      console.log(results[0])
      return results[0]
    }
  } catch (error) {
    console.log(error)
  }
}
