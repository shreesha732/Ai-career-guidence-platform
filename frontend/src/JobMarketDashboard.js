// src/JobMarketDashboard.js
import React, { useState } from 'react';

const jobData = [
  {
    title: "Full Stack Developer",
    category: "tech",
    salary: "$90,000 - $130,000",
    demand: "High",
    qualifications: "B.Tech, Bootcamps, React, Node.js"
  },
  {
    title: "Data Analyst",
    category: "tech",
    salary: "$70,000 - $110,000",
    demand: "Very High",
    qualifications: "B.Sc, Python, SQL, Tableau"
  },
  {
    title: "Digital Marketing Manager",
    category: "business",
    salary: "$60,000 - $95,000",
    demand: "High",
    qualifications: "MBA, Google Ads, SEO"
  },
  {
    title: "UX Designer",
    category: "creative",
    salary: "$65,000 - $100,000",
    demand: "Moderate",
    qualifications: "Design degree, Figma, UX Research"
  },
  {
    title: "Research Scientist",
    category: "science",
    salary: "$85,000 - $150,000",
    demand: "High",
    qualifications: "PhD, Lab Experience, Data Analysis"
  }
];

function JobMarketDashboard() {
  const [filter, setFilter] = useState("all");

  const filteredJobs = filter === "all"
    ? jobData
    : jobData.filter(job => job.category === filter);

  return (
    <div className="container mt-5">
      <h2 className="fw-bold text-center mb-4">📊 Job Market Dashboard</h2>

      <div className="d-flex justify-content-center mb-3">
        <select
          className="form-select w-50"
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
        >
          <option value="all">All Fields</option>
          <option value="tech">Tech</option>
          <option value="business">Business</option>
          <option value="creative">Creative</option>
          <option value="science">Science</option>
        </select>
      </div>

      <div className="row">
        {filteredJobs.map((job, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">{job.title}</h5>
                <p><strong>Category:</strong> {job.category}</p>
                <p><strong>Average Salary:</strong> {job.salary}</p>
                <p><strong>Demand:</strong> {job.demand}</p>
                <p><strong>Qualifications:</strong> {job.qualifications}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobMarketDashboard;
