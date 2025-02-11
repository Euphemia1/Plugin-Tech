// backend/routes/podcasts.js
const express = require('express');
const Podcast = require('../models/podcast.js');
const router = express.Router();

router.get('/', async (req, res) => {
    const podcasts = await Podcast.find();
    res.json(podcasts);
});

router.post('/', async (req, res) => {
    const { title, description, audioUrl } = req.body;
    const newPodcast = new Podcast({ title, description, audioUrl });
    await newPodcast.save();
    res.status(201).json(newPodcast);
});

module.exports = router;