const mongoose = require('mongoose');

const SurveySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  interests: [String],
  skills: [String],
  preferredIndustry: String,
  educationLevel: String
});

module.exports = mongoose.model('Survey', SurveySchema);
