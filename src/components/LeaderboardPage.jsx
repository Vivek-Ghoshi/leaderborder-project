// src/components/LeaderboardPage.jsx
import { useEffect, useState } from 'react';
import { leaderboardData } from '../users';

const LeaderboardPage = () => {
    const [users, setUsers] = useState([]);
    const [timeFilter, setTimeFilter] = useState('daily');
   
    
  
    useEffect(() => {
        fetch('http://localhost:7000/api/user/v1/get-users')
            .then(res => res.json())
            .then(data => setUsers(data.users.sort((a, b) => b.points - a.points)));
    }, []);

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8">Leaderboard</h1>
                
                {/* Time filter buttons */}
                <div className="flex justify-center gap-4 mb-8">
                    <button 
                        className={`px-6 py-2 rounded-full transition-all ${
                            timeFilter === 'daily' 
                            ? 'bg-purple-600 text-white' 
                            : 'bg-gray-700 hover:bg-gray-600'
                        }`}
                        onClick={() => setTimeFilter('daily')}
                    >
                        Daily
                    </button>
                    <button 
                        className={`px-6 py-2 rounded-full transition-all ${
                            timeFilter === 'weekly' 
                            ? 'bg-purple-600 text-white' 
                            : 'bg-gray-700 hover:bg-gray-600'
                        }`}
                    >
                        Weekly
                    </button>
                    <button 
                        className={`px-6 py-2 rounded-full transition-all ${
                            timeFilter === 'monthly' 
                            ? 'bg-purple-600 text-white' 
                            : 'bg-gray-700 hover:bg-gray-600'
                        }`}
                        onClick={() => setTimeFilter('monthly')}
                    >
                        Monthly
                    </button>
                </div>

                {/* Leaderboard header */}
                <div className="bg-gray-800 rounded-t-lg p-4 grid grid-cols-12 gap-4 font-semibold">
                    <div className="col-span-1">Rank</div>
                    <div className="col-span-5">Player</div>
                    <div className="col-span-3 text-right">Prize</div>
                    <div className="col-span-3 text-right">Points</div>
                </div>

                {/* Leaderboard list */}
                <div className="divide-y divide-gray-700">
                    {leaderboardData.map((user) => (
                        <div 
                            key={user.id} 
                            className="grid grid-cols-12 gap-4 p-4 bg-gray-800/50 hover:bg-gray-800 transition-colors items-center"
                        >
                            <div className="col-span-1 font-bold text-lg">
                                #{user.rank}
                            </div>
                            <div className="col-span-5 flex items-center gap-3">
                                <img 
                                    src={user.avatar} 
                                    alt="" 
                                    className="w-10 h-10 rounded-full border-2 border-purple-500"
                                />
                                <span className="username">{user.username}</span>
                            </div>
                            <div className="col-span-3 text-right">{user.prize}</div>
                            <div className="col-span-3 text-right">{user.points} pts</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LeaderboardPage;







