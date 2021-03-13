import React from "react";

function Search(filterResults) {
  return (
    <div className="input-group flex-nowrap">
      <input
        onChange={filterResults.handleSearch}
        name="search"
        type="text"
        className="form-control"
        placeholder="Search Employee"
        aria-label="Username"
        aria-describedby="addon-wrapping"
      />
    </div>
  );
}

export default Search;