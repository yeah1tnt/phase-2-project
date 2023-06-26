import React from 'react';
import { BrowserRouter as Router,Routes, Route,Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';

import HomePage from './Home';
import AboutPage from './About';
import WordsForm from './WordsForm';

function App() {
  
  return (
    <Router>
      <div className="App">
        <nav>            
              <Link to="/">Home </Link>
              <Link to="/About"> About</Link>         
        </nav>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route> 
        <Route path="/About" element={<AboutPage></AboutPage>}></Route>
      </Routes>
      <WordsForm></WordsForm>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Super fat.
          </p>
          <a
            className="App-link"
            href="https://yeah1tnt.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
        </header>
      </div>

    </Router>
  );
}

export default App;
