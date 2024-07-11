import React from "react";
import { Link } from "react-router-dom"; // Assuming you use React Router for navigation
import "../../../Create-muse.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src="https://placehold.co/40x40" alt="logo" className="logo" />
        <nav>
          <Link to="/explore" className="header-link">
            Explore
          </Link>
          <Link to="/" className="header-link active">
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
