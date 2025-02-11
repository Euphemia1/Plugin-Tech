// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const articlesRoutes = require('./routes/articles');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/unplugged-insights', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const podcastsRoutes = require('./routes/podcasts');
const reviewsRoutes = require('./routes/reviews');

app.use('/api/podcasts', podcastsRoutes);
app.use('/api/reviews', reviewsRoutes);
// Routes
app.use('/api/articles', articlesRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});