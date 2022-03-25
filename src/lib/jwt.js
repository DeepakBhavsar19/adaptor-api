// Configuration for jwt token to secure path

const jwtExpress = require('express-jwt');
const jwtToken = require('jsonwebtoken');

module.exports = {
  auth: jwtExpress({
    secret: process.env.JWT_SECRET,
    algorithms: ['sha1', 'RS256', 'HS256'],
    userProperty: process.env.JWT_PROPERTY,
  }),

  generateToken: async function (userInfo) {
    const expiry = new Date();
    expiry.setDate(expiry.getMinutes() + 1);
    return jwtToken.sign(
      {
        _id: userInfo._id,
        name: userInfo.name,
        email: userInfo.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: '24h' },
    );
  },
  generateEncytdCode: async function (userInfo, secret) {
    const expiry = new Date();
    expiry.setDate(expiry.getMinutes() + 1);
    return jwtToken.sign(
      {
        email: userInfo.email,
      },
      secret,
      { expiresIn: '24h' },
    );
  },
};
