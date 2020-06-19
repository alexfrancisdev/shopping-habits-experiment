const express = require('express')
const bodyParser = require('body-parser')
const port = 4000

const app = express()

app.use(express.static(`${__dirname}/public`))
app.use(bodyParser.json())

app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`))

app.listen(port, () => console.log(`Express is listening on port ${port}`))

module.exports = app;