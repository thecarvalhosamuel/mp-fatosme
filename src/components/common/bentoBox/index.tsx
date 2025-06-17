// BentoBox.jsx
import React from 'react';

interface BentoBoxProps {
  children: React.ReactNode; 
}

const BentoBox = ({ children }: BentoBoxProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
};

export default BentoBox;
