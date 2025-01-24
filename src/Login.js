import React, { useState } from 'react';
import "./Login.css";

function LogIn() {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className={`form-container ${isSignUp ? 'signup-bg' : 'signin-bg'}`}>
      <div className="form-wrapper">
        {isSignUp ? (
          <form className="form animated fadeIn">
            <h2>Sign Up</h2>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Sign Up</button>
            <p>
              Already have an account?{' '}
              <span className="toggle-link" onClick={toggleForm}>
                Sign In
              </span>
            </p>
          </form>
        ) : (
          <form className="form animated fadeIn">
            <h2>Sign In</h2>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Sign In</button>
            <p>
              Don't have an account?{' '}
              <span className="toggle-link" onClick={toggleForm}>
                Sign Up
              </span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default LogIn;
