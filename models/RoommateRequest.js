const mongoose = require('mongoose');

const RoommateRequestSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  description: { type: String },
  preferredCity: { type: String },
  budget: { type: Number },
  availableFrom: { type: Date },
  availableTo: { type: Date },
}, { timestamps: true });

module.exports = mongoose.model('RoommateRequest', RoommateRequestSchema);
