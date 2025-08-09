// src//CareerSurvey.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

    // Save answers (to backend or localStorage – currently localStorage)
    localStorage.setItem('careerSurveyAnswers', JSON.stringify(answers));

    // Navigate to results page
    navigate('/results');
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center fw-bold mb-4">Career Interest Survey</h2>
      <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-sm">
        <div className="mb-4">
          <label className="form-label fw-semibold">1. What type of work excites you the most?</label>
          <select className="form-select" name="q1" value={answers.q1} onChange={handleChange} required>
            <option value="">-- Select an option --</option>
            <option value="tech">Technology & Programming</option>
            <option value="creative">Art, Design & Writing</option>
            <option value="business">Business & Management</option>
            <option value="science">Science & Research</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="form-label fw-semibold">2. What do you enjoy doing in your free time?</label>
          <select className="form-select" name="q2" value={answers.q2} onChange={handleChange} required>
            <option value="">-- Select an option --</option>
            <option value="build">Building things or coding</option>
            <option value="read">Reading, drawing or writing</option>
            <option value="lead">Organizing, leading or planning</option>
            <option value="explore">Exploring new concepts or experiments</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="form-label fw-semibold">3. Which school subject do you enjoy most?</label>
          <select className="form-select" name="q3" value={answers.q3} onChange={handleChange} required>
            <option value="">-- Select an option --</option>
            <option value="math">Mathematics or Computer Science</option>
            <option value="english">English or Arts</option>
            <option value="commerce">Economics or Business Studies</option>
            <option value="science">Biology, Physics or Chemistry</option>
          </select>
        </div>

        <div className="text-center">
          <button className="btn btn-primary px-4" type="submit">Submit Survey</button>
        </div>
      </form>
    </div>
  );
}

export default CareerSurvey;
