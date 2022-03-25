const { isHttpError } = require('http-errors');

module.exports = (app) => {
  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    console.log(err);
    if (isHttpError(err)) {
      const code = err.getCode ? err.getCode() : 400;

      return res.status(code).json({
        status: 'error',
        message: err.message,
      });
    }
    const newCode = err.message === 'jwt expired' ? 401 : 500;
    const newMessage = err.message === 'jwt expired' ? 'Session Expired, Login again' : err.message;
    return res.status(newCode).json({
      status: 'error',
      message: newMessage,
    });
  });
};
