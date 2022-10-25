import axios from 'axios'
import { useState, useEffect } from 'react'


const Home = () => {
  const [books, updateBooks] = useState([])
  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('http://localhost:3001/books')
      updateBooks(response.data.allBooks)
    }
    apiCall()
  }, [])
  return (
    <div>
      {books.map((book) => (
        <div>
          <h2>{book.title}</h2>
       </div>
      ))}
    </div>
    )
}

export default Home