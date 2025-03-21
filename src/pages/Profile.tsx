
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Settings, Award, Camera, FileText, MapPin, LogOut, Star } from 'lucide-react';
import Navbar from '../components/Navbar';
import PageTransition from '../components/PageTransition';
import { toast } from 'sonner';

const ProfileCard = ({ title, value, icon }: { title: string, value: string | number, icon: React.ReactNode }) => {
  return (
    <div className="glass-card flex items-center p-4 mb-3">
      <div className="w-10 h-10 rounded-full bg-heroLight flex items-center justify-center mr-3">
        {icon}
      </div>
      <div>
        <h3 className="text-sm text-gray-600">{title}</h3>
        <div className="font-semibold">{value}</div>
      </div>
    </div>
  );
};

const AchievementBadge = ({ title, icon }: { title: string, icon: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 rounded-full bg-white shadow-elevation-1 flex items-center justify-center mb-2">
        {icon}
      </div>
      <span className="text-xs text-center">{title}</span>
    </div>
  );
};

const Profile = () => {
  const navigate = useNavigate();
  const [isLogoutPromptOpen, setIsLogoutPromptOpen] = useState(false);
  
  const handleLogout = () => {
    setIsLogoutPromptOpen(true);
  };
  
  const confirmLogout = () => {
    toast.success('You have been logged out');
    navigate('/splash');
  };
  
  return (
    <PageTransition>
      <div className="min-h-screen bg-heroLighter pb-20">
        {/* Header */}
        <div className="bg-hero text-white px-4 py-5">
          <div className="flex justify-between items-center max-w-md mx-auto">
            <h1 className="text-xl font-bold">My Profile</h1>
            <button>
              <Settings size={20} />
            </button>
          </div>
        </div>
        
        {/* Profile Info */}
        <div className="px-4 py-4 max-w-md mx-auto">
          <div className="relative -mt-12 mb-6 flex flex-col items-center">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-white p-1 shadow-lg">
                <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <button className="absolute bottom-0 right-0 bg-hero text-white p-1.5 rounded-full shadow-md">
                <Camera size={16} />
              </button>
            </div>
            
            <h2 className="text-xl font-bold mt-3">Aditya Sharma</h2>
            <p className="text-gray-600 flex items-center">
              <MapPin size={14} className="mr-1" />
              Bengaluru
            </p>
            
            <div className="flex mt-2 space-x-1">
              <span className="inline-flex items-center bg-heroLight px-2 py-0.5 rounded text-xs font-medium text-hero">
                <Star size={12} className="mr-1" />
                Consistent Reporter
              </span>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="glass-card p-3 text-center">
              <div className="text-xl font-bold text-hero">135</div>
              <div className="text-xs text-gray-600">Points</div>
            </div>
            
            <div className="glass-card p-3 text-center">
              <div className="text-xl font-bold text-hero">19</div>
              <div className="text-xs text-gray-600">Reports</div>
            </div>
            
            <div className="glass-card p-3 text-center">
              <div className="text-xl font-bold text-hero">23</div>
              <div className="text-xs text-gray-600">Rank</div>
            </div>
          </div>
          
          {/* Achievements */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <Award size={18} className="text-hero mr-2" />
              Achievements
            </h3>
            
            <div className="glass-card p-4">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-medium">My Badges</h4>
                <button className="text-hero text-sm">See All</button>
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                <AchievementBadge
                  title="First Report"
                  icon={<FileText size={24} className="text-hero" />}
                />
                <AchievementBadge
                  title="Top 25%"
                  icon={<Trophy size={24} className="text-yellow-500" />}
                />
                <AchievementBadge
                  title="10+ Reports"
                  icon={<Star size={24} className="text-hero" />}
                />
              </div>
            </div>
          </div>
          
          {/* Activity */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">My Reports</h3>
            
            <ProfileCard
              title="Total Reports"
              value="19 submissions"
              icon={<FileText size={18} className="text-hero" />}
            />
            
            <ProfileCard
              title="Points Earned"
              value="135 points"
              icon={<Star size={18} className="text-hero" />}
            />
            
            <ProfileCard
              title="Current Rank"
              value="#23 in Bengaluru"
              icon={<Trophy size={18} className="text-hero" />}
            />
          </div>
          
          {/* Logout */}
          <button
            onClick={handleLogout}
            className="flex items-center justify-center w-full border border-gray-300 text-gray-700 rounded-lg py-3 px-4 hover:bg-gray-50 transition-colors duration-200"
          >
            <LogOut size={18} className="mr-2 text-gray-500" />
            Logout
          </button>
        </div>
        
        {/* Logout Confirmation Dialog */}
        {isLogoutPromptOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 animate-fadeIn">
            <div className="bg-white rounded-xl p-6 max-w-sm w-full animate-fadeInUp">
              <h3 className="text-xl font-bold mb-3">Logout</h3>
              <p className="text-gray-600 mb-6">Are you sure you want to logout of your account?</p>
              
              <div className="flex space-x-3">
                <button
                  onClick={() => setIsLogoutPromptOpen(false)}
                  className="flex-1 py-2 border border-gray-300 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmLogout}
                  className="flex-1 py-2 bg-hero text-white rounded-lg"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        )}
        
        <Navbar />
      </div>
    </PageTransition>
  );
};

export default Profile;
