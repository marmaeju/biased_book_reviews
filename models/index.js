const mongoose = require('mongoose')
const reviewSchema = require('./book')
const bookSchema = require('./book')

const Book = mongoose.model('Book', bookSchema)
const Review = mongooes.model('Review', reviewSchema)

module.exports = {
  Book,
  Review
}
