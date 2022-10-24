const { Book, Review } = require('../models')

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
    const allBooks = await Book.find({})
    return res.status(200).json({ allBooks })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getBookById = async (req, res) => {
  console.log(req.params)
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

const updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(updatedBook)
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

const getAllReviews = async (req, res) => {
  try {
    const allReviews = await Review.find()
    return res.status(200).json({ allReviews })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getReviewById = async (req, res) => {
  try {
    const { id } = req.params
    const review = await Review.findById(id)
    if (plant) {
      return res.status(200).json({ review })
    }
    return res.status(404).send('Review with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateReview = async (req, res) => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.status(200).json(updatedReview)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  createReview,
  getAllReviews,
  getReviewById,
  updateReview
}
