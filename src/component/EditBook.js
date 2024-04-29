import React, { useContext } from 'react';
import BookForm from '../component/BookForm';
import { useParams } from 'react-router-dom';
import BookContext from '../context/BookContext';
import { useNavigate } from 'react-router-dom';

const EditBook = () => {
  const { books, setBooks } = useContext(BookContext);
  const { id } = useParams();
  const bookToEdit = books.find((book) => book.id === id);
  const navigate = useNavigate();
  
  const handleOnSubmit = (book) => {
    const filteredBooks = books.filter((book) => book.id !== id);
    setBooks([book, ...filteredBooks]);
    navigate('/');
  };

  return (
    <div>
      <BookForm book={bookToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditBook;