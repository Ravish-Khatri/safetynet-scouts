
import React from 'react';
import { MapPin, Clock, ThumbsUp } from 'lucide-react';

interface OffenseCardProps {
  thumbnail: string;
  label: string;
  location: string;
  time: string;
  kudos: number;
}

const OffenseCard: React.FC<OffenseCardProps> = ({
  thumbnail,
  label,
  location,
  time,
  kudos
}) => {
  return (
    <div className="glass-card w-full mb-4 overflow-hidden animate-fadeInUp">
      <div className="relative h-40 w-full overflow-hidden">
        <img 
          src={thumbnail} 
          alt={label} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-medium">
            {label}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center text-gray-600 mb-2 text-sm">
          <MapPin size={14} className="mr-1" />
          <span className="truncate">{location}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-600 text-sm">
            <Clock size={14} className="mr-1" />
            <span>{time}</span>
          </div>
          
          <div className="flex items-center">
            <button className="flex items-center text-gray-600 hover:text-hero transition-colors duration-200">
              <ThumbsUp size={16} />
              <span className="ml-1 text-sm font-medium">{kudos}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffenseCard;
