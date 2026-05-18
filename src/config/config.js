require('dotenv').config();

module.exports = {
  development: {
    username: process.env.db_user,
    password: process.env.db_pass,
    database: process.env.db_name,
    host: process.env.db_host,
    dialect: 'postgres',
  },
};
console.log(process.env.db_pass);