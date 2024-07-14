import React from "react";
import { Link, useLocation } from "react-router-dom";
import './Explore.css'

const Header = () => {
  const location = useLocation();

    return (
      <header className="header">
        <div className="header-left">
          <img
            src="https://logosandtypes.com/wp-content/uploads/2021/01/Myntra.png"
            alt="logo"
            className="logo"
          />
          <nav>
            <Link
              to="/explore"
              className={`header-link ${
                window.location.pathname === "/explore" ? "active" : ""
              }`}
            >
              Explore
            </Link>
            <Link
              to="/create-muse"
              className={`header-link ${
                window.location.pathname === "/create-muse" ? "active" : ""
              }`}
              onClick={(e) => {
                if (window.location.pathname === "/create-muse") {
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
            src="https://t3.ftcdn.net/jpg/06/33/54/78/360_F_633547842_AugYzexTpMJ9z1YcpTKUBoqBF0CUCk10.jpg"
            alt="user avatar"
            className="avatar"
          />
        </div>
      </header>
    );
  };

  export default Header;