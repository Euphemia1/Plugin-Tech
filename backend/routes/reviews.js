// backend/routes/reviews.js
const express = require('express');
const Review = require('../models/Review');
const router = express.Router();

router.get('/', async (req, res) => {
    const reviews = await Review.find();
    res.json(reviews);
});

router.post('/', async (req, res) => {
    const { title, content, rating } = req.body;
    const newReview = new Review({ title, content, rating });
    await newReview.save();
    res.status(201).json(newReview);
});

module.exports = router;