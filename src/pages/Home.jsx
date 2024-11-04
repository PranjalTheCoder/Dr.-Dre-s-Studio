import React from 'react';
import { Link } from 'react-router-dom';
import { Mic2, Music2, Users } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] -mt-16">
      <h1 className="text-6xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
        Welcome to DR. DRE'S STUDIO
      </h1>
      <p className="text-xl text-gray-300 mb-12 text-center max-w-2xl">
        The ultimate platform for aspiring rappers to showcase their talent,
        battle other artists, and climb the ranks in the hip-hop community.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full">
        <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm border border-purple-900/50">
          <Mic2 className="w-12 h-12 text-purple-500 mb-4" />
          <h2 className="text-xl font-bold mb-2">Rap Battles</h2>
          <p className="text-gray-400 mb-4">Challenge other artists and prove your worth in epic rap battles.</p>
          <Link to="/battles" className="text-purple-400 hover:text-purple-300">
            Start Battle →
          </Link>
        </div>

        <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm border border-purple-900/50">
          <Music2 className="w-12 h-12 text-purple-500 mb-4" />
          <h2 className="text-xl font-bold mb-2">Live Cyphers</h2>
          <p className="text-gray-400 mb-4">Join live freestyle sessions and collaborate with other artists.</p>
          <Link to="/live-cypher" className="text-purple-400 hover:text-purple-300">
            Join Cypher →
          </Link>
        </div>

        <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm border border-purple-900/50">
          <Users className="w-12 h-12 text-purple-500 mb-4" />
          <h2 className="text-xl font-bold mb-2">Community</h2>
          <p className="text-gray-400 mb-4">Connect with other artists, form crews, and build your fanbase.</p>
          <Link to="/register" className="text-purple-400 hover:text-purple-300">
            Join Now →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
