import React, { useState } from "react";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.searchBarInput}
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
        <button className={css.searchBarBtn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
