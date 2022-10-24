import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [books, updateBooks] = useState([])

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('http://localhost:3001/books')
      updateBooks(response.data.allBooks)
    }
    apiCall()
  }, [])

  return (
    <div className="App">
      <h1>Biased Book Reviews</h1>
      {books.map((book) => (
        <div>
          <h2>{book.title}</h2>
        </div>
      ))}
    </div>
  )
}

export default App
