import React from 'react';
import { Music2, ThumbsUp, MessageCircle } from 'lucide-react';

const Battles = () => {
  // Mockup data - replace with real API calls
  const battles = [
    {
      id: 1,
      title: "East Coast vs West Coast",
      creator: "MC Thunder",
      opponent: "DJ Lightning",
      votes: 156,
      comments: 23,
      status: "active"
    },
    {
      id: 2,
      title: "Freestyle Championship",
      creator: "Lyrical Master",
      opponent: "Flow King",
      votes: 89,
      comments: 15,
      status: "active"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Live Battles</h1>
        <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-md transition-colors">
          Create Battle
        </button>
      </div>

      <div className="space-y-4">
        {battles.map((battle) => (
          <div key={battle.id} className="bg-black/30 p-6 rounded-lg backdrop-blur-sm border border-purple-900/50">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Music2 className="w-6 h-6 text-purple-500" />
                <h2 className="text-xl font-semibold">{battle.title}</h2>
              </div>
              <span className="px-3 py-1 bg-purple-600 rounded-full text-sm">
                {battle.status}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex space-x-8">
                <div>
                  <p className="text-gray-400">Creator</p>
                  <p className="font-medium">{battle.creator}</p>
                </div>
                <div>
                  <p className="text-gray-400">Opponent</p>
                  <p className="font-medium">{battle.opponent}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <ThumbsUp className="w-5 h-5 text-purple-400" />
                  <span>{battle.votes}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MessageCircle className="w-5 h-5 text-purple-400" />
                  <span>{battle.comments}</span>
                </div>
                <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-md transition-colors">
                  Watch Battle
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Battles;
