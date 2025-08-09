// src/ExplorePage.js
import React from 'react';

function ExplorePage() {
  const answers = JSON.parse(localStorage.getItem('careerSurveyAnswers'));

  const renderRecommendations = () => {
    if (!answers) return <p>Please complete the survey to get personalized suggestions.</p>;

    switch (answers.q1) {
      case 'tech':
        return (
          <>
            <h5>Recommended Platforms & Courses</h5>
            <ul>
              <li><strong>Coursera:</strong> Google IT Support, Full Stack Web Development</li>
              <li><strong>Udemy:</strong> Python Bootcamp, React - The Complete Guide</li>
              <li><strong>Top Colleges:</strong> IIIT Hyderabad, MIT, Stanford CS</li>
            </ul>
          </>
        );
      case 'creative':
        return (
          <>
            <h5>Recommended Courses & Institutes</h5>
            <ul>
              <li><strong>Udemy:</strong> Adobe Photoshop, Graphic Design Masterclass</li>
              <li><strong>Coursera:</strong> Creative Writing by Wesleyan University</li>
              <li><strong>Top Colleges:</strong> NID India, Srishti Institute, CalArts</li>
            </ul>
          </>
        );
      case 'business':
        return (
          <>
            <h5>Top Business Courses</h5>
            <ul>
              <li><strong>Coursera:</strong> Business Foundations by Wharton</li>
              <li><strong>Udemy:</strong> Digital Marketing, Finance Mastery</li>
              <li><strong>Top Colleges:</strong> IIM Ahmedabad, Harvard Business School</li>
            </ul>
          </>
        );
      case 'science':
        return (
          <>
            <h5>Science Career Resources</h5>
            <ul>
              <li><strong>Coursera:</strong> Data Science Specialization</li>
              <li><strong>Udemy:</strong> Physics Masterclass, Lab Skills</li>
              <li><strong>Top Colleges:</strong> IISc Bangalore, Caltech, Harvard</li>
            </ul>
          </>
        );
      default:
        return <p>No specific data found. Try completing the survey again.</p>;
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center fw-bold mb-4">Explore Colleges & Courses</h2>
      <div className="bg-light p-4 rounded shadow-sm">
        {renderRecommendations()}
      </div>
    </div>
  );
}

export default ExplorePage;
