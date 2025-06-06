
import React from 'react';

interface CounterDisplayProps {
  count: number;
}

const CounterDisplay: React.FC<CounterDisplayProps> = ({ count }) => {
  return (
    <div className="text-center mb-8 sm:mb-10">
      <p className="text-lg sm:text-xl text-slate-400 mb-1">People ahead of you</p>
      <p className="text-5xl sm:text-6xl font-bold text-white tracking-tight">
        {count.toLocaleString()}
      </p>
    </div>
  );
};

export default CounterDisplay;