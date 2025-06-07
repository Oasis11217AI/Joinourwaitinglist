import React, { useState } from 'react';
import CounterDisplay from './components/CounterDisplay';
import EmailForm from './components/EmailForm';
// LinkedIn Icon for the footer
const LinkedInIcon: React.FC = () => (
  <svg 
    className="w-6 h-6 text-slate-400 group-hover:text-indigo-400 transition-colors duration-150" 
    fill="currentColor" 
    viewBox="0 0 24 24" 
    aria-hidden="true"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const App: React.FC = () => {
  const initialCount = 8894;
  const [peopleAheadCount, setPeopleAheadCount] = useState(initialCount);

  const handleSubscriptionSuccess = () => {
    setPeopleAheadCount(prevCount => prevCount + 1);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4 sm:p-6 font-sans">
      <main className="bg-slate-800 shadow-2xl rounded-xl p-6 sm:p-8 md:p-12 w-full max-w-2xl text-center">
        {/* AURORA9 Logo */}
        <img 
          src="/AURORA9_LOGO.png" 
          alt="AURORA9 Logo" 
          className="w-auto h-16 sm:h-20 mx-auto mb-6" 
        />
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
          Join Our Exclusive Waiting List
        </h1>
        <p className="text-md sm:text-lg text-slate-400 mb-8 sm:mb-10">
          AURORA9: To empower e-commerce businesses of all sizes with progressively autonomous and collaborative AI agents that streamline operations, optimize performance, and foster sustainable growth in the evolving digital marketplace.
        </p>

        <CounterDisplay count={peopleAheadCount} />
        <EmailForm onSubscriptionSuccess={handleSubscriptionSuccess} />

        <footer className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-700 flex flex-col items-center">
          <a 
            href="https://www.linkedin.com/in/aurora9-ai-agent-09a253364/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="AURORA9 LinkedIn Profile"
            className="group inline-block mb-3 p-2 rounded-full hover:bg-slate-700 transition-colors duration-150"
          >
            <LinkedInIcon />
          </a>
          <p className="text-xs sm:text-sm text-slate-500">
            &copy; {new Date().getFullYear()} AURORA9 Inc. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default App;