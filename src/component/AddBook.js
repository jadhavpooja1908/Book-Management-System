import React, { useContext } from 'react';
import BookForm from '../component/BookForm';
import BooksContext from '../context/BookContext';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const { books, setBooks } = useContext(BooksContext);
  const navigate = useNavigate();

  const handleOnSubmit = (book) => {
    setBooks([book, ...books]);
    navigate('/');
  };

  return (
    <React.Fragment>
      <BookForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddBook;

