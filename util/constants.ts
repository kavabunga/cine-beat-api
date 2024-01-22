const constants = {
  errors: {
    BAD_REQUEST: {
      code: 400,
      name: 'BadRequest',
    },
    UNAUTHORIZED: {
      code: 401,
      name: 'Unauthorized',
    },
    FORBIDDEN: {
      code: 403,
      name: 'Forbidden',
    },
    NOT_FOUND: {
      code: 404,
      name: 'NotFound',
    },
    CONFLICT: {
      code: 409,
      name: 'Conflict',
    },
    DEFAULT: {
      code: 500,
      name: 'DefaultError',
    },
  },
  responseMessages: {
    errorDefault: 'Default error',
    errorUserExists: 'A user with this email already exists',
    errorJoiValidation: 'Invalid data passed',
    errorMongooseValidation: 'Invalid data passed',
    errorMongooseCast: 'Invalid data passed',
    errorNotFoundMovies: 'Requested movies not found',
    errorNotFoundMovieById: 'Requested movie not found',
    errorForbiddenDeleteMovie: 'No permission to delete the movie',
    errorNotFoundUser: 'Requested user not found',
    errorNotFoundRoute: 'Requested route not found',
    errorUnauthorizedBadCredentials: 'Incorrect email and/or password provided',
    errorUnauthorizedNoToken: 'Authorization token not provided',
    errorUnauthorizedBadToken: 'Invalid authorization token provided',
    errorSchemaValidatorEmail: 'Invalid user email provided',
    errorSchemaValidatorUrl: 'Invalid URL provided',
    successLogout: 'Logout successful',
  },
};

module.exports = constants;
