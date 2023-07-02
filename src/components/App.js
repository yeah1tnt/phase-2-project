import React from 'react';
import { BrowserRouter as Router,Routes, Route,Link } from 'react-router-dom';
import '../App.css';

import HomePage from './Home';
import AboutPage from './About';
import GamePage from './Game';
import ListPage from './List';

function App() {
  
  return (
    <Router>
      <div className="App">
        <nav>            
              <Link to="/"> Home </Link>
              <Link to="/Game"> Game </Link>
              <Link to="/List"> List </Link>
              <Link to="/About"> About </Link>         
        </nav>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/Game" element={<GamePage></GamePage>}></Route>
        <Route path="/About" element={<AboutPage></AboutPage>}></Route>
        <Route path="/List" element={<ListPage></ListPage>}></Route>
      </Routes>


        <header className="App-header">
          
          
        </header>
      </div>

    </Router>
  );
}

export default App;
