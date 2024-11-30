import React, { useState } from 'react';
import { GoogleButton } from './GoogleButton';

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <div className="input-wrapper">
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
          <span className="icon">▶</span>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <div className="input-wrapper">
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="toggle-password"
          >
            {showPassword ? '👁️' : '👁️‍🗨️'}
          </button>
        </div>
      </div>

      <div className="form-options">
        <label className="remember-me">
          <input type="checkbox" />
          <span>Remember me</span>
        </label>
        <a href="#" className="forgot-password">Forgot password?</a>
      </div>

      <button type="submit" className="submit-button">
        Sign in
      </button>

      <div className="divider">
        <span>Or continue with</span>
      </div>

      <div className="social-buttons">
        <GoogleButton />
        <button type="button" className="github-button">
          GitHub
        </button>
      </div>

      <p className="signup-prompt">
        Not a member?{' '}
        <a href="#">Start your journey today</a>
      </p>
    </form>
  );
};