import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function AddBook() {
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    year: "",
    price: "",
  });

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const saveBook = async (e) => {
    e.preventDefault();

    try {
      await api.post("", book);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container">
      <h2>Add New Book</h2>

      <form onSubmit={saveBook}>
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="author"
          placeholder="Author Name"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="genre"
          placeholder="Genre/Catagory"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="year"
          placeholder="Year (e.g. 2018)"
          pattern="[0-9]{4}"
          maxLength="4"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          onChange={handleChange}
          required
        />

        <button type="submit">Save Book</button>
      </form>
    </div>
  );
}

export default AddBook;
