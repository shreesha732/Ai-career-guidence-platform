import React, { useState } from 'react';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (email.trim()) {
      onLogin(email);
    } else {
      alert('Please enter an email');
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}

export default Login;
