import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import About from './components/About'
import BookDetails from './components/BookDetails'

function App() {
  const [books, updateBooks] = useState([])
  const [newBookAdded, toggleNewBookAdded] = useState(false)

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('http://localhost:3001/books')
      updateBooks(response.data.allBooks)
    }
    apiCall()
  }, [newBookAdded])

  return (
    <div className="App">
      <header className="nav">
        <Nav />
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                books={books}
                toggleNewBookAdded={toggleNewBookAdded}
                newBookAdded={newBookAdded}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/books/:id" element={<BookDetails books={books} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
