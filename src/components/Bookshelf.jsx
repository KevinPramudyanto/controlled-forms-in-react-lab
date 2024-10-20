import React, { useState } from "react";

const Bookshelf = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: "", author: "" });

  const handleInputChange = (event) => {
    setNewBook((prevNewBook) => {
      return { ...prevNewBook, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks((prevBooks) => [...prevBooks, newBook]);
    setNewBook({ title: "", author: "" });
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            name="title"
            value={newBook.title}
            onChange={handleInputChange}
          />
          <label htmlFor="author">Author: </label>
          <input
            type="text"
            id="author"
            name="author"
            value={newBook.author}
            onChange={handleInputChange}
          />
          <button type="submit">Add Book</button>
        </form>
      </div>
      <div className="bookCardsDiv">
        {books.map((book, idx) => (
          <div key={idx} className="bookCard">
            <h6>{book.title}</h6>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
