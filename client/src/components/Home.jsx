import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = (props) => {
  const [books, updateBooks] = useState([])
  const [formState, setFormState] = useState({ title: "", author: "", description: "", image: ""})

  let navigate = useNavigate()

  const showBook = (book) => {
    navigate(`books/${book._id}`)
  }

  const handleChange = (event) => {
    setFormState({...formState, [event.target.id]: event.target.value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let newBook = await axios.post('http://localhost:3001/books', formState)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })

      updateBooks([...books, newBook.data])
      setFormState({ title: "", author: "", description: "", image: ""})
      props.toggleNewBookAdded(!props.newBookAdded)
  }

  return (
    <div>
      <div className='books-title'>
        <h1> Books </h1>
      </div>
      <div className='book-grid'>
        {props.books.map((book) => (
          <div className="book-card" onClick={() => showBook(book)} key={book._id}>
            <h3>{book.title}</h3>
            <img src={book.image}/>
          </div>
        ))}
      </div>
      <div className='book-form'>
        <h2>Don't see the book you want? Create it in the form below!</h2>
        <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor='title'>Title:</label>
          <input id='title' value={formState.title} onChange={handleChange} />
          <label htmlFor='author'>Author:</label>
          <input id='author' value={formState.author} onChange={handleChange}/>
          <label htmlFor='description'>Description:</label>
          <input id='description' value={formState.description} onChange={handleChange}/>
          <label htmlFor='image'>Image URL:</label>
          <input id='image' value={formState.image} onChange={handleChange}/>
          <button type='submit'>Add Book!</button>
        </form>
        </div>
      </div>

    </div>
    )
}

export default Home