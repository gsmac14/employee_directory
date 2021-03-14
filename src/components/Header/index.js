import React from "react";
import "./style.css";

function Header() {
  return (
    <header className="header">
      <h1 className="hText">Employee Directory</h1>
      <p className="pText">Click on the Name, email, and location for sorting!</p>
    </header>
  );
}

export default Header;