import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import LandingPage from './LandingPage';
import HomePage from './HomePage';
import CareerSurvey from './CareerSurvey';
import CareerResults from './CareerResults';
import ExplorePage from './ExplorePage';
import JobMarketDashboard from './JobMarketDashboard';
import JobsPage from './JobsPage'; //ute
import AssessmentPage from './AssessmentPage';


function App() {
  const [userEmail, setUserEmail] = useState(null);

  const handleLogout = () => {
    setUserEmail(null);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            userEmail ? <Navigate to="/home" /> : <LandingPage onLogin={setUserEmail} />
          }
        />
        <Route
          path="/home"
          element={
            userEmail ? <HomePage userEmail={userEmail} onLogout={handleLogout} /> : <Navigate to="/" />
          }
        />
        <Route
          path="/survey"
          element={<CareerSurvey />}
        />
        <Route
          path="/results"
          element={<CareerResults />}
        />
        <Route path="/assessment" element={<AssessmentPage />} />
        <Route
          path="/explore"
          element={userEmail ? <ExplorePage /> : <Navigate to="/" />}
        />
        <Route
          path="/dashboard"
          element={userEmail ? <JobMarketDashboard /> : <Navigate to="/" />}
        />
        <Route
          path="/jobs"
          element={userEmail ? <JobsPage /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
