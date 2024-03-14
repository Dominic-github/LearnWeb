import { connection } from '../config/database.js'

export let handleGetQuessServices = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let quessData = {}
      const sql = 'SELECT * FROM `quess`'
      const [results, fields] = await connection.query(sql)
      if (results[0]) {
        quessData.errorCode = 0
        quessData.message = 'getQuess is success'
        quessData.quess = results[0]
        resolve({ ...quessData })
      } else {
        quessData.errorCode = 1
        quessData.message = 'quess is not found'
        resolve({ ...quessData })
      }
    } catch (error) {
      reject(error)
    }
  })
}
