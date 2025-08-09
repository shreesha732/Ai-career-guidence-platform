import React from 'react';
import { Link } from 'react-router-dom';

function HomePage({ userEmail, onLogout }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">Career Guide</a>
          <div className="ms-auto">
            <span className="text-white me-3">Welcome, {userEmail}</span>
            <button className="btn btn-outline-light btn-sm" onClick={onLogout}>Logout</button>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold">Your Career Dashboard</h1>
          <p className="lead text-muted">Explore your personalized career recommendations and resources</p>
        </div>

        {/* Action Cards */}
        <div className="row text-center">
          {/* Career Survey */}
          <div className="col-md-3 mb-4">
            <div className="p-4 border rounded shadow-sm h-100 bg-light">
              <i className="bi bi-ui-checks fs-1 text-primary mb-3"></i>
              <h5 className="fw-bold">Take Career Survey</h5>
              <p>Discover careers that match your interests.</p>
              <Link to="/survey" className="btn btn-primary btn-sm">Start Survey</Link>
            </div>
          </div>

          {/* AI Suggestions */}
          <div className="col-md-3 mb-4">
            <div className="p-4 border rounded shadow-sm h-100 bg-light">
              <i className="bi bi-stars fs-1 text-success mb-3"></i>
              <h5 className="fw-bold">AI Suggestions</h5>
              <p>See AI-recommended paths for you.</p>
              <Link to="/results" className="btn btn-success btn-sm">View Careers</Link>
            </div>
          </div>

{/* Assessment Quiz */}
<div className="col-md-3 mb-4">
  <div className="p-4 border rounded shadow-sm h-100 bg-light">
    <i className="bi bi-puzzle fs-1 text-secondary mb-3"></i>
    <h5 className="fw-bold">Skill Assessment</h5>
    <p>Test your knowledge and get course recommendations.</p>
    <Link to="/assessment" className="btn btn-secondary btn-sm">Start Assessment</Link>
  </div>
</div>

          {/* Explore Colleges */}
          <div className="col-md-3 mb-4">
            <div className="p-4 border rounded shadow-sm h-100 bg-light">
              <i className="bi bi-book fs-1 text-warning mb-3"></i>
              <h5 className="fw-bold">Explore Colleges</h5>
              <p>Top courses and colleges that suit your goal.</p>
              <Link to="/explore" className="btn btn-warning btn-sm">Explore</Link>
            </div>
          </div>

          {/* Job Market Dashboard */}
          <div className="col-md-3 mb-4">
            <div className="p-4 border rounded shadow-sm h-100 bg-light">
              <i className="bi bi-graph-up-arrow fs-1 text-danger mb-3"></i>
              <h5 className="fw-bold">Job Market Dashboard</h5>
              <p>See real-time job trends and salaries.</p>
              <Link to="/dashboard" className="btn btn-danger btn-sm">View Dashboard</Link>
            </div>
          </div>

          {/*  Find Jobs */}
          <div className="col-md-3 mb-4">
            <div className="p-4 border rounded shadow-sm h-100 bg-light">
              <i className="bi bi-briefcase fs-1 text-info mb-3"></i>
              <h5 className="fw-bold">Find Jobs</h5>
              <p>Search real-time job listings based on your interests.</p>
              <Link to="/jobs" className="btn btn-info btn-sm">Search Jobs</Link>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-dark text-white text-center py-3 mt-5">
        <small>© 2025 Career Guide. Helping students achieve their dreams.</small>
      </footer>
    </>
  );
}

export default HomePage;
