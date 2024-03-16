// passwordUtils.js
const generator = require('generate-password');
const bcrypt = require('bcrypt');

const generateRandomPassword = () => {
  return generator.generate({
    length: 12,
    numbers: true,
    symbols: true,
    uppercase: true,
    excludeSimilarCharacters: true,
  });
};

const hashPassword = async (password) => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

const comparePasswords = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

module.exports = {
  generateRandomPassword,
  hashPassword,
  comparePasswords,
};