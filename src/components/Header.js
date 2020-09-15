import React from 'react';
import "../styles/Styles.css";

// header component to explain details of app to users

function Header({ children }) {
  return (
    <div className="jumbotron fluid" 
      // style={{ height: 100, clear: "both", paddingTop: 20, paddingBottom: 100, textAlign: "center", backgroundImage: `url(${'../images/sky-pexels-photo-231008.jpg'})`}} 
    >
      {children}
    </div>
  );
}


export default Header;