import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('http://localhost:3001/books')
      return response
    }
    console.log(apiCall())
  }, [])

  return (
    <div className="App">
      <h1>Biased Book Reviews</h1>
    </div>
  )
}

export default App
