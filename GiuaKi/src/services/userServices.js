import { connection } from '../config/database.js'

export let handleUserLoginServices = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {}
      let isExist = await checkUserEmail(email)
      let sql = `SELECT username, email FROM user Where email = '${email}' AND password = '${password}' `
      let [results, fields] = await connection.query(sql)
      if (isExist && results[0]) {
        userData.errorCode = 0
        userData.message = 'Login is success'
        userData.user = results[0]
        resolve({ ...userData })
      } else {
        userData.errorCode = 1
        userData.message = 'User is not found'
        resolve({ ...userData })
      }
    } catch (error) {
      console.log('error:', error)
      reject(error)
    }
  })
}

let checkUserEmail = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      let checkEmail = `SELECT * FROM user Where email = '${email}'`
      let [result, fields] = await connection.query(checkEmail)
      if (result[0]) {
        resolve(true)
      } else {
        resolve(false)
      }
    } catch (error) {
      reject(error)
    }
  })
}

export let getUserById = async (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const sql = `SELECT * FROM user Where username = '${userId}' `
      const [results, fields] = await connection.query(sql)
      if (results[0]) {
        resolve(users[0])
      }
    } catch (error) {
      reject(error)
    }
  })
}

export let createUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      // check user email is exist??
      let checkEmail = await checkUserEmail(data.email)
      if (checkEmail) {
        resolve({
          errorCode: 1,
          message: 'Email này đã được đăng kí.'
        })
      } else {
        if (!data.name || !data.email || !data.password) {
          resolve({
            errorCode: 1,
            message: 'Điền đầy thủ thông tin.'
          })
        } else {
          let sql = `INSERT INTO user(username, email, password) VALUES ( '${data.name}', '${data.email}',  '${data.password}')`
          let [results, fields] = await connection.query(sql)
          resolve({
            errorCode: 0,
            message: 'Tạo người dùng thành công.',
            user: results[0]
          })
        }
      }
    } catch (error) {
      reject(error)
    }
  })
}

export let deleteUser = async (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!userId) {
        resolve({
          errorCode: 1,
          message: 'Không tìm thấy ID người dùng, hoặc người dùng đã bị xoá'
        })
      } else {
        let sql = `SELECT * FROM user Where id = '${userId}' '`
        let [results, fields] = await connection.query(sql)
        if (results[0]) {
          resolve(results[0])
        } else {
          resolve({
            errorCode: 1,
            message: 'Không tìm thấy người dùng trong hệ thống'
          })
        }
      }
    } catch (error) {
      reject(error)
    }
  })
}
