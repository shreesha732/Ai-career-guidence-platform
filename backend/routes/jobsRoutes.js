const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

const APP_ID = process.env.APP_ID;
const APP_KEY = process.env.APP_KEY;

// GET /api/jobs?what=developer&where=bangalore
router.get('/', async (req, res) => {
  try {
    const { what = 'developer', where = 'New York' } = req.query;

    const url = `https://api.adzuna.com/v1/api/jobs/us/search/1`;

    // 🔍 Debug log
    console.log('➡️ Requesting Adzuna API:', {
      url,
      params: {
        app_id: APP_ID,
        app_key: APP_KEY,
        results_per_page: 10,
        what,
        where,
      },
    });

    const response = await axios.get(url, {
      params: {
        app_id: APP_ID,
        app_key: APP_KEY,
        results_per_page: 10,
        what,
        where,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('❌ Adzuna API error:', error.response?.data || error.message);
    res.status(500).json({
      error: 'Failed to fetch jobs',
      details: error.response?.data || error.message,
    });
  }
});

module.exports = router;
