const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => {
  res.send('This is root!')
})

router.post('/books', controllers.createBook)

router.get('/books', controllers.getAllBooks)

router.get('/books/:id', controllers.getBookById)

router.post('/reviews', controllers.createReview)

router.get('/reviews', controllers.getAllReviews)

router.get('/reviews/:id', controllers.getReviewById)

module.exports = router
