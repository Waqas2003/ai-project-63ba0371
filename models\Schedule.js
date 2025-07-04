const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  date: Date,
  opponent: String,
  venue: String
});

const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;