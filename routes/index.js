const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.post('/books', controllers.createBook)
router.get('/books', controllers.getAllBooks)
router.get('/books/:id', controllers.getBookById)
router.put('/books/:id', controllers.updateBook)
router.delete('/books/:id', controllers.deleteBook)

router.post('/api/reviews', controllers.createReview)
router.get('/reviews', controllers.getAllReviews)
router.get('/reviews/:id', controllers.getReviewById)
router.put('/reviews/:id', controllers.updateReview)
router.delete('/reviews/:id', controllers.deleteReview)

module.exports = router
