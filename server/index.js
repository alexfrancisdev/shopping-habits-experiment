const express = require('express')
const bodyParser = require('body-parser')
const router = require('./router')
const cors = require('cors')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use('/', router)

app.listen(process.env.PORT || 3002, () => console.log(`Server is listening`))

module.exports = app;