import * as userServices from '../services/userServices.js'
import cookie from 'cookie'

export let handleLogin = async (req, res) => {
  let { email, password } = req.body
  let dataUser = await userServices.handleUserLoginServices(email, password)
  if (dataUser && dataUser.errorCode === 0) {
    res.cookie('user', dataUser.user)
    return res.redirect('/home')
  } else {
    res.render('index', {
      data: JSON.stringify(dataUser)
    })
  }
}

export let handleCreateUser = async (req, res) => {
  try {
    let dataUser = await userServices.createUser(req.body)

    if (dataUser && dataUser.errorCode === 0) {
      res.cookie('user', dataUser.user)
      return res.redirect('/home')
    } else {
      res.render('index', {
        data: JSON.stringify(dataUser)
      })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ errorCode: 1, message: 'create fail, pls again' })
  }
}

export let handleGetUsers = async (req, res) => {
  let userId = req.query.id // all or id
  if (!userId) {
    return res.status(400).json({
      errorCode: 1,
      message: 'missing required parameter',
      users: []
    })
  }
  let users = await userServices.getUserById(userId)
  return res.status(200).json({
    errorCode: 0,
    message: 'get users done',
    users
  })
}

export let handleDeleteUser = async (req, res) => {
  try {
    let message = await userServices.deleteUser(req.body.id)
    return res.status(200).json(message)
  } catch (error) {
    return res.status(500).json(message)
  }
}
