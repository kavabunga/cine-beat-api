const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const devMongoURL = require('./util/constants');

const router = require('./routes');

const { PORT = 3000, MONGO_URL = devMongoURL } = process.env;

const app = express();

// rate-limiter

// requests log

app.use(express.json());

// cookie parser
app.use(cookieParser());

// Security:
// Helmet
// CORS
// XSS

app.use(router);

// errors log

// Process errors

mongoose.connect(MONGO_URL);

app.listen(PORT, () => {
  console.log(`App is here on port: ${PORT}`);
});
