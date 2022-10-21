const express = require('express')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Book, Review } = require('./models')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send({ msg: 'This route is being hit!' })
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
