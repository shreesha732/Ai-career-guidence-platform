// src/pages/AssessmentPage.jsx
import React, { useState, useEffect } from "react";

const assessmentData = {
  "Web Development": [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Trainer Marking Language",
        "Hyper Text Markup Language",
        "Hyper Text Markdown Language",
        "None of the above",
      ],
      answer: "Hyper Text Markup Language",
    },
    {
      question: "Which of these is a JavaScript framework?",
      options: ["Laravel", "Django", "React", "Flask"],
      answer: "React",
    },
    {
      question: "CSS is used for:",
      options: ["Structure", "Logic", "Styling", "Database"],
      answer: "Styling",
    },
    {
      question: "Which HTTP method updates data?",
      options: ["GET", "POST", "PUT", "DELETE"],
      answer: "PUT",
    },
    {
      question: "React uses what type of DOM?",
      options: ["Real DOM", "Shadow DOM", "Virtual DOM", "Document DOM"],
      answer: "Virtual DOM",
    },
  ],

  "Data Science": [
    {
      question: "Which library is used for data manipulation in Python?",
      options: ["NumPy", "TensorFlow", "Pandas", "Keras"],
      answer: "Pandas",
    },
    {
      question: "Main language used for Data Science?",
      options: ["Java", "Python", "C++", "Ruby"],
      answer: "Python",
    },
    {
      question: "Which is a supervised learning algorithm?",
      options: ["K-Means", "Linear Regression", "DBSCAN", "PCA"],
      answer: "Linear Regression",
    },
    {
      question: "Matplotlib is used for:",
      options: ["Image Recognition", "Plotting Graphs", "Databases", "Games"],
      answer: "Plotting Graphs",
    },
    {
      question: "Which library is used for deep learning?",
      options: ["Scikit-learn", "Seaborn", "Keras", "OpenCV"],
      answer: "Keras",
    },
  ],

  "Artificial Intelligence": [
    {
      question: "Which is a common AI search algorithm?",
      options: ["DFS", "Bubble Sort", "Quick Sort", "Join Query"],
      answer: "DFS",
    },
    {
      question: "Neural networks are inspired by:",
      options: ["Computers", "Biological neurons", "Cars", "Planets"],
      answer: "Biological neurons",
    },
    {
      question: "Which is an AI domain?",
      options: ["Networking", "Machine Learning", "Accounting", "Banking"],
      answer: "Machine Learning",
    },
    {
      question: "Which language is most used in AI?",
      options: ["PHP", "Python", "Swift", "Kotlin"],
      answer: "Python",
    },
    {
      question: "Which is an activation function?",
      options: ["ReLU", "Sum", "Divide", "Equal"],
      answer: "ReLU",
    },
  ],

  "Cybersecurity": [
    {
      question: "What does VPN stand for?",
      options: [
        "Virtual Private Node",
        "Virtual Public Network",
        "Virtual Private Network",
        "Verified Protected Network",
      ],
      answer: "Virtual Private Network",
    },
    {
      question: "Which is a type of malware?",
      options: ["SQL", "Trojan", "JSON", "HTML"],
      answer: "Trojan",
    },
    {
      question: "What is phishing?",
      options: [
        "Scanning networks",
        "Stealing user data by deception",
        "Encrypting data",
        "Fixing server issues",
      ],
      answer: "Stealing user data by deception",
    },
    {
      question: "HTTPS uses which protocol?",
      options: ["SSL/TLS", "FTP", "SSH", "SMTP"],
      answer: "SSL/TLS",
    },
    {
      question: "Strong passwords should include:",
      options: [
        "Only letters",
        "Only numbers",
        "Mixed characters",
        "Only symbols",
      ],
      answer: "Mixed characters",
    },
  ],

  "Cloud Computing": [
    {
      question: "AWS stands for:",
      options: [
        "Amazon Web Services",
        "Advanced Web System",
        "Artificial Web Server",
        "Automatic Web Storage",
      ],
      answer: "Amazon Web Services",
    },
    {
      question: "Which is a cloud provider?",
      options: ["Oracle", "Google Cloud", "Dell", "Adobe"],
      answer: "Google Cloud",
    },
    {
      question: "IaaS refers to:",
      options: [
        "Internet as a Software",
        "Infrastructure as a Service",
        "Integration as a System",
        "Information as a Server",
      ],
      answer: "Infrastructure as a Service",
    },
    {
      question: "Which is used for containerization?",
      options: ["Docker", "Photoshop", "Excel", "Figma"],
      answer: "Docker",
    },
    {
      question: "Azure is developed by:",
      options: ["Amazon", "IBM", "Microsoft", "Google"],
      answer: "Microsoft",
    },
  ],

  "Mobile App Development": [
    {
      question: "React Native is used to build:",
      options: ["Desktop apps", "Mobile apps", "AI models", "Web servers"],
      answer: "Mobile apps",
    },
    {
      question: "Which language does Android primarily use?",
      options: ["Swift", "Kotlin", "Ruby", "Go"],
      answer: "Kotlin",
    },
    {
      question: "Which is used for iOS development?",
      options: ["Java", "Swift", "C#", "PHP"],
      answer: "Swift",
    },
    {
      question: "Flutter uses which programming language?",
      options: ["Dart", "Java", "Python", "R"],
      answer: "Dart",
    },
    {
      question: "APK stands for:",
      options: [
        "Android Package Kit",
        "App Programming Key",
        "Android Performance Kernel",
        "Application Key",
      ],
      answer: "Android Package Kit",
    },
  ],

  "UI/UX Design": [
    {
      question: "Which tool is used for interface design?",
      options: ["Excel", "Figma", "VS Code", "Oracle"],
      answer: "Figma",
    },
    {
      question: "UX refers to:",
      options: [
        "User Xperience",
        "Universal Experience",
        "User Experience",
        "Unique Experience",
      ],
      answer: "User Experience",
    },
    {
      question: "Wireframes are used to:",
      options: [
        "Test final UI",
        "Define structure",
        "Optimize backend",
        "Write code",
      ],
      answer: "Define structure",
    },
    {
      question: "Which is NOT a design principle?",
      options: ["Contrast", "Alignment", "Proximity", "Programming"],
      answer: "Programming",
    },
    {
      question: "A persona represents:",
      options: [
        "A sample user profile",
        "A coding algorithm",
        "An API",
        "A database schema",
      ],
      answer: "A sample user profile",
    },
  ],

  "Digital Marketing": [
    {
      question: "SEO stands for:",
      options: [
        "Search Engine Optimization",
        "Secure Email Output",
        "System Enhanced Object",
        "Social Engagement Orbit",
      ],
      answer: "Search Engine Optimization",
    },
    {
      question: "Google Ads is used for:",
      options: ["Coding", "Advertising", "Designing", "Database"],
      answer: "Advertising",
    },
    {
      question: "Content marketing focuses on:",
      options: [
        "Creating valuable content",
        "Fixing networks",
        "Making hardware",
        "Developing mobile apps",
      ],
      answer: "Creating valuable content",
    },
    {
      question: "CTR means:",
      options: [
        "Click Through Rate",
        "Click Time Response",
        "Correct Target Reach",
        "Content Trend Range",
      ],
      answer: "Click Through Rate",
    },
    {
      question: "Which platform is best for B2B marketing?",
      options: ["Instagram", "Snapchat", "LinkedIn", "TikTok"],
      answer: "LinkedIn",
    },
  ],
};

function AssessmentPage() {
  const [track, setTrack] = useState("");
  const [step, setStep] = useState("select");
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [courses, setCourses] = useState([]);
  const [loadingCourses, setLoadingCourses] = useState(false);

  const handleStart = () => {
    if (track) setStep("quiz");
  };

  const handleAnswer = (qIndex, selected) => {
    setAnswers({ ...answers, [qIndex]: selected });
  };

  const handleSubmit = () => {
    let correct = 0;
    const quiz = assessmentData[track];

    quiz.forEach((q, i) => {
      if (answers[i] === q.answer) correct++;
    });

    setScore(correct);
    setStep("result");
  };

  // Fetch courses
  useEffect(() => {
    if (step === "result") fetchCourses();
  }, [step]);

  const fetchCourses = async () => {
    setLoadingCourses(true);

    try {
      const response = await fetch(
        `http://localhost:5000/api/courses?query=${encodeURIComponent(
          track + " full course"
        )}`
      );

      const data = await response.json();

      setCourses(data.courses || []);
    } catch (err) {
      console.error("Error fetching courses:", err);
    }

    setLoadingCourses(false);
  };

  return (
    <div className="container mt-5 mb-5">
      <h2 className="mb-4 fw-bold text-center">Skill Assessment</h2>

      {/* STEP 1 — SELECT TRACK */}
      {step === "select" && (
        <>
          <p className="fs-5 text-secondary">
            Select a domain to begin your assessment:
          </p>

          <select
            className="form-select w-50 mb-3"
            value={track}
            onChange={(e) => setTrack(e.target.value)}
          >
            <option value="">-- Choose a domain --</option>

            {Object.keys(assessmentData).map((domain, idx) => (
              <option key={idx} value={domain}>
                {domain}
              </option>
            ))}
          </select>

          <button className="btn btn-primary" onClick={handleStart} disabled={!track}>
            Start Quiz
          </button>
        </>
      )}

      {/* STEP 2 — QUIZ */}
      {step === "quiz" && (
        <div>
          {assessmentData[track].map((q, index) => (
            <div key={index} className="mb-4 p-3 border rounded bg-light shadow-sm">
              <h5>
                {index + 1}. {q.question}
              </h5>

              {q.options.map((opt, i) => (
                <div key={i} className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name={`q${index}`}
                    value={opt}
                    onChange={() => handleAnswer(index, opt)}
                    checked={answers[index] === opt}
                  />
                  <label className="form-check-label">{opt}</label>
                </div>
              ))}
            </div>
          ))}

          <button className="btn btn-success" onClick={handleSubmit}>
            Submit Answers
          </button>
        </div>
      )}

      {/* STEP 3 — RESULTS + RECOMMENDED COURSES */}
      {step === "result" && (
        <div className="mt-4">
          <h4 className="fw-bold text-success">
            Your Score: {score} / {assessmentData[track].length}
          </h4>

          <h4 className="mt-4">Recommended Courses</h4>

          {loadingCourses ? (
            <p>Loading courses...</p>
          ) : (
            <div className="row mt-3">
              {courses.length === 0 && <p>No courses found.</p>}

              {courses.map((c, i) => (
                <div key={i} className="col-md-6 col-lg-4 mb-3">
                  <div className="card shadow-sm h-100">
                    <div className="card-body">
                      <h5 className="card-title">{c.title}</h5>
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary mt-3"
                      >
                        Watch Course
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <button
            className="btn btn-outline-primary mt-4"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}

export default AssessmentPage;
