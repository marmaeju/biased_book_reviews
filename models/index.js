const mongoose = require('mongoose')
const reviewSchema = require('./book')
const bookSchema = require('./book')

const Review = mongoose.model('Review', reviewSchema)
const Book = mongoose.model('Book', bookSchema)

module.exports = {
  Book,
  Review
}
