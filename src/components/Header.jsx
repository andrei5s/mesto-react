import React from "react";
import Vector from "../images/Vector.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={Vector} alt="Логотип Место" />
    </header>
  );
}

export default Header;
