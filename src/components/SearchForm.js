import React, { useState } from "react";

const SearchForm = (props, { onSearch }) => {
  const [search, setSearch] = useState({ name: "" });
  const handleInputChange = event => {
    setSearch({ ...search, name: event.target.value });
  };

  return (
    <section>
      <form onSubmit={() => onSearch(search.name)}>
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={search.name}
          name="name"
        />
        <button className="search-button">Search</button>
      </form>
    </section>
  );
};
export default SearchForm;
