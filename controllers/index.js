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

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await new Book.find({})
    return res.status(200).json({ allBooks })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getBookById = async (req, res) => {
  try {
    const { id } = req.params
    const bookId = await Book.findById(id)
    if (bookId) {
      return res.status(200).json({ bookId })
    }
    return res.status(404).send('Book with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
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
  createReview,
  getAllBooks
}
