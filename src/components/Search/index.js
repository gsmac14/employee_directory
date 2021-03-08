import React from "react";

function Search(props) {
  return (
    <div className="input-group flex-nowrap">
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="first"
        type="text"
        className="form-control"
        placeholder="name"
        aria-label="Username"
        aria-describedby="addon-wrapping"
      />
    </div>
  );
}

export default Search;
