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
            to="/create-muse"
            className={`header-link ${
              location.pathname === "/create-muse" ? "active" : ""
            }`}
            onClick={(e) => {
              if (location.pathname === "/create-muse") {
                e.preventDefault(); // Prevent reloading if already on the page
              }
            }}
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
