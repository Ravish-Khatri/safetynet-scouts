
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Camera, Upload, Mic, MapPin, X } from 'lucide-react';
import { toast } from 'sonner';
import CategorySelector from '../components/CategorySelector';
import Navbar from '../components/Navbar';
import PageTransition from '../components/PageTransition';

const Report = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [description, setDescription] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [mediaPreview, setMediaPreview] = useState<string | null>(null);
  const [isRecordingVoice, setIsRecordingVoice] = useState(false);
  
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Create a preview
    const reader = new FileReader();
    reader.onload = () => {
      setMediaPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };
  
  const handleRemoveMedia = () => {
    setMediaPreview(null);
  };
  
  const handleVoiceToText = () => {
    setIsRecordingVoice(!isRecordingVoice);
    
    if (!isRecordingVoice) {
      toast.info('Voice recording started...');
      // Simulate voice recording for 3 seconds
      setTimeout(() => {
        setIsRecordingVoice(false);
        setDescription(description + ' Voice transcription would appear here.');
        toast.success('Voice transcribed successfully');
      }, 3000);
    } else {
      toast.info('Voice recording stopped');
    }
  };
  
  const handleSubmit = () => {
    if (!mediaPreview) {
      toast.error('Please upload a photo or video');
      return;
    }
    
    if (!selectedCategory) {
      toast.error('Please select an offense category');
      return;
    }
    
    setIsUploading(true);
    
    // Simulate upload process
    setTimeout(() => {
      setIsUploading(false);
      navigate('/confirmation');
    }, 2000);
  };
  
  return (
    <PageTransition>
      <div className="min-h-screen bg-white pb-20">
        {/* Header */}
        <div className="bg-white px-4 py-4 border-b border-gray-100 sticky top-0 z-10">
          <div className="flex items-center max-w-md mx-auto">
            <button 
              onClick={() => navigate('/home')}
              className="mr-4"
            >
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-xl font-bold">Report Offense</h1>
          </div>
        </div>
        
        <div className="px-4 py-4 max-w-md mx-auto">
          {/* Media Upload */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Upload Evidence</h3>
            
            {!mediaPreview ? (
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-heroLight flex items-center justify-center mb-3">
                    <Camera size={24} className="text-hero" />
                  </div>
                  <p className="text-gray-600 mb-4">Capture photo or video (max 20s)</p>
                  
                  <div className="flex space-x-3">
                    <label className="hero-button-outline cursor-pointer">
                      <Camera size={18} />
                      Capture
                      <input 
                        type="file" 
                        className="hidden" 
                        accept="image/*,video/*" 
                        capture 
                        onChange={handleUpload}
                      />
                    </label>
                    
                    <label className="hero-button-outline cursor-pointer">
                      <Upload size={18} />
                      Upload
                      <input 
                        type="file" 
                        className="hidden" 
                        accept="image/*,video/*" 
                        onChange={handleUpload}
                      />
                    </label>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative rounded-xl overflow-hidden mb-4">
                <img 
                  src={mediaPreview} 
                  alt="Evidence" 
                  className="w-full h-48 object-cover"
                />
                <button 
                  onClick={handleRemoveMedia}
                  className="absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full"
                >
                  <X size={18} />
                </button>
              </div>
            )}
          </div>
          
          {/* Location Info */}
          <div className="glass-card p-4 mb-6">
            <div className="flex items-center">
              <MapPin size={18} className="text-hero mr-2" />
              <div>
                <h4 className="text-sm font-medium">Current Location</h4>
                <p className="text-xs text-gray-600">Koramangala, Bengaluru • Just now</p>
              </div>
            </div>
          </div>
          
          {/* Category Selector */}
          <CategorySelector
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
          
          {/* Description */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-medium text-gray-700">Description (Optional)</h3>
              <button 
                onClick={handleVoiceToText}
                className={`p-2 rounded-full ${isRecordingVoice ? 'bg-red-100 text-red-600 animate-pulse' : 'text-gray-600'}`}
              >
                <Mic size={18} />
              </button>
            </div>
            
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add details about the offense..."
              className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:ring-hero focus:border-hero min-h-[100px]"
            />
          </div>
          
          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={isUploading}
            className="hero-button w-full"
          >
            {isUploading ? (
              <>
                <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin mr-2"></div>
                Uploading...
              </>
            ) : (
              'Submit Report'
            )}
          </button>
        </div>
        
        <Navbar />
      </div>
    </PageTransition>
  );
};

export default Report;
