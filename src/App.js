import React from 'react';
import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NoMatch from './pages/NoMatch';
import Footer from './components/Footer';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Jumbotron />
        <Route exact path="/" component={Home} />
        <Route exact path="/Projects" component={Projects} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/NoMatch" component={NoMatch} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
