import React from 'react';
import "../styles/Styles.css";

const Nav = () => {
    return (
        // <nav className="navbar navbar-expand-sm navbar-dark" style={{backgroundColor: '#ff7043'}}>
        <nav className="navbar navbar-expand-sm navbar-dark" style={{backgroundColor: '#546e7a'}}>
        <a className="navbar-brandfont" href=" index.html">Erin Otterstrom</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarsExample03">
          <ul className="navbar-nav mr-auto">
            
              <li className="nav-item">
                <a className="nav-link" href="index.html">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="portfolio.html">Portfolio</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="contact.html">Contact<span className="sr-only">(current)</span></a>
              </li>
          </ul>
        </div>
      </nav>
    )
  }
  
  export default Nav;