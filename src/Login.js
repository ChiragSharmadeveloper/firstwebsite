import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  // Button's onClick handler function
  const handleLoginClick = () => {
    // Example validation check
    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }

    // Clear error if form is valid
    setError('');

    // Simulate login logic (replace with real API)
    console.log('Logging in with:', { email, password });

    // Example: You could add your API call here to authenticate the user
    // fetch('/login', { method: 'POST', body: JSON.stringify({ email, password }) })
    //   .then(response => response.json())
    //   .then(data => {
    //     // Handle response from server, such as redirecting or updating state
    //   });
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {/* Button with onClick handler */}
        <button type="button" onClick={handleLoginClick}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

// import React, { useState } from 'react';

// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleEmailChange = (e) => setEmail(e.target.value);
//   const handlePasswordChange = (e) => setPassword(e.target.value);

//   const handleLoginClick = () => {
//     // Example validation check
//     if (!email || !password) {
//       setError('Please fill in both fields.');
//       return;
//     }

//     // Clear error if form is valid
//     setError('');

//     // Simulate login API call (replace with real API logic)
//     console.log('Logging in with:', { email, password });

//     // Example: You could call an API to authenticate the user
//     // fetch('/login', { method: 'POST', body: JSON.stringify({ email, password }) })
//     //   .then(response => response.json())
//     //   .then(data => {
//     //     // Handle response
//     //     if (data.success) {
//     //       // Redirect or update state after successful login
//     //     } else {
//     //       setError('Invalid credentials');
//     //     }
//     //   });
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={handleEmailChange}
//             placeholder="Enter your email"
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={handlePasswordChange}
//             placeholder="Enter your password"
//           />
//         </div>
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//         <button type="button" onClick={handleLoginClick}>
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;




// import React, { useState } from 'react';
// import "./Login.css";

// function LogIn() {
//   const [isSignUp, setIsSignUp] = useState(true);

//   const toggleForm = () => {
//     setIsSignUp(!isSignUp);
//   };

//   return (
//     <div className={`form-container ${isSignUp ? 'signup-bg' : 'signin-bg'}`}>
//       <div className="form-wrapper">
//         {isSignUp ? (
//           <form className="form animated fadeIn">
//             <h2>Sign Up</h2>
//             <input type="text" placeholder="Name" required />
//             <input type="email" placeholder="Email" required />
//             <input type="password" placeholder="Password" required />
//             <button type="submit">Sign Up</button>
//             <p>
//               Already have an account?{' '}
//               <span className="toggle-link" onClick={toggleForm}>
//                 Sign In
//               </span>
//             </p>
//           </form>
//         ) : (
//           <form className="form animated fadeIn">
//             <h2>Sign In</h2>
//             <input type="email" placeholder="Email" required />
//             <input type="password" placeholder="Password" required />
//             <button type="submit">Sign In</button>
//             <p>
//               Don't have an account?{' '}
//               <span className="toggle-link" onClick={toggleForm}>
//                 Sign Up
//               </span>
//             </p>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }

// export default LogIn;
