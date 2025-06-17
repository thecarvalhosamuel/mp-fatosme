import React from 'react';

function SlowText({ text }: { text: string }) {
  return (
    <div className="relative">
      <p className="text-2xl text-gray-800 opacity-0 animate-fade-in">{text}</p>
    </div>
  );
};

export default SlowText;
