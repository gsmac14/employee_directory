import React from "react";
import Search from "../Search";
import Table from "../Table"

function Card() {
    return (
        <div className="card">
        <div className="card-body">
          <Search />
          <Table />
          This is some text within a card body.
        </div>
      </div>
    )
  }
  
  export default Card;