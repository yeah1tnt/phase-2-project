import React, {useState} from 'react';
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';
import './Home';

function App() {
  //Navigation
  const [page,setPage] = useState("List");
  
  return (
    <Router>

      <div className="App">
        <nav>
          <ul>
            
              <Link to="/">Home </Link>
              <Link to="/About"> About</Link>
            
          </ul>
        </nav>
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
            Learn React
          </a>
        </header>
      </div>

    </Router>
  );
}

export default App;
