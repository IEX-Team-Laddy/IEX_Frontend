import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './universal/NavBar';
import Coordinator from './dashboard/Coordinator';
import Teams from './dashboard/Teams';
import ProtectedRoute from './ProtectedRoute';
import Unauthorised from './Unauthorised';
import './App.css';

const user = {
  role: 'coordinator' // This should be fetched dynamically based on logged-in user
};

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Teams />} /> {/* Default route */}
        <Route path="/teams" element={<Teams />} />
        <Route path="/coordinator" element={<ProtectedRoute user={user} element={Coordinator} />} />
        <Route path="/unauthorised" element={<Unauthorised />} />
      </Routes>
    </Router>
  );
}