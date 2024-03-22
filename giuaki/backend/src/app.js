import express from 'express'
import { configViewsEngine } from './config/viewsEngine.js'
import { initWebRoutes } from './routes/router.js'
import 'dotenv/config'
import cookieParser from 'cookie-parser'
const app = express()
const port = process.env.PORT

app.use(function (req, res, next) {
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  )
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()
})

app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))
app.use(cookieParser())

//config app:
configViewsEngine(app)
initWebRoutes(app)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
