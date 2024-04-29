import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route 
  } from "react-router-dom";
import Header from '../component/Header';
import AddBook from '../component/AddBook';
import BooksList from '../component/BooksList';
import useLocalStorage from '../hooks/useLocalStorage';
import EditBook from '../component/EditBook';
import BooksContext from '../context/BookContext';

const AppRouter = () => {
    const [books, setBooks] = useLocalStorage('books', []);
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
        <BooksContext.Provider value={{ books, setBooks }}>
          <Routes>
            <Route element={<BooksList/>} path="/" exact={true} />
            <Route element={<AddBook/>} path="/add" />
            <Route element={<EditBook/>} path="/edit/:id" />
          </Routes>
          </BooksContext.Provider>  
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;