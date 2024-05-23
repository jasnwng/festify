const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const dbName = 'festify';

async function connect() {
  await mongoose.connect(process.env.DATABASE_URL);
  console.log('db connected');
}

connect().catch(err => console.log(err));

module.exports = mongoose;