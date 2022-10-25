import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetails = (props) => {

  const [book, setBook] = useState('')
  let {_id} = useParams()

  useEffect(() => {
    let selectedBook = props.books.find(
      (book) = book._id === parseInt(_id)
    )
    setBook(selectedBook)
  }, [props.books, _id])

  return book ? (
    <div>
      <div>
        <h1>{book.title}</h1>
        <img src={book.image}/>
      </div>
      <div>
        <h3>Description</h3>
        <p>{book.description}</p>
        <h4>Author: ${book.author}</h4>
      </div>
    </div>
  ) : null;

}

export default BookDetails