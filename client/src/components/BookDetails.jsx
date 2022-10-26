import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetails = (props) => {

  const [book, setBook] = useState('')
  let {id} = useParams()

  useEffect(() => {
    const bookID = async () => {
      let selectedBook = await axios.get(`http://localhost:3001/books/${id}`)
      setBook(selectedBook.data.bookId)
    }
    bookID()
  }, [props.books, id])

  return book ? (
    <div>
      <div>
        <h1>{book.title}</h1>
        <img src={book.image}/>
      </div>
      <div>
        <h3>Description</h3>
        <p>{book.description}</p>
        <h4>Author: {book.author}</h4>
      </div>
      <div>
        <h3>Reviews: {book.reviews}</h3>
      </div>
      <div>
        <h4>Want to add your own review? Fill out the form below!</h4>
      </div>
    </div>
  ) : null;

}

export default BookDetails