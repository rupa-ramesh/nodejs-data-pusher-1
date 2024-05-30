const db = require('../config/dbConfig');
const { v4: uuidv4 } = require('uuid');

class Destination {
  static create({ accountId, url, method, headers }, callback) {
    const id = uuidv4();
    db.run('INSERT INTO destinations (id, accountId, url, method, headers) VALUES (?, ?, ?, ?, ?)',
      [id, accountId, url, method, JSON.stringify(headers)], callback);
  }

  static get(id, callback) {
    db.all('SELECT * FROM destinations WHERE id = ?', [id], callback);
  }

  static findByAccountId(accountId, callback) {
    db.all('SELECT * FROM destinations WHERE accountId = ?', [accountId], callback);
  }

  static deleteByAccountId(accountId, callback) {
    db.run('DELETE FROM destinations WHERE accountId = ?', [accountId], callback);
  }

  static update(id, { url, method, headers }, callback) {
    db.run('UPDATE destinations SET url = ?, method = ?, headers = ? WHERE id = ?', 
      [url, method, JSON.stringify(headers), id], callback);
  }

  static delete = (id, callback) => {
    db.run(`DELETE FROM destinations WHERE id = ?`, [id], callback);
  };

}

module.exports = Destination;