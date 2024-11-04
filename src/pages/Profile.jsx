import React from 'react';
import { useParams } from 'react-router-dom';
import { Trophy, Star, Users, Music2 } from 'lucide-react';

const Profile = () => {
  const { id } = useParams();
  
  // Mockup data - replace with real API calls
  const profile = {
    username: "MC Thunder",
    bio: "Battle-tested lyricist from the streets of NYC. Always ready for the next challenge.",
    wins: 23,
    losses: 5,
    rating: 4.8,
    crew: "Rhythm Raiders",
    recentBattles: [
      { id: 1, title: "East Coast vs West Coast", result: "win" },
      { id: 2, title: "Freestyle Championship", result: "win" },
      { id: 3, title: "Underground Showdown", result: "loss" }
    ]
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-black/30 rounded-lg backdrop-blur-sm border border-purple-900/50 p-8 mb-8">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">{profile.username}</h1>
            <p className="text-gray-400 max-w-xl">{profile.bio}</p>
          </div>
          <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-md transition-colors">
            Challenge
          </button>
        </div>

        <div className="grid grid-cols-4 gap-4 mt-8">
          <div className="bg-black/20 p-4 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Trophy className="w-5 h-5 text-purple-500" />
              <span className="text-gray-400">Wins</span>
            </div>
            <p className="text-2xl font-bold">{profile.wins}</p>
          </div>

          <div className="bg-black/20 p-4 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Star className="w-5 h-5 text-purple-500" />
              <span className="text-gray-400">Rating</span>
            </div>
            <p className="text-2xl font-bold">{profile.rating}</p>
          </div>

          <div className="bg-black/20 p-4 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Users className="w-5 h-5 text-purple-500" />
              <span className="text-gray-400">Crew</span>
            </div>
            <p className="text-2xl font-bold">{profile.crew}</p>
          </div>

          <div className="bg-black/20 p-4 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Music2 className="w-5 h-5 text-purple-500" />
              <span className="text-gray-400">Battles</span>
            </div>
            <p className="text-2xl font-bold">{profile.wins + profile.losses}</p>
          </div>
        </div>
      </div>

      <div className="bg-black/30 rounded-lg backdrop-blur-sm border border-purple-900/50 p-8">
        <h2 className="text-xl font-bold mb-4">Recent Battles</h2>
        <div className="space-y-4">
          {profile.recentBattles.map((battle) => (
            <div
              key={battle.id}
              className="flex items-center justify-between p-4 bg-black/20 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <Music2 className="w-5 h-5 text-purple-500" />
                <span>{battle.title}</span>
              </div>
              <span className={`px-3 py-1 rounded-full ${
                battle.result === 'win' ? 'bg-green-600' : 'bg-red-600'
              }`}>
                {battle.result}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
