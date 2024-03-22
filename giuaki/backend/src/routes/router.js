import express from 'express'
import * as userController from '../controller/userController.js'
import * as quessController from '../controller/quessController.js'

let router = express.Router()

export let initWebRoutes = (app) => {

  router.get('/', userController.getHomePage);

  router.get('/index', function (req, res) {
    res.render('index', {
      data: JSON.stringify({
        errorCode: 0,
        errorMessage: 'nah'
      })
    })
  })

  router.get('/home', quessController.handleGetQuess)

  router.get('/error', function (req, res) {
    res.render('error')
  })

  router.get('/api/get-users', userController.handleGetUsers)
  router.get('/api/get-quess', quessController.handleGetQuess)
  router.post('/api/login', userController.handleLogin)
  router.post('/api/create-user', userController.handleCreateUser)
  router.delete('/api/delete-user', userController.handleDeleteUser)

  return app.use('/', router)
}
