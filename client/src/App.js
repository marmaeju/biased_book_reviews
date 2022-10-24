import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import About from './components/About'

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
      <header>
        <Nav />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {books.map((book) => (
        <div>
          <h2>{book.title}</h2>
        </div>
      ))}
    </div>
  )
}

export default App
