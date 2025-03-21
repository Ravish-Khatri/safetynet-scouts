
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle, Bell, Search } from 'lucide-react';
import Navbar from '../components/Navbar';
import OffenseCard from '../components/OffenseCard';
import PageTransition from '../components/PageTransition';

// Mock data for demonstration
const mockOffenses = [
  {
    id: 1,
    thumbnail: 'https://images.unsplash.com/photo-1600320254374-ce2d293c324e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    label: 'Helmetless Riding',
    location: 'MG Road, Bengaluru',
    time: '15 min ago',
    kudos: 23
  },
  {
    id: 2,
    thumbnail: 'https://images.unsplash.com/photo-1597762117709-859f744b84c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    label: 'Wrong-side Driving',
    location: 'Anna Salai, Chennai',
    time: '32 min ago',
    kudos: 45
  },
  {
    id: 3,
    thumbnail: 'https://images.unsplash.com/photo-1619253123147-2201934886f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    label: 'Jumping Red Light',
    location: 'Connaught Place, Delhi',
    time: '1 hour ago',
    kudos: 31
  },
  {
    id: 4,
    thumbnail: 'https://images.unsplash.com/photo-1599409636295-e3cac02b471b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    label: 'Triple Riding',
    location: 'Linking Road, Mumbai',
    time: '2 hours ago',
    kudos: 19
  }
];

const Home = () => {
  const navigate = useNavigate();
  const [offenses, setOffenses] = useState(mockOffenses);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <PageTransition>
      <div className="min-h-screen bg-heroLighter pb-20">
        {/* Header */}
        <div className="bg-white px-4 py-5 border-b border-gray-100 sticky top-0 z-10">
          <div className="flex justify-between items-center max-w-md mx-auto">
            <h1 className="text-xl font-bold text-gray-900">Road Heroes</h1>
            <div className="flex space-x-4">
              <button className="text-gray-600">
                <Search size={20} />
              </button>
              <button className="text-gray-600 relative">
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">2</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Report Button Bar */}
        <div className="bg-white border-b border-gray-100 px-4 py-3 shadow-sm">
          <button 
            onClick={() => navigate('/report')}
            className="hero-button w-full max-w-md mx-auto"
          >
            <AlertTriangle size={18} className="mr-1" />
            Report an Offense
          </button>
        </div>
        
        {/* Live Feed */}
        <div className="px-4 py-4 max-w-md mx-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Live Feed</h2>
            <button className="text-hero text-sm font-medium">View All</button>
          </div>
          
          {isLoading ? (
            // Skeleton loading state
            Array(3).fill(0).map((_, i) => (
              <div key={i} className="glass-card w-full mb-4 overflow-hidden animate-pulse">
                <div className="h-40 bg-gray-200"></div>
                <div className="p-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            ))
          ) : (
            offenses.map((offense, index) => (
              <OffenseCard
                key={offense.id}
                thumbnail={offense.thumbnail}
                label={offense.label}
                location={offense.location}
                time={offense.time}
                kudos={offense.kudos}
              />
            ))
          )}
        </div>
        
        <Navbar />
      </div>
    </PageTransition>
  );
};

export default Home;
