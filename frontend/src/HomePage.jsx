import React from "react";
import './HomePage.css';
import { Link } from "react-router-dom";

function HomePage({ userEmail, onLogout }) {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg glassy-navbar">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            <span className="highlight">Career Guide</span>
          </a>
          <div className="ms-auto d-flex align-items-center">
            <span className="welcome-text me-3"> Welcome, {userEmail}</span>
            <button className="btn logout-btn btn-sm" onClick={onLogout}>
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-dashboard text-center text-white">
        <div className="container">
          <h1 className="fw-bold">Your Career Dashboard</h1>
          <p className="lead mt-3">
            Explore AI-powered insights, skill assessments, and real-time
            opportunities tailored just for you.
          </p>
        </div>
      </section>

      {/* Action Cards */}
      <div className="container my-5">
        <div className="row g-4">
          {/* Career Survey */}
          <div className="col-md-4">
            <div className="dashboard-card">
              <i className="bi bi-ui-checks fs-1 icon"></i>
              <h5 className="fw-bold mt-3">Take Career Survey</h5>
              <p>Discover careers that match your interests.</p>
              <Link to="/survey" className="btn btn-custom">
                Start Survey
              </Link>
            </div>
          </div>

          {/* AI Suggestions */}
          <div className="col-md-4">
            <div className="dashboard-card">
              <i className="bi bi-stars fs-1 icon"></i>
              <h5 className="fw-bold mt-3">AI Suggestions</h5>
              <p>See AI-recommended paths for your future.</p>
              <Link to="/results" className="btn btn-custom">
                View Careers
              </Link>
            </div>
          </div>

          {/* Skill Assessment */}
          <div className="col-md-4">
            <div className="dashboard-card">
              <i className="bi bi-puzzle fs-1 icon"></i>
              <h5 className="fw-bold mt-3">Skill Assessment</h5>
              <p>Test knowledge and get course recommendations.</p>
              <Link to="/assessment" className="btn btn-custom">
                Start Assessment
              </Link>
            </div>
          </div>

          {/* Explore Colleges */}
          <div className="col-md-4">
            <div className="dashboard-card">
              <i className="bi bi-book fs-1 icon"></i>
              <h5 className="fw-bold mt-3">Explore Colleges</h5>
              <p>Find top courses and colleges that suit your goals.</p>
              <Link to="/explore" className="btn btn-custom">
                Explore
              </Link>
            </div>
          </div>

          {/* Job Market Dashboard */}
          <div className="col-md-4">
            <div className="dashboard-card">
              <i className="bi bi-graph-up-arrow fs-1 icon"></i>
              <h5 className="fw-bold mt-3">Job Market Dashboard</h5>
              <p>See real-time job trends and salary insights.</p>
              <Link to="/dashboard" className="btn btn-custom">
                View Dashboard
              </Link>
            </div>
          </div>

          {/* Find Jobs */}
          <div className="col-md-4">
            <div className="dashboard-card">
              <i className="bi bi-briefcase fs-1 icon"></i>
              <h5 className="fw-bold mt-3">Find Jobs</h5>
              <p>Search real-time job listings by your interests.</p>
              <Link to="/jobs" className="btn btn-custom">
                Search Jobs
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <small>
          © 2025 <span className="highlight">Career Guide</span>. Helping
          students achieve their dreams 🚀
        </small>
      </footer>
    </>
  );
}

export default HomePage;
