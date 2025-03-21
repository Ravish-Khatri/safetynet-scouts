
import React, { useState, useEffect } from 'react';
import { Trophy, Award, Star, Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import PageTransition from '../components/PageTransition';

// Mock data for demonstration
const mockLeaderboard = [
  { id: 1, name: 'Rahul S.', points: 325, reports: 42, rank: 1 },
  { id: 2, name: 'Priya M.', points: 287, reports: 36, rank: 2 },
  { id: 3, name: 'Vikram K.', points: 264, reports: 31, rank: 3 },
  { id: 4, name: 'Ananya P.', points: 231, reports: 28, rank: 4 },
  { id: 5, name: 'Amit G.', points: 212, reports: 26, rank: 5 },
  { id: 6, name: 'Divya R.', points: 198, reports: 23, rank: 6 },
  { id: 7, name: 'Karthik J.', points: 186, reports: 22, rank: 7 },
  { id: 8, name: 'Sneha L.', points: 175, reports: 20, rank: 8 },
  { id: 9, name: 'Varun T.', points: 162, reports: 19, rank: 9 },
  { id: 10, name: 'Kavita S.', points: 154, reports: 18, rank: 10 },
];

const LeaderboardCard = ({ user, index }: { user: typeof mockLeaderboard[0], index: number }) => {
  let bgColor = 'bg-white';
  let rankIcon = null;
  
  if (index === 0) {
    bgColor = 'bg-gradient-to-r from-yellow-50 to-white border-yellow-200';
    rankIcon = <Trophy size={18} className="text-yellow-500" />;
  } else if (index === 1) {
    bgColor = 'bg-gradient-to-r from-gray-50 to-white border-gray-200';
    rankIcon = <Trophy size={18} className="text-gray-400" />;
  } else if (index === 2) {
    bgColor = 'bg-gradient-to-r from-amber-50 to-white border-amber-200';
    rankIcon = <Trophy size={18} className="text-amber-600" />;
  }
  
  return (
    <div className={`${bgColor} border rounded-xl p-4 mb-3 flex items-center animate-fadeInUp`} style={{ animationDelay: `${index * 50}ms` }}>
      <div className="w-8 flex justify-center mr-3">
        {rankIcon || <span className="font-semibold text-gray-500">{user.rank}</span>}
      </div>
      
      <div className="flex-1">
        <h3 className="font-medium">{user.name}</h3>
        <div className="flex text-xs text-gray-600">
          <span className="mr-3">{user.points} points</span>
          <span>{user.reports} reports</span>
        </div>
      </div>
      
      <div className="flex flex-col items-center justify-center">
        <div className="text-xl font-bold text-hero">{user.points}</div>
        <div className="text-xs text-gray-600">points</div>
      </div>
    </div>
  );
};

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState(mockLeaderboard);
  const [timeFrame, setTimeFrame] = useState('week');
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading delay
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [timeFrame]);
  
  return (
    <PageTransition>
      <div className="min-h-screen bg-heroLighter pb-20">
        {/* Header */}
        <div className="bg-white px-4 py-5 border-b border-gray-100 sticky top-0 z-10">
          <div className="flex justify-between items-center max-w-md mx-auto">
            <h1 className="text-xl font-bold text-gray-900">Leaderboard</h1>
          </div>
        </div>
        
        {/* Your Rank Card */}
        <div className="px-4 py-4 max-w-md mx-auto">
          <div className="glass-card p-4 mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Your Rank</h3>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-heroLight rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl font-bold text-hero">23</span>
              </div>
              
              <div className="flex-1">
                <h4 className="font-semibold">Top 15%</h4>
                <p className="text-sm text-gray-600">135 points • 19 reports</p>
                <div className="mt-1">
                  <span className="inline-flex items-center bg-heroLight px-2 py-0.5 rounded text-xs font-medium text-hero">
                    <Star size={12} className="mr-1" />
                    Consistent Reporter
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Time Frame Tabs */}
          <div className="flex border-b border-gray-200 mb-4">
            <button
              className={`flex-1 py-2 text-center ${timeFrame === 'week' ? 'tab-active' : 'tab-inactive'}`}
              onClick={() => setTimeFrame('week')}
            >
              Weekly
            </button>
            <button
              className={`flex-1 py-2 text-center ${timeFrame === 'month' ? 'tab-active' : 'tab-inactive'}`}
              onClick={() => setTimeFrame('month')}
            >
              Monthly
            </button>
            <button
              className={`flex-1 py-2 text-center ${timeFrame === 'all' ? 'tab-active' : 'tab-inactive'}`}
              onClick={() => setTimeFrame('all')}
            >
              All Time
            </button>
          </div>
          
          {/* City Selector */}
          <div className="mb-4">
            <div className="relative">
              <select className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-3 py-2 pr-8 focus:ring-hero focus:border-hero text-sm">
                <option>Bengaluru</option>
                <option>Mumbai</option>
                <option>Delhi</option>
                <option>Chennai</option>
                <option>Hyderabad</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <Users size={16} className="text-gray-500" />
              </div>
            </div>
          </div>
          
          {/* Leaderboard List */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold flex items-center">
                <Award size={18} className="text-hero mr-2" />
                Top Road Heroes
              </h2>
              <div className="text-sm text-gray-600">
                {timeFrame === 'week' ? 'This Week' : timeFrame === 'month' ? 'This Month' : 'All Time'}
              </div>
            </div>
            
            {isLoading ? (
              // Skeleton loading state
              Array(5).fill(0).map((_, i) => (
                <div key={i} className="bg-white border rounded-xl p-4 mb-3 animate-pulse">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                    <div className="flex-1">
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    </div>
                    <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  </div>
                </div>
              ))
            ) : (
              leaderboard.map((user, index) => (
                <LeaderboardCard key={user.id} user={user} index={index} />
              ))
            )}
          </div>
        </div>
        
        <Navbar />
      </div>
    </PageTransition>
  );
};

export default Leaderboard;
