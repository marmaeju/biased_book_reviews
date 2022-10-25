import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = (props) => {
  const [formState, setFormState] = useState({ title: "", author: "", description: "", image: ""})

  let navigate = useNavigate()

  const showBook = (book) => {
    navigate(`${book._id}`)
  }

  const handleChange = (event) => {
    setFormState({...formState, [event.target.id]: event.target.value})
  }

  return (
    <div>
      {props.books.map((book) => (
        <div onClick={() => showBook(book)} key={book._id}>
          <h3>{book.title}</h3>
          <img src={book.image}/>
       </div>
      ))}

      <h3>Don't see the book you want? Create it in the form below!</h3>
      <form>
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
    )
}

export default Home