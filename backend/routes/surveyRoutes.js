const express = require('express');
const jwt = require('jsonwebtoken');
const Survey = require('../models/Survey');

const router = express.Router();

// Middleware to verify JWT token
function verify(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(403).send('Token required');

  const token = authHeader.split(' ')[1]; // Authorization: Bearer <token>

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (err) {
    res.status(403).send('Invalid token');
  }
}

// Submit survey route
router.post('/', verify, async (req, res) => {
  try {
    const { interests, skills, preferredIndustry, educationLevel } = req.body;

    const survey = new Survey({
      userId: req.user.userId,
      interests,
      skills,
      preferredIndustry,
      educationLevel
    });

    await survey.save();
    res.status(201).send('Survey submitted successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error submitting survey');
  }
});

module.exports = router;
