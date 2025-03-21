
import React from 'react';

interface TrophyProps {
  size?: number;
  className?: string;
}

const Trophy: React.FC<TrophyProps> = ({ size = 18, className = '' }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M8.21 17C8.83 17.82 9.68 18.42 10.66 18.72C11.64 19.02 12.69 19 13.66 18.68C14.63 18.36 15.46 17.75 16.06 16.92C16.66 16.09 17 15.1 17 14.08V5H7V14.08C7 15.1 7.34 16.09 7.94 16.92C8.02 16.97 8.11 17 8.21 17Z" 
        fill="currentColor" 
        fillOpacity="0.2"
      />
      <path 
        d="M12 16C9.79 16 8 14.21 8 12V6H6C5.45 6 5 6.45 5 7V10C5 11.1 5.9 12 7 12H8.14C8.05 12.32 8 12.66 8 13C8 14.86 9.27 16.43 11 16.87V19H7V21H17V19H13V16.87C14.73 16.43 16 14.86 16 13C16 12.66 15.95 12.32 15.86 12H17C18.1 12 19 11.1 19 10V7C19 6.45 18.55 6 18 6H16V12C16 14.21 14.21 16 12 16ZM10 13C10 13.55 10.45 14 11 14C11.55 14 12 13.55 12 13C12 12.45 11.55 12 11 12C10.45 12 10 12.45 10 13Z" 
        fill="currentColor"
      />
    </svg>
  );
};

export default Trophy;
