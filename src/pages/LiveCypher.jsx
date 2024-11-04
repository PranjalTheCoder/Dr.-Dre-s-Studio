import React, { useState } from 'react';
import { Mic2, Users, MessageCircle } from 'lucide-react';

const LiveCypher = () => {
  const [messages, setMessages] = useState([
    { id: 1, user: "MC Thunder", message: "Let's get this cypher started! 🎤" },
    { id: 2, user: "Flow King", message: "I'm ready to drop some bars! 🔥" }
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        user: "You",
        message: newMessage
      }]);
      setNewMessage("");
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-black/30 rounded-lg backdrop-blur-sm border border-purple-900/50 p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Mic2 className="w-8 h-8 text-purple-500" />
            <h1 className="text-2xl font-bold">Live Cypher Room</h1>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-purple-400" />
            <span>12 Artists Online</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-black/20 p-4 rounded-lg text-center">
            <p className="text-purple-400 mb-2">Current Artist</p>
            <p className="font-bold">MC Thunder</p>
          </div>
          <div className="bg-black/20 p-4 rounded-lg text-center">
            <p className="text-purple-400 mb-2">Time Remaining</p>
            <p className="font-bold">0:45</p>
          </div>
          <div className="bg-black/20 p-4 rounded-lg text-center">
            <p className="text-purple-400 mb-2">Next Up</p>
            <p className="font-bold">Flow King</p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none"></div>
          <div className="h-96 overflow-y-auto space-y-4 mb-4 p-4">
            {messages.map((msg) => (
              <div key={msg.id} className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
                  {msg.user[0]}
                </div>
                <div>
                  <p className="text-purple-400 text-sm">{msg.user}</p>
                  <p className="bg-black/20 p-2 rounded-lg mt-1">{msg.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSendMessage} className="flex space-x-4">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Drop your bars..."
            className="flex-1 px-4 py-2 bg-black/50 border border-purple-900/50 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-md transition-colors flex items-center space-x-2"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Send</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default LiveCypher;
