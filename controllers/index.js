const Book = require('../models/book')
const Review = require('../models/review')

const createBook = async (req, res) => {
  try {
    const newBook = await new Book(req.body)
    await newBook.save()
    return res.status(201).json({
      newBook
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const createReview = async (req, res) => {
  try {
    const newReview = await new Review(req.body)
    await newReview.save()
    return res.status(201).json({
      newReview
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createBook,
  createReview
}
