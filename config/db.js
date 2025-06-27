const lowDb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const db = lowDb(new FileSync('db.json'));
db.defaults({ posts: [] }).write();

module.exports = db;