import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { Mic2, Music2, Users, User } from 'lucide-react';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuthStore();
//link tag used
  return (
    <nav className="bg-black/50 backdrop-blur-sm border-b border-purple-900">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Mic2 className="w-8 h-8 text-purple-500" />
            <span className="text-xl font-bold">DR. DRE'S STUDIO</span>
          </Link>

          <div className="flex items-center space-x-6">
            <Link to="/battles" className="flex items-center space-x-1 hover:text-purple-400">
              <Music2 className="w-5 h-5" />
              <span>Battles</span>
            </Link>
            <Link to="/live-cypher" className="flex items-center space-x-1 hover:text-purple-400">
              <Users className="w-5 h-5" />
              <span>Live Cypher</span>
            </Link>
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link to={`/profile/${user?.id}`} className="flex items-center space-x-1 hover:text-purple-400">
                  <User className="w-5 h-5" />
                  <span>{user?.username}</span>
                </Link>
                <button
                  onClick={logout}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="px-4 py-2 hover:text-purple-400 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-md transition-colors"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
