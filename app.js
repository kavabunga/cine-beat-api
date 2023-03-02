require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { devMongoURL } = require('./util/constants.ts');

const router = require('./routes');
const errorHandler = require('./middlewares/errorHandler');

const { NODE_ENV, PORT = 3000, MONGO_URL } = process.env;

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
app.use(errorHandler);

mongoose.connect(NODE_ENV === 'production' ? MONGO_URL : devMongoURL);

app.listen(NODE_ENV === 'production' ? PORT : 3000);
