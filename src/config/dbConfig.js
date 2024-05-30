const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const dbPath = process.env.DATABASE_URL || path.resolve(__dirname, './database.db');
const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
  if(err) return console.log(err);
});

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS accounts (
    id TEXT PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    secretToken TEXT NOT NULL,
    website TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS destinations (
    id TEXT PRIMARY KEY,
    accountId TEXT NOT NULL,
    url TEXT NOT NULL,
    method TEXT NOT NULL,
    headers TEXT NOT NULL,
    FOREIGN KEY (accountId) REFERENCES accounts(id) ON DELETE CASCADE
  )`);
});

module.exports = db;