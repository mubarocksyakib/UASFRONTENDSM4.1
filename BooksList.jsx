// src/BookList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/books')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the books!', error);
      });
  }, []);

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map(book => (
          <li key={book._id}>
            <h2>{book.nama}</h2>
            <p>{book.deskripsi}</p>
            <p>{book.harga}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
