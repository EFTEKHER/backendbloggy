const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { PORT, MONGO_URI } = require('./config');
const authRoutes = require('./routes/auth');
const blogRoutes = require('./routes/blog');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);

// MongoDB Connection
mongoose.connect(MONGO_URI, {  })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
