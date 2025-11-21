import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
      <motion.nav
        className="navbar navbar-expand-lg shadow-sm"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <a className="navbar-brand fw-bold d-flex align-items-center" href="#">
            <motion.i
              className="bi bi-mortarboard-fill me-2"
              initial={{ rotate: -30 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
            Career Guide
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <motion.li className="nav-item" whileHover={{ scale: 1.1 }}>
                <a className="nav-link active" href="#">Home</a>
              </motion.li>
              <motion.li className="nav-item" whileHover={{ scale: 1.1 }}>
                <a className="nav-link" href="#about">About</a>
              </motion.li>
              <motion.li className="nav-item" whileHover={{ scale: 1.1 }}>
                <a className="nav-link" href="#contact">Contact</a>
              </motion.li>
            </ul>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container text-center">
          <motion.h1
            className="display-4 fw-bold mb-3"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Find Your Perfect <span className="highlight">Career Path</span>
          </motion.h1>

          <motion.p
            className="lead mb-4 text-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Personalized career recommendations based on your skills and interests.
          </motion.p>

          <motion.div
            className="row justify-content-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <div className="col-md-6 col-lg-5">
              <input
                type="email"
                className="form-control form-control-lg mb-3 shadow-sm"
                placeholder="Enter your email to get started"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <motion.button
                className="btn-modern w-100"
                onClick={handleLogin}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                 Get Started
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center">
            {[
              { icon: "bi-graph-up-arrow", title: "Personalized Guidance", desc: "Receive AI-powered recommendations tailored just for you." },
              { icon: "bi-people", title: "Expert Support", desc: "Access professional advice and detailed career info." },
              { icon: "bi-journal-bookmark", title: "Simple Surveys", desc: "Quick, interactive surveys to better understand your interests." }
            ].map((feature, i) => (
              <motion.div
                className="col-md-4 mb-4"
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="p-4 feature-card">
                  <i className={`bi ${feature.icon} fs-1 mb-3`}></i>
                  <h5 className="fw-bold">{feature.title}</h5>
                  <p>{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container d-flex flex-wrap align-items-center">
          <motion.div
            className="about-text col-md-6"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="fw-bold mb-3">Why Choose Career Guide?</h2>
            <p>
              Our platform combines <strong>AI-powered insights</strong>,
              professional expertise, and real-time market trends
              to help you navigate your career path with confidence.
            </p>
            <p>
              Whether you're a student exploring possibilities or
              a professional planning a switch, we’ve got you covered.
            </p>
          </motion.div>

          <motion.div
            className="about-image col-md-6 text-center"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
              alt="Career growth"
              className="img-fluid rounded-4 shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* 3D Animation Section */}
      <section className="three-section text-center">
        <h2 className="fw-bold mb-4">Your Career, Visualized in 3D</h2>
        <div className="three-container">
          <div className="cube">
            <div className="front">AI</div>
            <div className="back">Future</div>
            <div className="right">Skills</div>
            <div className="left">Jobs</div>
            <div className="top">Growth</div>
            <div className="bottom">Success</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        id="contact"
        className="footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="container text-center">
          <p className="mb-1">© 2025 Career Guide. All rights reserved.</p>
          <small>
            Contact us: <a href="mailto:support@careerguide.com">support@careerguide.com</a>
          </small>
        </div>
      </motion.footer>
    </>
  );
}

export default LandingPage;
