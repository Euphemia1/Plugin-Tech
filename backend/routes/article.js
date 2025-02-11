// backend/routes/articles.js
const express = require('express');
const Article = require('../models/article.js');
const router = express.Router();

// Get all articles
router.get('/', async (req, res) => {
    const articles = await Article.find();
    res.json(articles);
});

// Add a new article
router.post('/', async (req, res) => {
    const { title, content, image } = req.body;
    const newArticle = new Article({ title, content, image });
    await newArticle.save();
    res.status(201).json(newArticle);
});

module.exports = router;