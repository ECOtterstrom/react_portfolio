import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NoMatch from './components/NoMatch';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Router>
    <div>
      <Nav />
      <Jumbotron />
      <Switch>
      <Route exact path="/react_portfolio" component={Home} />
      <Route exact path="/Projects" component={Projects} />
      <Route exact path="/Contact" component={Contact} />
      <Route exact path="/NoMatch" component={NoMatch} />
      </Switch>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
