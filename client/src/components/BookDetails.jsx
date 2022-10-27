import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetails = (props) => {
  // const [formState, setFormState] = useState({ title: "", body: "", name: ""})
  const [book, setBook] = useState({})
  const [reviews, setReviews] = useState([])
  let {id} = useParams()

  // const handleChange = (event) => {
  //   setFormState({...formState, [event.target.id]: event.target.value})
  // }

  // const handleSubmit = async (event) => {
  //   event.preventDefault()
  //   let newBook = await axios.post('http://localhost:3001/books', formState)
  //     .then((response) => {
  //       return response
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })

  //     updateBooks([...books, newBook.data])
  //     setFormState({ title: "", author: "", description: "", image: ""})
  //     props.toggleNewBookAdded(!props.newBookAdded)
  // }

  useEffect(() => {
    const getBook = async () => {
      let response = await axios.get(`http://localhost:3001/books/${id}`)
      setBook(response.data)
      setReviews(response.data.reviews)
      console.log(book, "useEffect")
    }
    getBook()
  }, [id])
console.log(book)
  return (
    <div className="book-details">
      <div>
        <h1>{book.title}</h1>
        <h4>{book.author}</h4>
        <img src={book.image}/>
        <h3 className="description">Description</h3>
        <h4>{book.description}</h4>
      </div>
      <div className="review">
        <h3 className="reviews-title">Reviews</h3> 
        {reviews ? reviews.map((review) => (
          <div>
            <h4>{review.title}</h4>
            <h4>{review.body}</h4>
            <h5>~{review.name}</h5>
          </div>
        )): "" }
      </div>
      <div>
      {/* <div className='review-form'>
        <h2>Want to add your own review? Create it in the form below!</h2>
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor='title'>Review Title:</label>
            <input id='title' value={formState.title} onChange={handleChange} />
            <label htmlFor='body'>Review:</label>
            <input id='body' value={formState.author} onChange={handleChange}/>
            <label htmlFor='name'>Your Name</label>
            <input id='name' value={formState.description} onChange={handleChange}/>
            <button type='submit'>Add Review!</button>
          </form>
        </div>
      </div> */}
      </div>
    </div>
  )

}

export default BookDetails