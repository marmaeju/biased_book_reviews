const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => {
  res.send('This is root!')
})

router.post('/books', controllers.createBook)

router.get('/books', controllers.getAllBooks)

router.post('/reviews', controllers.createReview)

module.exports = router
