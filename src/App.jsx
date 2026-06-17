import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookList from "./pages/BookList";
import AddBook from "./pages/AddBook";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/add-book" element={<AddBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
