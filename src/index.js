const express = require('express');
const cors = require('cors');

// Routes
const helloWorldRoutes = require('./routes/helloWorldRoutes.js');

// Middlewares
const logger = require('./middlewares/logger.js');

const app = express();

app.use(express.json());
app.use(cors());
app.use(logger);
app.use('/hello-world', helloWorldRoutes);

module.exports = app;
