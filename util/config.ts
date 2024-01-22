const config = {
  devSecret: 'krabsburger',
  devMongoURL: 'mongodb://localhost:27017/bitfilmsdb',
  devDomain: '.localhost',
  rateLimiterOptions: {
    windowMs: 60 * 1000, // 1 minute
    max: 100,
  },
  corsOptions: {
    origin: true, // Reflect origin
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    credentials: true, // Allow cookies
  },
  loggerOptions: {
    requestLogFilename: 'request.log',
    errorLogFilename: 'error.log',
  },
};

module.exports = config;
