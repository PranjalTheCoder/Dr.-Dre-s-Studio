import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Battles from './pages/Battles';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import LiveCypher from './pages/LiveCypher';
import { useAuthStore } from './store/authStore';

const App = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/battles" element={<Battles />} />
            <Route path="/live-cypher" element={<LiveCypher />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        <Toaster position="top-right" />
      </div>
    </Router>
  );
};

export default App;
