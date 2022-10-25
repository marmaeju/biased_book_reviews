import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [books, updateBooks] = useState([])
  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('http://localhost:3001/books')
      updateBooks(response.data.allBooks)
    }
    apiCall()
  }, [])

  let navigate = useNavigate()

  const showBook = (book) => {
    navigate(`${book.id}`)
  }
  return (
    <div>
      {books.map((book) => (
        <div onClick={() => showBook(book)} key={book.id}>
          <h3>{book.title}</h3>
          <img src={book.image}/>
       </div>
      ))}
    </div>
    )
}

export default Home