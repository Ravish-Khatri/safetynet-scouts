
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, ChevronRight } from 'lucide-react';

const Splash = () => {
  const navigate = useNavigate();
  
  const handleGetStarted = () => {
    navigate('/sign-in');
  };
  
  return (
    <div className="min-h-screen flex flex-col justify-between p-6 bg-heroLighter">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-hero flex items-center justify-center mb-6 animate-fadeIn shadow-elevation-2">
          <Shield size={40} className="text-white" />
        </div>
        
        <h1 className="text-3xl font-bold text-center mb-2 animate-fadeInUp delay-100 font-display">
          Cars24 Road Heroes
        </h1>
        
        <div className="h-1 w-16 bg-hero rounded-full my-4 animate-fadeInUp delay-200"></div>
        
        <p className="text-center text-gray-600 mb-8 max-w-xs animate-fadeInUp delay-300">
          Crowdsource Safer Roads. Be a Road Hero!
        </p>
        
        <div className="w-64 h-64 bg-white/50 backdrop-blur-sm rounded-xl p-4 shadow-card mb-6 animate-fadeInUp delay-400">
          <img 
            src="/placeholder.svg" 
            alt="Road illustration" 
            className="w-full h-full object-contain opacity-70"
          />
        </div>
      </div>
      
      <button
        onClick={handleGetStarted}
        className="hero-button w-full max-w-xs mx-auto mb-8 animate-fadeInUp delay-500"
      >
        Get Started
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

export default Splash;
