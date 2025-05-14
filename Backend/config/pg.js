const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: 'mypguser',
  host: 'localhost',
  database: 'pglistings',
  password: 'updPassword',
  port: 5432,
});


module.exports = pool;
