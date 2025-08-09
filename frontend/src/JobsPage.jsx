import React, { useState } from 'react';
import axios from 'axios';

const JobsPage = () => {
  const [what, setWhat] = useState('developer');
  const [where, setWhere] = useState('new york');
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchJobs = async () => {
    if (!what || !where) {
      setError('Please enter both job title and location.');
      return;
    }

    try {
      setLoading(true);
      setError('');
      setJobs([]);

      const res = await axios.get('http://localhost:5000/api/jobs', {
        params: { what, where },
      });

      if (res.data && res.data.results && res.data.results.length > 0) {
        setJobs(res.data.results);
      } else {
        setJobs([]);
        setError('No jobs found for the given criteria.');
      }
    } catch (err) {
      console.error(err);
      setError('Failed to fetch jobs. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Find Jobs</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          value={what}
          onChange={(e) => setWhat(e.target.value)}
          placeholder="Job title (e.g., developer)"
          className="border border-gray-300 p-3 rounded flex-1"
        />
        <input
          type="text"
          value={where}
          onChange={(e) => setWhere(e.target.value)}
          placeholder="Location (e.g., new york)"
          className="border border-gray-300 p-3 rounded flex-1"
        />
        <button
          onClick={fetchJobs}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded disabled:opacity-50"
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {jobs.length > 0 && (
        <ul className="space-y-6">
          {jobs.map((job, index) => (
            <li key={job.id || index} className="border border-gray-300 p-5 rounded shadow-sm">
              <h2 className="text-xl font-semibold">{job.title}</h2>
              <p className="text-gray-600">{job.location?.display_name}</p>
              <div
                className="text-sm text-gray-700 my-2"
                dangerouslySetInnerHTML={{
                  __html: job.description.substring(0, 200) + '...',
                }}
              />
              <a
                href={job.redirect_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Job
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JobsPage;
