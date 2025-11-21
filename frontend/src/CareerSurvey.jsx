// src/CareerSurvey.js
import React, { useState } from 'react';
import './CareerSurvey.css';
import { useNavigate } from 'react-router-dom';
import { FaLaptopCode, FaBookOpen, FaChalkboardTeacher } from "react-icons/fa";

function CareerSurvey() {
  const navigate = useNavigate();

  const [answers, setAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('careerSurveyAnswers', JSON.stringify(answers));
    navigate('/results');
  };

  return (
    <div className="survey-page">
      {/* Hero Header */}
      <div className="survey-hero text-center text-white py-5 mb-5">
        <h1 className="fw-bold">Career Interest Survey</h1>
        <p className="lead opacity-75">
          Answer a few quick questions and discover the career path that matches your passion.
        </p>
      </div>

      {/* Survey Form */}
      <div className="container">
        <div className="survey-card bg-white p-5 rounded shadow-lg mx-auto" style={{ maxWidth: "650px" }}>
          <form onSubmit={handleSubmit}>
            
            {/* Q1 */}
            <div className="mb-4">
              <label className="form-label fw-semibold d-flex align-items-center gap-2">
                <FaLaptopCode className="text-primary" /> 1. What type of work excites you the most?
              </label>
              <select
                className="form-select"
                name="q1"
                value={answers.q1}
                onChange={handleChange}
                required
              >
                <option value="">-- Select an option --</option>
                <option value="tech">Technology & Programming</option>
                <option value="creative">Art, Design & Writing</option>
                <option value="business">Business & Management</option>
                <option value="science">Science & Research</option>
              </select>
            </div>

            {/* Q2 */}
            <div className="mb-4">
              <label className="form-label fw-semibold d-flex align-items-center gap-2">
                <FaBookOpen className="text-success" /> 2. What do you enjoy doing in your free time?
              </label>
              <select
                className="form-select"
                name="q2"
                value={answers.q2}
                onChange={handleChange}
                required
              >
                <option value="">-- Select an option --</option>
                <option value="build">Building things or coding</option>
                <option value="read">Reading, drawing or writing</option>
                <option value="lead">Organizing, leading or planning</option>
                <option value="explore">Exploring new concepts or experiments</option>
              </select>
            </div>

            {/* Q3 */}
            <div className="mb-4">
              <label className="form-label fw-semibold d-flex align-items-center gap-2">
                <FaChalkboardTeacher className="text-warning" /> 3. Which school subject do you enjoy most?
              </label>
              <select
                className="form-select"
                name="q3"
                value={answers.q3}
                onChange={handleChange}
                required
              >
                <option value="">-- Select an option --</option>
                <option value="math">Mathematics or Computer Science</option>
                <option value="english">English or Arts</option>
                <option value="commerce">Economics or Business Studies</option>
                <option value="science">Biology, Physics or Chemistry</option>
              </select>
            </div>

            <div className="text-center mt-5">
              <button className="btn survey-btn px-5 py-2" type="submit">
                Submit Survey
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CareerSurvey;
