import { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const onSearch = (searchQuery) => {
    setQuery(searchQuery);
    setCurrentPage(1);
  };

  return (
    <>
      <SearchBar onSearch={onSearch} />
      <ImageGallery query={query} currentPage={currentPage} />
    </>
  );
}

export default App;
