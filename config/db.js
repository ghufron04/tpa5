const mongoose = require('mongoose');

const DB_URL = 'mongodb+srv://kuroky:aselole@cluster0.tgwu19x.mongodb.net/db_todo?retryWrites=true&w=majority'

const db = mongoose.connect(DB_URL)

module.exports = db