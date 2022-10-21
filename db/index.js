const mongoose = require('mongoose')
require('dotenv').config()

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB')
  })
  .catch((e) => {
    console.error('Connection Error', e.message)
  })

const db = mongoose.connection

module.exports = db
