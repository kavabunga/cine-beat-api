const constants = {
  errors: {
    BAD_REQUEST: {
      code: 400,
      name: 'BadRequest'
    },
    UNAUTHORIZED: {
      code: 401,
      name: 'Unauthorized',
    },
    FORBIDDEN: {
      code: 403,
      name: 'Forbidden'
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
      name: 'DefaultError'
    },
  },
  responseMessages: {
    errorDefault: 'Ошибка по умолчанию',
    errorUserExists: 'Пользователь с таким email уже существует',
    errorJoiValidation: 'Переданы некорректные данные',
    errorMongooseValidation: 'Переданы некорректные данные',
    errorMongooseCast: 'Переданы некорректные данные',
    errorNotFoundMovies: 'Запрошенные фильмы не найдены',
    errorNotFoundMovieById: 'Запрошенный фильм не найден',
    errorForbiddenDeleteMovie: 'Нет прав на удаление фильма',
    errorNotFoundUser: 'Запрошенный пользователь не найден',
    errorNotFoundRoute: 'Запрошенный адрес не найден',
    errorUnauthorizedBadCredentials: 'Переданы неправильные почта и/или пароль',
    errorUnauthorizedNoToken: 'Не передан токен авторизации',
    errorUnauthorizedBadToken: 'Передан неправильный токен авторизации',
    errorSchemaValidatorEmail: 'Передан некорректный email пользователя',
    errorSchemaValidatorUrl: 'Передан недействительный URL',
    successLogout: 'Выход выполнен',
  },
}

module.exports = constants;