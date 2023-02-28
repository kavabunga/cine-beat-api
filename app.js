const express = require('express');
const mongoose = require('mongoose');

const router = require('./routes');

const { PORT = 3000 } = process.env;

const app = express();

// rate-limiter

// requests log

app.use(express.json());

// cookie parser

// Security:
// Helmet
// CORS
// XSS

app.use(router);

// errors log

// Process errors

mongoose.connect('mongodb://localhost:27017/bitfilmsdb');

app.listen(PORT, () => {
  console.log(`App is here on port: ${PORT}`);
});
