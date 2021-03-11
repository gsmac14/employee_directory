import React from "react";

function Search(props) {
  return (
    <div className="input-group flex-nowrap">
      <input
        onChange={props.handleInputChange}
        name="search"
        type="text"
        className="form-control"
        placeholder="Search Employee"
        aria-label="Username"
        aria-describedby="addon-wrapping"
      />
      <button onClick={props.hanleFormSubmit} className="btn btn-primary">
        Search
      </button>
    </div>
  );
}

export default Search;
