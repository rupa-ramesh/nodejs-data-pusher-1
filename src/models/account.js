const db = require('../config/dbConfig');
const { v4: uuidv4 } = require('uuid');

class Account {
  static create({ email, name, website }, callback) {
    const id = uuidv4();
    const secretToken = uuidv4();
    db.run('INSERT INTO accounts (id, email, name, secretToken, website) VALUES (?, ?, ?, ?, ?)',
      [id, email, name, secretToken, website], callback);
  }

  static get = (callback) => {
    db.all(`SELECT * FROM accounts`, [], callback);
  };

  static findById(id, callback) {
    db.get('SELECT * FROM accounts WHERE id = ?', [id], callback);
  }

  static findBySecretToken(secretToken, callback) {
    db.get('SELECT * FROM accounts WHERE secretToken = ?', [secretToken], callback);
  }

  static delete(id, callback) {
    db.run('DELETE FROM accounts WHERE id = ?', [id], callback);
  }

  static update(id, { email, name, website }, callback) {
    db.run('UPDATE accounts SET email = ?, name = ?, website = ? WHERE id = ?', [email, name, website, id], callback);
  }
}

module.exports = Account;