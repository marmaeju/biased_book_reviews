import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = (props) => {

  let navigate = useNavigate()

  const showBook = (book) => {
    navigate(`${book._id}`)
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
        <input id='title'/>
        <label htmlFor='author'>Author:</label>
        <input id='author'/>
        <label htmlFor='description'>Description:</label>
        <input id='description'/>
        <label htmlFor='image'>Image URL:</label>
        <input id='image'/>
        <button type='submit'>Add Book!</button>
      </form>

    </div>
    )
}

export default Home