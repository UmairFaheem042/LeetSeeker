import React from "react";
import Logo from "../assets/Logo.png";
import { Link, useLocation } from "react-router-dom";
import SearchConntainer from "./SearchConntainer";
import "../css/Header.css"

const Header = () => {
  const location = useLocation();
  return (
    <header>
      <nav className="maxWidth">
        <div className="logo">
          <Link to={"/"}>
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        {location.pathname !== "/" && <SearchConntainer />}
      </nav>
    </header>
  );
};

export default Header;
