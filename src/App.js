import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import TopEmployerGame from './TopEmployerGame';
import WinPage from './WinPage';
import FullScreenVideo from './FullScreenVideo';
import FullScreenImage from './FullScreenImage';

function App() {
  return (
    <Router>
      <div className="App full-screen">
        <div className="App-layout">
          <div>
            <Routes>
              <Route path="/top-employer-game" element={<TopEmployerGame />} />
              <Route path="/win-page" element={<WinPage />} />
              <Route path="/" element={<Home />} />
              <Route path="/full-screen-video" element={<FullScreenVideo />} />
              <Route path="/full-screen-image" element={<FullScreenImage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;