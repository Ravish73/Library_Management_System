import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";

function EditBook() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    year: "",
    price: "",
  });

  useEffect(() => {
    loadBook();
  }, []);

  const loadBook = async () => {
    const response = await api.get(`/${id}`);
    setBook(response.data);
  };

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const updateBook = async (e) => {
    e.preventDefault();

    await api.put(`/${id}`, book);

    alert("Book updated successfully ✅");

    navigate("/");
  };

  return (
    <div className="edit-container">
      <h2>Edit Book</h2>
      <form className="edit-form" onSubmit={updateBook}>
        <input
          type="text"
          name="title"
          value={book.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="author"
          value={book.author}
          onChange={handleChange}
        />
        <input
          type="text"
          name="genre"
          value={book.genre}
          onChange={handleChange}
        />
        <input
          type="text"
          name="year"
          value={book.year}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          value={book.price}
          onChange={handleChange}
        />
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
}

export default EditBook;
