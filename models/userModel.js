const { usersDB } = require("../database/database");

function findUser(username, password, callback) {
  const query = "SELECT * FROM Users WHERE username = ? AND password = ?";
  usersDB.get(query, [username, password], callback);
}

module.exports = { findUser };
