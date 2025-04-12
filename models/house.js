const mongoose = require('mongoose');

const HouseSchema = new mongoose.Schema({
  title: String,
  description: String,
  address: String,
  city: String,
  price: Number,
  images: [String],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  location: {
    type: {
      type: String, // "Point"
      enum: ['Point'],
      default: 'Point'
    },
    coordinates: {
      type: [Number], 
      default: [0, 0]
    }
  }
}, { timestamps: true });

HouseSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('House', HouseSchema);
