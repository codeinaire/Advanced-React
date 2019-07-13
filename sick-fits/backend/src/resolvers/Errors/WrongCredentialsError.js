const { createError } = require('apollo-errors');

const WrongCredentialsError = createError('WrongCredentialsError', {
  message: 'The credentials you provided don\'t have the appropriate permissions here'
});

module.exports = WrongCredentialsError;
