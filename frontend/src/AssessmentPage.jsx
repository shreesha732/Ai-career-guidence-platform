// src/pages/AssessmentPage.jsx
import React, { useState } from 'react';

const assessmentData = {
  'Web Development': [
    {
      question: 'What does HTML stand for?',
      options: ['Hyper Trainer Marking Language', 'Hyper Text Markup Language', 'Hyper Text Markdown Language', 'None of the above'],
      answer: 'Hyper Text Markup Language',
    },
    {
      question: 'Which of these is a JavaScript framework?',
      options: ['Laravel', 'Django', 'React', 'Flask'],
      answer: 'React',
    },
    {
      question: 'CSS is used for:',
      options: ['Structure', 'Logic', 'Styling', 'Database'],
      answer: 'Styling',
    },
    {
      question: 'Which HTTP method is used to update data?',
      options: ['GET', 'POST', 'PUT', 'DELETE'],
      answer: 'PUT',
    },
    {
      question: 'React uses what type of DOM?',
      options: ['Real DOM', 'Shadow DOM', 'Virtual DOM', 'Document DOM'],
      answer: 'Virtual DOM',
    },
  ],
  'Data Science': [
    {
      question: 'Which library is used for data manipulation in Python?',
      options: ['NumPy', 'TensorFlow', 'Pandas', 'Keras'],
      answer: 'Pandas',
    },
    {
      question: 'What is the main language used for Data Science?',
      options: ['Java', 'Python', 'C++', 'Ruby'],
      answer: 'Python',
    },
    {
      question: 'Which of the following is a supervised learning algorithm?',
      options: ['K-Means', 'Linear Regression', 'DBSCAN', 'PCA'],
      answer: 'Linear Regression',
    },
    {
      question: 'What is the purpose of Matplotlib?',
      options: ['Text Processing', 'Plotting Graphs', 'Image Recognition', 'Database'],
      answer: 'Plotting Graphs',
    },
    {
      question: 'Which library is used for deep learning in Python?',
      options: ['Scikit-learn', 'Seaborn', 'Keras', 'OpenCV'],
      answer: 'Keras',
    },
  ],
  'Cybersecurity': [
    {
      question: 'Which of the following is a common type of malware?',
      options: ['Firewall', 'Trojan', 'Antivirus', 'Router'],
      answer: 'Trojan',
    },
    {
      question: 'What does VPN stand for?',
      options: ['Virtual Private Network', 'Variable Privacy Network', 'Verified Protected Network', 'None of the above'],
      answer: 'Virtual Private Network',
    },
    {
      question: 'Phishing attacks are aimed at:',
      options: ['Servers', 'Firewalls', 'People', 'Software'],
      answer: 'People',
    },
    {
      question: 'Which protocol is secure?',
      options: ['HTTP', 'FTP', 'HTTPS', 'Telnet'],
      answer: 'HTTPS',
    },
    {
      question: 'Which tool is used for penetration testing?',
      options: ['Postman', 'Kali Linux', 'Wireshark', 'Nmap'],
      answer: 'Kali Linux',
    },
  ],
  'Cloud Computing': [
    {
      question: 'What does IaaS stand for?',
      options: ['Internet as a Software', 'Infrastructure as a Service', 'Integration as a Solution', 'None of these'],
      answer: 'Infrastructure as a Service',
    },
    {
      question: 'Which company provides AWS?',
      options: ['Apple', 'Microsoft', 'Amazon', 'Google'],
      answer: 'Amazon',
    },
    {
      question: 'Which of the following is a cloud deployment model?',
      options: ['Hybrid', 'Kernel', 'Node', 'Container'],
      answer: 'Hybrid',
    },
    {
      question: 'Which service in AWS is used for compute?',
      options: ['S3', 'EC2', 'Lambda', 'RDS'],
      answer: 'EC2',
    },
    {
      question: 'Azure is a cloud platform by:',
      options: ['Google', 'Microsoft', 'Amazon', 'IBM'],
      answer: 'Microsoft',
    },
  ],
};


const courseRecommendations = {
  'Web Development': ['Frontend Bootcamp', 'Fullstack Web Dev Course', 'Advanced React'],
  'Data Science': ['Intro to Data Science', 'Python for Data Analysis', 'Machine Learning Mastery'],
  'Cybersecurity': ['Cybersecurity Fundamentals', 'Ethical Hacking Bootcamp', 'Network Security Pro'],
  'Cloud Computing': ['AWS Solutions Architect', 'Azure Fundamentals', 'Cloud DevOps with Google Cloud'],
};


function AssessmentPage() {
  const [track, setTrack] = useState('');
  const [step, setStep] = useState('select'); // select | quiz | result
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);

  const handleStart = () => {
    if (track) setStep('quiz');
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
    setStep('result');
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Skill Assessment</h2>

      {step === 'select' && (
        <>
          <p>Select a track to begin your assessment:</p>
          <select className="form-select w-50 mb-3" value={track} onChange={(e) => setTrack(e.target.value)}>
            <option value="">-- Choose a domain --</option>
            <option value="Web Development">Web Development</option>
            <option value="Data Science">Data Science</option>
            <option value="Cybersecurity">Cybersecurity</option>
            <option value="Cloud Computing">Cloud Computing</option>
          </select>
          <button className="btn btn-primary" onClick={handleStart} disabled={!track}>Start Quiz</button>
        </>
      )}

      {step === 'quiz' && (
        <div>
          {assessmentData[track].map((q, index) => (
            <div key={index} className="mb-4">
              <h5>{index + 1}. {q.question}</h5>
              {q.options.map((opt, i) => (
                <div key={i} className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name={`q${index}`}
                    id={`q${index}_opt${i}`}
                    value={opt}
                    onChange={() => handleAnswer(index, opt)}
                    checked={answers[index] === opt}
                  />
                  <label className="form-check-label" htmlFor={`q${index}_opt${i}`}>{opt}</label>
                </div>
              ))}
            </div>
          ))}
          <button className="btn btn-success" onClick={handleSubmit}>Submit Answers</button>
        </div>
      )}

      {step === 'result' && (
        <div>
          <h4>Your Score: {score} / {assessmentData[track].length}</h4>
          <p className="mt-3">Based on your performance, we recommend:</p>
          <ul>
            {courseRecommendations[track].map((course, i) => (
              <li key={i}>{course}</li>
            ))}
          </ul>
          <button className="btn btn-outline-primary mt-3" onClick={() => window.location.reload()}>Try Again</button>
        </div>
      )}
    </div>
  );
}

export default AssessmentPage;
