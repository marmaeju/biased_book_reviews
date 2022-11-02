const mongoose = require('mongoose')
require('dotenv').config()

mongoose
  .connect(
    'mongodb+srv://marmaeju:butterfly1@generalassemblycluster.ivskyjp.mongodb.net/biasedReviewsDatabase'
  )
  .then(() => {
    console.log('Successfully connected to MongoDB')
  })
  .catch((e) => {
    console.error('Connection Error', e.message)
  })

const db = mongoose.connection

module.exports = db
