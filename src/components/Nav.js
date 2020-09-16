import React from 'react';
import { Link, useLocation } from "react-router-dom";
import "../styles/Styles.css";


function Nav() {
  const location = useLocation();
  return (

    <nav className="navbar navbar-expand-sm navbar-dark" style={{ backgroundColor: '#546e7a' }}>
      <div className="collapse navbar-collapse" id="navbarsExample03">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className={location.pathname === "/react_portfolio" ? "nav-link active" : "nav-link"}>
              <h5><b>Erin C. Otterstrom</b></h5>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/" className={location.pathname === "/home" ? "nav-link active" : "nav-link"}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}>
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav;