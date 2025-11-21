import React, { useState } from "react";
import axios from "axios";
import { Briefcase, MapPin, Search, ExternalLink } from "lucide-react";

const JobsPage = () => {
  const [what, setWhat] = useState("developer");
  const [where, setWhere] = useState("new york");
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchJobs = async () => {
    if (!what || !where) {
      setError("Please enter both job title and location.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setJobs([]);

      const res = await axios.get("http://localhost:5000/api/jobs", {
        params: { what, where },
      });

      if (res.data?.results?.length > 0) {
        setJobs(res.data.results);
      } else {
        setError("No jobs found for the given criteria.");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to fetch jobs. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-4 py-8 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 flex items-center gap-3">
        <Briefcase size={32} />
        Job Finder
      </h1>

      {/* Search Box */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border mb-10">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            value={what}
            onChange={(e) => setWhat(e.target.value)}
            placeholder="Job title (e.g., developer)"
            className="border border-gray-300 p-3 rounded-xl flex-1 focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            type="text"
            value={where}
            onChange={(e) => setWhere(e.target.value)}
            placeholder="Location (e.g., New York)"
            className="border border-gray-300 p-3 rounded-xl flex-1 focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <button
            onClick={fetchJobs}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl flex items-center gap-2 disabled:opacity-50"
          >
            <Search size={20} />
            {loading ? "Searching..." : "Search"}
          </button>
        </div>
      </div>

      {/* Error */}
      {error && <p className="text-red-600 text-lg mb-4">{error}</p>}

      {/* Results */}
      <div className="space-y-8">
        {jobs.map((job, index) => (
          <div
            key={job.id || index}
            className="bg-white border rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Briefcase size={22} />
              {job.title}
            </h2>

            <p className="flex items-center gap-2 text-gray-600 mt-2">
              <MapPin size={18} />
              {job.location?.display_name}
            </p>

            <p
              className="text-gray-700 text-sm mt-4 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: job.description.substring(0, 250) + "...",
              }}
            />

            <a
              href={job.redirect_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
            >
              View Job <ExternalLink size={18} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsPage;
