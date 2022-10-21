const mongoose = require('mongoose')

let MONGODB_URI =
  'mongodb+srv://marmaeju:butterfly1@generalassemblycluster.ivskyjp.mongodb.net/biasedReviewsDatabase'

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
