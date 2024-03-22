import * as quessServices from '../services/quessServices.js'

export let handleGetQuess = async (req, res) => {
  let dataQuess = await quessServices.handleGetQuessServices()
  if (dataQuess && dataQuess.errorCode === 0) {
    res.render('home')
  } else {
    res.render('home')
  }
}
