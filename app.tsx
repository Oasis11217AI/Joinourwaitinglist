
import React from 'react';
import CounterDisplay from './components/CounterDisplay';

// Company Logo
const CompanyLogo: React.FC = () => (
  <img 
    src="/aurora9-logo.png"
    alt="AURORA9 Logo" 
    className="w-auto h-16 sm:h-20 mx-auto mb-6"
  />
);

// LinkedIn Icon
const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    className={className}
    fill="currentColor" 
    viewBox="0 0 24 24" 
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const MailerLiteFormEmbed: React.FC = () => {
  return (
    <div id="mlb2-26652325" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-26652325">
      <div className="ml-form-align-center">
        <div className="ml-form-embedWrapper embedForm">
          <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
            <div className="ml-form-embedContent" style={{}}>
              <h4>Join Our Waiting List</h4>
              <p>Be the first to know! Sign up for launch notifications from AURORA9.</p>
            </div>
            <form className="ml-block-form" action="https://assets.mailerlite.com/jsonp/1561600/forms/155870684527986630/subscribe" data-code="" method="post" target="_blank">
              <div className="ml-form-formContent">
                <div className="ml-form-fieldRow ml-last-item">
                  <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                    <input 
                      aria-label="email" 
                      aria-required={true} 
                      type="email" 
                      className="form-control" 
                      data-inputmask="" 
                      name="fields[email]" 
                      placeholder="Email" 
                      autoComplete="email" 
                    />
                  </div>
                </div>
              </div>
              <div className="ml-form-embedPermissions" style={{}}>
                <div className="ml-form-embedPermissionsContent default privacy-policy">
                  <p>You can unsubscribe anytime. For more details, review our Privacy Policy.</p>
                </div>
              </div>
              <input type="hidden" name="ml-submit" value="1" />
              <div className="ml-form-embedSubmit">
                <button type="submit" className="primary">Subscribe</button>
                <button disabled={true} style={{ display: 'none' }} type="button" className="loading">
                  <div className="ml-form-embedSubmitLoad"></div>
                  <span className="sr-only">Loading...</span>
                </button>
              </div>
              <input type="hidden" name="anticsrf" value="true" />
            </form>
          </div>
          <div className="ml-form-successBody row-success" style={{ display: 'none' }}>
            <div className="ml-form-successContent">
              <h4>Thank you!</h4>
              <p>You have successfully joined our subscriber list.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const App: React.FC = () => {
  const peopleAheadCount = 8894; // Static count as per user request

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4 sm:p-6 font-sans text-slate-100 selection:bg-indigo-500 selection:text-white">
      <main className="bg-slate-800 shadow-2xl rounded-xl p-6 sm:p-8 md:p-12 w-full max-w-2xl text-center">
        <CompanyLogo />
        
        <div className="mb-6 sm:mb-8 text-center">
          <p className="text-md sm:text-lg text-slate-300 leading-relaxed">
            AURORA9: To empower e-commerce businesses of all sizes with progressively autonomous and collaborative AI agents that streamline operations, optimize performance, and foster sustainable growth in the evolving digital marketplace.
          </p>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
          Join Our Exclusive Waiting List
        </h1>
        <p className="text-md sm:text-lg text-slate-400 mb-8 sm:mb-10">
          Be the first to know when we launch. Secure your spot and get early access to exciting features!
        </p>
        
        <CounterDisplay count={peopleAheadCount} />
        
        <div className="mt-8 sm:mt-10"> {/* Wrapper for MailerLite form */}
          <MailerLiteFormEmbed />
        </div>

        <footer className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-700 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs sm:text-sm text-slate-500 order-2 sm:order-1">
            &copy; {new Date().getFullYear()} AURORA9 Inc. All rights reserved.
          </p>
          <a 
            href="https://www.linkedin.com/in/aurora9-ai-agent-09a253364/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Visit our LinkedIn page"
            className="text-slate-500 hover:text-indigo-400 transition-colors duration-150 order-1 sm:order-2"
          >
            <LinkedInIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </footer>
      </main>
    </div>
  );
};

export default App;
