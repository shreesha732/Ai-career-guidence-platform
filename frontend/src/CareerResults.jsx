// src/CareerResults.js
import React from "react";
import { FaCheckCircle, FaLightbulb } from "react-icons/fa";
import "./CareerResults.css"; // custom css

function CareerResults() {
  const answers = JSON.parse(localStorage.getItem("careerSurveyAnswers"));

  const getSuggestion = () => {
    if (!answers) return "No survey data found.";

    const { q1, q2, q3 } = answers;

    // Your suggestion mapping logic here...
    if (q1 === 'tech' && q2 === 'build' && q3 === 'math')
      return "You might excel in Software Engineering, Web Development, or AI.";
    if (q1 === 'tech' && q2 === 'build' && q3 === 'science')
      return "Consider Robotics, AI Research, or Data Science.";
    if (q1 === 'tech' && q2 === 'build' && q3 === 'english')
      return "Look into UX/UI Design or Technical Writing in tech.";
    if (q1 === 'tech' && q2 === 'build' && q3 === 'commerce')
      return "You may be suited for FinTech, Business Analytics, or Product Management.";

    if (q1 === 'tech' && q2 === 'read' && q3 === 'math')
      return "You could work in Technical Documentation, Educational Technology, or Coding Education.";
    if (q1 === 'tech' && q2 === 'read' && q3 === 'science')
      return "Science Communication or Educational Software Development could be a great fit.";
    if (q1 === 'tech' && q2 === 'read' && q3 === 'english')
      return "Consider UX Writing, Content Strategy, or Instructional Design.";
    if (q1 === 'tech' && q2 === 'read' && q3 === 'commerce')
      return "You might combine tech and business in Digital Marketing or Tech Sales.";

    if (q1 === 'tech' && q2 === 'lead' && q3 === 'math')
      return "Roles like Tech Lead, Solutions Architect, or Project Manager may suit you.";
    if (q1 === 'tech' && q2 === 'lead' && q3 === 'science')
      return "Consider R&D Project Management or Technical Program Leadership.";
    if (q1 === 'tech' && q2 === 'lead' && q3 === 'english')
      return "Explore Product Management, Client Solutions, or Team Leadership.";
    if (q1 === 'tech' && q2 === 'lead' && q3 === 'commerce')
      return "You might enjoy Business Strategy, Product Management, or Tech Entrepreneurship.";

    if (q1 === 'tech' && q2 === 'explore' && q3 === 'math')
      return "Consider Data Science, AI Research, or Blockchain Development.";
    if (q1 === 'tech' && q2 === 'explore' && q3 === 'science')
      return "Explore Bioinformatics, Computational Science, or Robotics.";
    if (q1 === 'tech' && q2 === 'explore' && q3 === 'english')
      return "Look into Tech Journalism or Technology Education.";
    if (q1 === 'tech' && q2 === 'explore' && q3 === 'commerce')
      return "Consider Market Analysis, Tech Consulting, or Business Intelligence.";

    // Creative
    if (q1 === 'creative' && q2 === 'build' && q3 === 'math')
      return "You might excel in Game Design, Creative Coding, or Interactive Media.";
    if (q1 === 'creative' && q2 === 'build' && q3 === 'science')
      return "Consider Scientific Visualization, EdTech Design, or Animation.";
    if (q1 === 'creative' && q2 === 'build' && q3 === 'english')
      return "Explore roles like Authoring Interactive Fiction or Multimedia Art.";
    if (q1 === 'creative' && q2 === 'build' && q3 === 'commerce')
      return "Look into Creative Marketing or Advertising Technology.";

    if (q1 === 'creative' && q2 === 'read' && q3 === 'math')
      return "You might enjoy Infographic Design or Data Storytelling.";
    if (q1 === 'creative' && q2 === 'read' && q3 === 'science')
      return "Consider Science Illustration, Museum Curation, or Educational Media.";
    if (q1 === 'creative' && q2 === 'read' && q3 === 'english')
      return "Graphic Design, Content Writing, or Animation could be perfect for you.";
    if (q1 === 'creative' && q2 === 'read' && q3 === 'commerce')
      return "You may like Branding, Copywriting, or Creative Strategy.";

    if (q1 === 'creative' && q2 === 'lead' && q3 === 'math')
      return "Consider Creative Direction in Game Development or Design Agencies.";
    if (q1 === 'creative' && q2 === 'lead' && q3 === 'science')
      return "You might excel in Managing Scientific Exhibitions or Design Teams.";
    if (q1 === 'creative' && q2 === 'lead' && q3 === 'english')
      return "Creative Director, Content Manager, or Editor-in-Chief roles could suit you.";
    if (q1 === 'creative' && q2 === 'lead' && q3 === 'commerce')
      return "You may thrive as a Brand Manager or Marketing Director.";

    if (q1 === 'creative' && q2 === 'explore' && q3 === 'math')
      return "Consider Generative Art, Data Art, or AR/VR Experiences.";
    if (q1 === 'creative' && q2 === 'explore' && q3 === 'science')
      return "You might enjoy Experimental Design or Interactive Science Media.";
    if (q1 === 'creative' && q2 === 'explore' && q3 === 'english')
      return "Look into Creative Research, Story Development, or Innovative Media.";
    if (q1 === 'creative' && q2 === 'explore' && q3 === 'commerce')
      return "You may thrive in Trend Forecasting or Creative Entrepreneurship.";

    // Business
    if (q1 === 'business' && q2 === 'build' && q3 === 'math')
      return "Consider Business Analytics, Financial Modeling, or Startup Development.";
    if (q1 === 'business' && q2 === 'build' && q3 === 'science')
      return "You could excel in Biotech Business Development or Pharma Management.";
    if (q1 === 'business' && q2 === 'build' && q3 === 'english')
      return "Explore Proposal Writing, Corporate Communications, or Business Development.";
    if (q1 === 'business' && q2 === 'build' && q3 === 'commerce')
      return "Look into Entrepreneurship, E-commerce, or Supply Chain Management.";

    if (q1 === 'business' && q2 === 'read' && q3 === 'math')
      return "You may fit roles like Economic Analyst, Investment Strategist, or Business Journalist.";
    if (q1 === 'business' && q2 === 'read' && q3 === 'science')
      return "Consider Science Policy, Tech Transfer, or Market Research.";
    if (q1 === 'business' && q2 === 'read' && q3 === 'english')
      return "Corporate Communications, PR, or Marketing Strategy could be ideal.";
    if (q1 === 'business' && q2 === 'read' && q3 === 'commerce')
      return "Look into Market Analysis, Branding, or Business Consulting.";

    if (q1 === 'business' && q2 === 'lead' && q3 === 'math')
      return "Management Consulting, Strategic Planning, or Operations Leadership could be great fits.";
    if (q1 === 'business' && q2 === 'lead' && q3 === 'science')
      return "You might lead in Pharma Management or Renewable Energy Projects.";
    if (q1 === 'business' && q2 === 'lead' && q3 === 'english')
      return "You may enjoy Executive Leadership, Media Management, or Diplomacy.";
    if (q1 === 'business' && q2 === 'lead' && q3 === 'commerce')
      return "Business Management, Marketing, or Entrepreneurship could be perfect.";

    if (q1 === 'business' && q2 === 'explore' && q3 === 'math')
      return "Look into Financial Innovation, Cryptocurrency, or Business Intelligence.";
    if (q1 === 'business' && q2 === 'explore' && q3 === 'science')
      return "Consider Sustainability Consulting or Emerging Tech Ventures.";
    if (q1 === 'business' && q2 === 'explore' && q3 === 'english')
      return "You might enjoy International Relations, Policy Analysis, or Consulting.";
    if (q1 === 'business' && q2 === 'explore' && q3 === 'commerce')
      return "Explore Venture Capital, Strategic Investments, or Global Markets.";

    // Science
    if (q1 === 'science' && q2 === 'build' && q3 === 'math')
      return "Consider Data Science, Engineering, or Computational Physics.";
    if (q1 === 'science' && q2 === 'build' && q3 === 'science')
      return "You might enjoy Lab Research, Medical Technology, or Environmental Engineering.";
    if (q1 === 'science' && q2 === 'build' && q3 === 'english')
      return "Science Writing, Research Communication, or Educational Content could suit you.";
    if (q1 === 'science' && q2 === 'build' && q3 === 'commerce')
      return "Look into Pharma Sales, Biotech Business, or Science Entrepreneurship.";

    if (q1 === 'science' && q2 === 'read' && q3 === 'math')
      return "Explore Technical Research Papers, Scientific Analysis, or Data Interpretation.";
    if (q1 === 'science' && q2 === 'read' && q3 === 'science')
      return "You may enjoy Academic Research, Science Editing, or Grant Writing.";
    if (q1 === 'science' && q2 === 'read' && q3 === 'english')
      return "Science Communication, Journalism, or Teaching may fit well.";
    if (q1 === 'science' && q2 === 'read' && q3 === 'commerce')
      return "Look into Science Policy, Market Research, or Tech Transfer.";

    if (q1 === 'science' && q2 === 'lead' && q3 === 'math')
      return "Lead Data Science Teams, Engineering Projects, or Research Groups.";
    if (q1 === 'science' && q2 === 'lead' && q3 === 'science')
      return "You might be suited for R&D Management or Clinical Trials Leadership.";
    if (q1 === 'science' && q2 === 'lead' && q3 === 'english')
      return "Consider Advocacy, Science Policy, or NGO Leadership.";
    if (q1 === 'science' && q2 === 'lead' && q3 === 'commerce')
      return "Science Entrepreneurship or Biotech Startups could be ideal.";

    if (q1 === 'science' && q2 === 'explore' && q3 === 'math')
      return "You may excel in Astrophysics, Quantum Computing, or Data Modeling.";
    if (q1 === 'science' && q2 === 'explore' && q3 === 'science')
      return "Explore Space Science, Genetic Research, or Climate Science.";
    if (q1 === 'science' && q2 === 'explore' && q3 === 'english')
      return "Science Journalism or Documentary Production could suit you.";
    if (q1 === 'science' && q2 === 'explore' && q3 === 'commerce')
      return "Look into Tech Commercialization or Global Science Policy.";

    return "Based on your responses, explore careers in your field of interest!";
  };

  return (
    <div className="results-container">
      <div className="results-card shadow-lg p-4">
        <h2 className="text-center fw-bold mb-3 text-primary">
          Career Suggestions
        </h2>
        <p className="text-center text-muted">
          Based on your answers, here’s a path you might enjoy.
        </p>

        {answers ? (
          <>
            <div className="answers-box mt-4">
              <h5 className="fw-bold text-dark">
                <FaCheckCircle className="me-2 text-success" />
                Your Interests
              </h5>
              <ul className="list-group list-group-flush mt-2">
                <li className="list-group-item">
                  <strong>Q1:</strong> {answers.q1}
                </li>
                <li className="list-group-item">
                  <strong>Q2:</strong> {answers.q2}
                </li>
                <li className="list-group-item">
                  <strong>Q3:</strong> {answers.q3}
                </li>
              </ul>
            </div>

            <div className="suggestion-box mt-4 p-3 rounded">
              <h5 className="fw-bold text-dark">
                <FaLightbulb className="me-2 text-warning" />
                Suggested Path
              </h5>
              <p className="mt-2 fs-5">{getSuggestion()}</p>
            </div>
          </>
        ) : (
          <div className="alert alert-warning mt-3">
            No survey answers found. Please complete the survey first.
          </div>
        )}
      </div>
    </div>
  );
}

export default CareerResults;
