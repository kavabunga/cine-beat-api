# Cine Beat • API

![Static Badge](https://img.shields.io/badge/status-finished-success) ![Static Badge](https://img.shields.io/badge/JavaScript-gray?logo=JavaScript) ![Static Badge](https://img.shields.io/badge/Node.js-gray?logo=nodedotjs) ![Static Badge](https://img.shields.io/badge/Express.js-gray?logo=Express) ![Static Badge](https://img.shields.io/badge/MongoDB-gray?logo=MongoDB) ![Static Badge](https://img.shields.io/badge/Mongoose-gray?logo=Mongoose) ![Static Badge](https://img.shields.io/badge/Swagger-gray?logo=Swagger)

Server-side for the project **Cine Beat** — web-application for keeping a personal movie collection. The project made at "WEB-development" course at [**Yandex.Practicum**](https://practicum.yandex.ru/ 'Yandex.Practicum'). Demo is available here: [cinebeat.semenkatz.com](https://cinebeat.semenkatz.com)

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
- requests and errors logging;
- api auto-documentation via [swagger-autogen](https://swagger-autogen.github.io/docs).

## Project structure

### Directories

```
/
├── routes // request routers
├── controllers // request controllers for interactions with Users and Movies databases
├── models // database schemes for Users and Movies databases
├── errors // custom error classes
├── util // config, helper functions and constants
```

### Usage

```bash
## Install dependencies (clean install recommended)
npm ci

## Run server in development mode with hot-reload enabled
npm run dev

## Run server
npm run start

## Generate swagger documentation json
npm run swagger
```

### Env

These variables need to be specified in **.env** file located in root folder: `NODE_ENV`, `PORT`, `JWT_SECRET`, `ALLOWED_CORS`, `DOMAIN`

#### Example of .env file config

```text
NODE_ENV=production
PORT=3000
JWT_SECRET=secret-phrase
ALLOWED_CORS=http://something.example.com, https://something.example.com
DOMAIN=example.com
```

## API

| API Endpoint   | HTTP Method | Request Body                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Description                         |
| -------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| `/signup`      | `POST`      | { "email": "foo@bar.com", "password": "foo", "name": "Jaques" }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Sign up a new user                  |
| `/signin`      | `POST`      | { "email": "foo@bar.com", "password": "foo" }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Sign in a user                      |
| `/signout`     | `POST`      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Logout current user                 |
| `/users/me`    | `GET`       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Get information of the current user |
| `/users/me`    | `PATCH`     | { "name": "John", "email": "bar@bar.com" }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Update user information             |
| `/movies/`     | `GET`       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Get a list of movies                |
| `/movies/`     | `POST`      | { "country": "United States", "director": "Richard Marquand", "duration": 132, "year": "1983", "description": "Set one year after The Empire Strikes Back", "image": "https://upload.wikimedia.org/wikipedia/en/b/b2/ReturnOfTheJediPoster1983.jpg", "trailerLink": "https://youtu.be/7L8p7_SLzvU?si=3Q0Kotba9qTncpSP", "nameRU": "Звёздные войны. Эпизод VI: Возвращение джедая", "nameEN": "Return of the Jedi", "thumbnail": "https://upload.wikimedia.org/wikipedia/en/6/62/Return_of_the_Jedi_%281997_re-release_poster%29.jpg", "movieId": 1, } | Add a new movie                     |
| `/movies/{id}` | `DELETE`    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Delete a movie                      |

Note: Some endpoints and descriptions have been simplified in the table for brevity.
