import React, { useState } from 'react';
import './LandingPage.css';


function LandingPage({ onLogin }) {
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    if (email.trim() !== '') {
      onLogin(email.trim());
    } else {
      alert('Please enter your email');
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            <i className="bi bi-mortarboard-fill me-2"></i> Career Guide
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-3">Find Your Perfect Career Path</h1>
          <p className="lead mb-4 text-secondary">
            Personalized career recommendations based on your skills and interests.
          </p>

          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">
              <input 
                type="email" 
                className="form-control form-control-lg mb-3" 
                placeholder="Enter your email to get started"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <button 
                className="btn btn-primary btn-lg w-100"
                onClick={handleLogin}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="p-4 border rounded shadow-sm h-100">
                <i className="bi bi-graph-up-arrow fs-1 text-primary mb-3"></i>
                <h5 className="fw-bold">Personalized Guidance</h5>
                <p>Receive AI-powered recommendations tailored just for you.</p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="p-4 border rounded shadow-sm h-100">
                <i className="bi bi-people fs-1 text-primary mb-3"></i>
                <h5 className="fw-bold">Expert Support</h5>
                <p>Access professional advice and detailed career info.</p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="p-4 border rounded shadow-sm h-100">
                <i className="bi bi-journal-bookmark fs-1 text-primary mb-3"></i>
                <h5 className="fw-bold">Simple Surveys</h5>
                <p>Quick, interactive surveys to better understand your interests.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-4 mt-auto">
        <div className="container text-center">
          <p className="mb-1">© 2025 Career Guide. All rights reserved.</p>
          <small>
            Contact us: <a href="mailto:support@careerguide.com" className="text-warning">support@careerguide.com</a>
          </small>
        </div>
      </footer>
    </>
  );
}

export default LandingPage;
