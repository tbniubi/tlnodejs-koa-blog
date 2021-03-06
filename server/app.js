const Koa = require('koa')
const parser = require('koa-bodyparser')
const cors = require('@koa/cors');

const InitManager = require('./core/init')
const catchError = require('./middlewares/exception')

const app = new Koa()

app.use(cors())
app.use(catchError)
app.use(parser())

InitManager.initCore(app)

app.listen(3000)