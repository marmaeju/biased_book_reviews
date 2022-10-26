import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetails = (props) => {

  const [book, setBook] = useState({})
  let {id} = useParams()

  useEffect(() => {
    const getBook = async () => {
      let response = await axios.get(`http://localhost:3001/books/${id}`)
      setBook(response.data)
    }
    getBook()
  }, [props.books, id])

  return (
    <div>
      <div>
        <h1>{book.title}</h1>
        <h4>Author: {book.author}</h4>
        <img src={book.image}/>
        <h4>Description: {book.description}</h4>

      </div>
      
      
      
    </div>
  )

}

export default BookDetails