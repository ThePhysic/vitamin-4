// Import React
import React from 'react';
// Import Router-related components
import { Routes, Route } from 'react-router-dom';
// Import the Navbar component
import Navbar from './components/Navbar/Navbar';
// Import the Home and NotHome components
import Home from './pages/Home/Home';
import NotHome from './pages/NotHome/NotHome';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/nothome" element={<NotHome />} />
      </Routes> 

    </div>
  );
}

export default App;
