const { InternalServerError, isHttpError, BadRequest } = require('http-errors');

const indexController = {
  blockAccess: (req, res, next) => {
    try {
      res.status(404).json('Access Denied');
    } catch (e) {
      if (isHttpError(e)) {
        next(e);
      } else {
        next(new InternalServerError('Something Went Wrong'));
      }
    }
  },

  analyzeData: (req, res, next) => {
    try {
      const { rawData } = req.body;
      const data = Object.values(rawData);

      if (!data) {
        throw new BadRequest('Data is required');
      }
      const resp = data.sort((a, b) => a - b);

      res.status(200).json(resp);
    } catch (e) {
      console.log(e);
      if (isHttpError(e)) {
        next(e);
      } else {
        next(new InternalServerError('Something Went Wrong'));
      }
    }
  },
};

module.exports = indexController;
