// backend/models/Podcast.js
const mongoose = require('mongoose');

const podcastSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    audioUrl: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Podcast', podcastSchema);