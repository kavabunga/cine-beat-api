# :popcorn: Movie Explorer (back-end) • ![Status in progress](https://badgen.net/badge/status/in%20progress/yellow)

Back-end for the project **Movie Explorer** — web-application for keeping a personal movie collection.

## Technology

- [**Node.js**](https://nodejs.org/en/ "Node.js")
- [**Express.js**](https://expressjs.com "Express.js")
- [**MongoDB**](https://www.mongodb.com "MongoDB") + [**Mongoose.js**](https://mongoosejs.com "Mongoose")

## Features

- user authorization;
- authentication via **JWT** stored safely in httpOnly cookies;
- editing user profile data;
- posting and deleting movies;
- server requests validation (via **Celebrate** library);
- database entries validation (via **Mongoose** scheme validators);
- security middlewares:
  - headers control by [helmet](https://www.npmjs.com/package/helmet);
  - request limiting by [express-rate-limit](https://www.npmjs.com/package/express-rate-limit);
  - XSS sanitation by [express-xss-sanitizer](https://www.npmjs.com/package/express-xss-sanitizer);
  - CORS control by [cors](https://www.npmjs.com/package/cors);
- requests and errors logging.

## Project structure

### Directories:

`/routes` — request routers  
`/controllers` — request controllers for interactions with **users** and **movies** databases  
`/models` — schemes for **users** and **movies** databases  
`/errors` — custom error classes  
`/util` — config and constants

### Usage:

`npm i` — install dependencies  
`npm run start` — run server  
`npm run dev` — run server in development mode with **hot-reload** enabled

## API

**In progress**

## Address

[https://api.quentin.nomoredomains.work](https://api.quentin.nomoredomains.work)

IP: 62.84.120.123
