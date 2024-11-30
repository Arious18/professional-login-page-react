import React from 'react';
import { StarryBackground } from './components/StarryBackground';
import { LoginForm } from './components/LoginForm';

function App() {
  return (
    <div className="app">
      <StarryBackground />
      
      <div className="login-container">
        <div className="logo">
          <span className="rocket">🚀</span>
        </div>

        <div className="login-card">
          <div className="header">
            <h1>Developer Universe</h1>
            <p>Launch your coding journey</p>
          </div>

          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default App;