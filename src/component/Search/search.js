import { useState } from "react";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <form className="search-field">
      <span role="img" aria-label="search-icon">
        🔍
      </span>
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />
      <input type="submit" value="SEARCH" />
    </form>
  );
};

export default Search;
