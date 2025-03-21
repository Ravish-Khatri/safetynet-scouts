
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, PlusCircle, Trophy, User } from 'lucide-react';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-elevation-1 px-2 py-3 z-10">
      <div className="flex justify-around items-center max-w-md mx-auto">
        <button
          onClick={() => navigate('/')}
          className={`flex flex-col items-center space-y-1 ${isActive('/') ? 'text-hero' : 'text-gray-500'}`}
        >
          <Home size={22} />
          <span className="text-xs font-medium">Home</span>
        </button>
        
        <button
          onClick={() => navigate('/report')}
          className={`flex flex-col items-center space-y-1 ${isActive('/report') ? 'text-hero' : 'text-gray-500'}`}
        >
          <PlusCircle size={22} />
          <span className="text-xs font-medium">Report</span>
        </button>
        
        <button
          onClick={() => navigate('/leaderboard')}
          className={`flex flex-col items-center space-y-1 ${isActive('/leaderboard') ? 'text-hero' : 'text-gray-500'}`}
        >
          <Trophy size={22} />
          <span className="text-xs font-medium">Leaderboard</span>
        </button>
        
        <button
          onClick={() => navigate('/profile')}
          className={`flex flex-col items-center space-y-1 ${isActive('/profile') ? 'text-hero' : 'text-gray-500'}`}
        >
          <User size={22} />
          <span className="text-xs font-medium">Profile</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
