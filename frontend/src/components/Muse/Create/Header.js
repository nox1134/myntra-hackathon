import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../../Create-muse.css";

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-left">
        <img src="https://placehold.co/40x40" alt="logo" className="logo" />
        <nav>
          <Link
            to="/explore"
            className={`header-link ${
              location.pathname === "/explore" ? "active" : ""
            }`}
          >
            Explore
          </Link>
          <Link
            to="/"
            className={`header-link ${
              location.pathname === "/" ? "active" : ""
            }`}
          >
            Create Muse
          </Link>
        </nav>
      </div>
      <div className="header-right">
        <img
          src="https://placehold.co/40x40"
          alt="user avatar"
          className="avatar"
        />
      </div>
    </header>
  );
};

export default Header;
