import { useEffect, useState } from "react";
import api from "../services/api";

function BookList() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    try {
      const response = await api.get("");
      setBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBook = async (id) => {
    try {
      await api.delete(`/${id}`);

      setBooks(books.filter((book) => book.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title?.toLowerCase().includes(search.toLowerCase()) ||
      book.author?.toLowerCase().includes(search.toLowerCase()) ||
      book.genre?.toLowerCase().includes(search.toLowerCase()) ||
      book.year?.toString().includes(search),
  );

  return (
    <div className="container">
      <h1>Book Management System</h1>

      <input
        type="text"
        placeholder="Search by Title, Author, Genre, or Year..."
        className="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="book-grid">
        {filteredBooks.map((book) => (
          <div key={book.id} className="card">
            <h3>{book.title}</h3>

            <p>
              <strong>Author:</strong> {book.author}
            </p>

            <p>
              <strong>Genre:</strong> {book.genre}
            </p>

            <p>
              <strong>Year:</strong> {book.year}
            </p>

            <p>
              <strong>Price:</strong> ₹{book.price}
            </p>

            <div className="btn-group">
              <button className="edit-btn" onClick={() => updateBook(book.id)}>
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() => deleteBook(book.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookList;
