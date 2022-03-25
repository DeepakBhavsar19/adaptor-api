const bcrypt = require('bcrypt');

const cyptjs = {};

cyptjs.cryptPassword = async function (password) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

cyptjs.comparePassword = function (plainPass, hashword) {
  return bcrypt.compare(plainPass, hashword);
};

module.exports = cyptjs;
