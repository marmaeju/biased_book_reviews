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
      <div className="book-details">
        <h1>{book.title}</h1>
        <h4>{book.author}</h4>
        <img src={book.image}/>
        <h3 className="description">Description</h3>
        <h4>{book.description}</h4>
        <h3 className="reviews">Reviews</h3>

      </div>
    </div>
  )

}

export default BookDetails