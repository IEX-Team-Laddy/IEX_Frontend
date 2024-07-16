import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './universal/NavBar'; // Ensure the path is correct
import Coordinator from './dashboard/Coordinator'; // Ensure the path is correct
import Teams from './dashboard/Teams'; // Ensure the path is correct
import './App.css';

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Teams />} /> {/* Default route */}
        <Route path="/teams" element={<Teams />} />
        <Route path="/coordinator" element={<Coordinator />} />
      </Routes>
    </Router>
  );
}
