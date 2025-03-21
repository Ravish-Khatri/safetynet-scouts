
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Smartphone, CheckCircle } from 'lucide-react';
import OTPInput from '../components/OTPInput';
import { toast } from 'sonner';

const SignIn = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showOTP, setShowOTP] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  
  const handleRequestOTP = () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      toast.error('Please enter a valid phone number');
      return;
    }
    
    // Simulate OTP sending
    toast.success('OTP sent to your phone');
    setShowOTP(true);
  };
  
  const handleVerifyOTP = (otp: string) => {
    setIsVerifying(true);
    
    // Simulate verification process
    setTimeout(() => {
      // For demo, any valid 4-digit OTP will work
      if (otp.length === 4) {
        toast.success('Phone verified successfully');
        navigate('/home');
      } else {
        toast.error('Invalid OTP. Please try again.');
      }
      setIsVerifying(false);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen bg-white p-6">
      <button 
        onClick={() => navigate('/splash')}
        className="flex items-center text-gray-600 mb-6"
      >
        <ArrowLeft size={20} className="mr-1" />
        <span>Back</span>
      </button>
      
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-2">Sign In</h1>
        <p className="text-gray-600 mb-8">Verify your phone to get started</p>
        
        <div className="glass-card p-6 mb-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className={`rounded-full p-2 ${showOTP ? 'bg-gray-100' : 'bg-heroLight'}`}>
              <Smartphone size={20} className={showOTP ? 'text-gray-500' : 'text-hero'} />
            </div>
            <div className="h-0.5 flex-1 bg-gray-200"></div>
            <div className={`rounded-full p-2 ${showOTP ? 'bg-heroLight' : 'bg-gray-100'}`}>
              <CheckCircle size={20} className={showOTP ? 'text-hero' : 'text-gray-500'} />
            </div>
          </div>
          
          {!showOTP ? (
            <div className="animate-fadeInUp">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <div className="flex mb-4">
                <div className="bg-gray-50 border border-gray-200 rounded-l-lg px-3 py-2 text-gray-700">
                  +91
                </div>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  placeholder="Enter your phone number"
                  className="flex-1 focus:ring-hero focus:border-hero border border-gray-200 rounded-r-lg px-3 py-2"
                  maxLength={10}
                />
              </div>
              <button
                onClick={handleRequestOTP}
                className="hero-button w-full"
                disabled={phoneNumber.length < 10}
              >
                Request OTP
              </button>
            </div>
          ) : (
            <div className="animate-fadeInUp">
              <h3 className="text-center font-medium mb-2">Enter OTP</h3>
              <p className="text-center text-sm text-gray-600 mb-4">
                Enter the 4-digit code sent to +91 {phoneNumber}
              </p>
              
              <OTPInput length={4} onComplete={handleVerifyOTP} />
              
              <div className="text-center mt-4">
                <button 
                  className="text-hero text-sm font-medium"
                  onClick={() => {
                    setShowOTP(false);
                    toast.info('You can request a new OTP');
                  }}
                >
                  Change Phone Number
                </button>
              </div>
              
              <div className="text-center mt-2">
                {isVerifying ? (
                  <div className="flex justify-center items-center space-x-2 text-gray-600">
                    <div className="w-4 h-4 rounded-full bg-hero animate-pulse"></div>
                    <span>Verifying...</span>
                  </div>
                ) : (
                  <button 
                    className="text-gray-600 text-sm"
                    onClick={handleRequestOTP}
                  >
                    Resend OTP
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
        
        <p className="text-xs text-center text-gray-500 mt-8">
          By signing in, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default SignIn;
