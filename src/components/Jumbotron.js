import React from "react";
import "../styles/Styles.css";

function Jumbotron({ children }) {
  return (
    <div className="jumbotron fluid" 
      // style={{ height: 100, clear: "both", paddingTop: 20, paddingBottom: 100, textAlign: "center", backgroundImage: `url(${'../images/sky-pexels-photo-231008.jpg'})`}} 
    >
      {children}
    </div>
  );
}

export default Jumbotron;

// style={{background: `url(${'../static/sky-pexels-photo-231008.jpg'})`}}
