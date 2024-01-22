require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { xss } = require('express-xss-sanitizer');
const helmet = require('helmet');
const cors = require('cors');
const rateLimiter = require('./middlewares/requestRateLimiter');
const { devMongoURL, corsOptions } = require('./util/config.ts');

const router = require('./routes');
const errorHandler = require('./middlewares/errorHandler');
const { requestLogger, errorLogger } = require('./middlewares/requestLogger');

const { NODE_ENV, PORT = 3002, MONGO_URL } = process.env;

const app = express();

// Log requests
app.use(requestLogger);

// Limit requests
app.use(rateLimiter);

// Parse body and cookies
app.use(express.json());
app.use(cookieParser());

// Cors for preflight
app.options('*', cors(corsOptions));

// Security:
app.use(cors(corsOptions));
app.use(xss());
app.use(helmet());

// Main router
app.use(router);

// Log errors
app.use(errorLogger);

// Process errors
app.use(errorHandler);

mongoose.connect(NODE_ENV === 'production' ? MONGO_URL : devMongoURL);

app.listen(NODE_ENV === 'production' ? PORT : 3002);
