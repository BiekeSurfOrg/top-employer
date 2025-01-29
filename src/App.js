import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import TopEmployerGame from './TopEmployerGame';

function App() {
  return (
    <Router>
      <div className="App full-screen">
        <div className="App-layout">
          <div>
            <Routes>
              <Route path="/top-employer-game" element={<TopEmployerGame />} />
              <Route path="/" element={<Home />} />
              <Route path="/result" />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;