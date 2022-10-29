import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const BookDetails = () => {
  const [formState, setFormState] = useState({ title: "", titulo: "", author: "", description: "", body: "", name: "", image: ""})
  const [book, setBook] = useState({})
  const [reviews, setReviews] = useState([])

  let {id} = useParams()
  let navigate = useNavigate()


  const handleChange = (event) => {
    setFormState({...formState, [event.target.id]: event.target.value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let response = await axios.post(`http://localhost:3001/reviews/${id}`, formState)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })
      console.log(response)
      setReviews([...reviews, response.data.newReview])
      setFormState({ title: "", body: "", name: ""})
  }

  const handleUpdate = async (event) => {
    // event.preventDefault()
    let response = await axios.put(`http://localhost:3001/books/${id}`, formState)
      .then ((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })
    console.log(response.data)
    setBook([book, response.data])
    setFormState({title: "", author: "", description: "", image: ""})
  }

  useEffect(() => {
    const getBook = async () => {
      let response = await axios.get(`http://localhost:3001/books/${id}`)
      setBook(response.data)
      setReviews(response.data.reviews)
    }
    getBook()
  }, [])

  const deleteBook = async (event) => {
    event.preventDefault()
    let response = await axios.delete(`http://localhost:3001/books/${id}`, formState)
    setBook(response)
    navigate(`/`)
  }


  return (
    <div className="book-details">
      <div>
        <h1>{book.title}</h1>
        <h4>{book.author}</h4>
        <img src={book.image}/>
        <h2 className="description">Description</h2>
        <h4>{book.description}</h4>
      </div>
      <div className="review">
        <h2 className="reviews-title">Reviews</h2> 
        {reviews ? reviews.map((review) => (
          <div key={review._id}>
            <h3>{review.title}</h3>
            <h4>{review.body}</h4>
            <h5>~{review.name}</h5>
          </div>
        )): "" }
      </div>
      <div>
      <div className='review-form'>
        <h3>Want to add your own review? Create it in the form below!</h3>
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor='titulo'>Review Title:</label>
            <input id='titulo' value={formState.titulo} onChange={handleChange} />
            <label htmlFor='body'>Review:</label>
            <input id='body' value={formState.body} onChange={handleChange}/>
            <label htmlFor='name'>Your Name</label>
            <input id='name' value={formState.name} onChange={handleChange}/>
            <button type='submit'>Add Review!</button>
          </form>
        </div>
        <h3>Want to Update the Book? Do it Below!</h3>
        <div>
        <form onSubmit={handleUpdate}>
          <label htmlFor='title'>Title:</label>
          <input id='title' value={formState.title} onChange={handleChange} />
          <label htmlFor='author'>Author:</label>
          <input id='author' value={formState.author} onChange={handleChange}/>
          <label htmlFor='description'>Description:</label>
          <input id='description' value={formState.description} onChange={handleChange}/>
          <label htmlFor='image'>Image URL:</label>
          <input id='image' value={formState.image} onChange={handleChange}/>
          <button type='submit'>Update Book!</button>
        </form>
        </div>
        <div>
          <h3>Hate this book with a fiery passion and want to get rid of it? Delete it below!</h3>
          <button className="deleteButton" onClick={deleteBook}>Delete this Book!</button>
        </div>
      </div>
      </div>
    </div>
  )

}

export default BookDetails