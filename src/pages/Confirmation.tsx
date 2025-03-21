
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Share, ArrowRight, Trophy } from 'lucide-react';
import { toast } from 'sonner';
import Navbar from '../components/Navbar';
import PageTransition from '../components/PageTransition';

const Confirmation = () => {
  const navigate = useNavigate();
  const [pointsAnimated, setPointsAnimated] = useState(0);
  
  useEffect(() => {
    // Animate points counter from 0 to 10
    const interval = setInterval(() => {
      setPointsAnimated(prev => {
        if (prev < 10) return prev + 1;
        clearInterval(interval);
        return 10;
      });
    }, 100);
    
    return () => clearInterval(interval);
  }, []);
  
  const handleShare = () => {
    toast.success('Sharing feature activated');
    // In a real app, this would open a sharing dialog
  };
  
  return (
    <PageTransition>
      <div className="min-h-screen bg-heroLighter pb-20">
        <div className="h-full flex flex-col items-center justify-center max-w-md mx-auto px-4 py-12">
          <div className="glass-card p-6 w-full mb-6 animate-fadeInUp">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-heroLight flex items-center justify-center mb-4 animate-fadeIn">
                <CheckCircle2 size={36} className="text-hero" />
              </div>
              
              <h1 className="text-2xl font-bold mb-2">Thank You!</h1>
              <p className="text-gray-600 mb-6">
                Your report has been submitted and is being verified
              </p>
              
              <div className="flex items-center justify-center w-32 h-32 rounded-full bg-white border-4 border-heroLight mb-6 relative animate-fadeInUp delay-100">
                <div className="text-3xl font-bold text-hero">+{pointsAnimated}</div>
                <div className="absolute bottom-0 text-sm text-gray-600">points</div>
              </div>
              
              <div className="flex items-center space-x-2 text-gray-700 mb-6 animate-fadeInUp delay-200">
                <Trophy size={18} className="text-hero" />
                <span>You're now in the top 15% of Road Heroes!</span>
              </div>
              
              <button
                onClick={handleShare}
                className="hero-button-outline w-full mb-4 animate-fadeInUp delay-300"
              >
                <Share size={18} />
                Share on Social
              </button>
              
              <button 
                onClick={() => navigate('/home')}
                className="hero-button w-full animate-fadeInUp delay-400"
              >
                Continue to Home
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
          
          <div className="glass-card p-4 w-full animate-fadeInUp delay-500">
            <h3 className="font-semibold mb-2">Did you know?</h3>
            <p className="text-sm text-gray-600">
              Over 47,000 deaths in India last year were due to helmetless riding.
              Your reports help make roads safer for everyone.
            </p>
          </div>
        </div>
        
        <Navbar />
      </div>
    </PageTransition>
  );
};

export default Confirmation;
