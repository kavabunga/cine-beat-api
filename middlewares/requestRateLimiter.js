const rateLimit = require('express-rate-limit');
const { rateLimiterOptions } = require('../util/config.ts');

const limiter = rateLimit(rateLimiterOptions);

module.exports = limiter;
