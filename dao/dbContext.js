const knex = require('knex');

const dbContext = knex({
  client: 'sqlite3',
  connection: {
    filename: './infomanager.db',
  },
  useNullAsDefault: true,
});

module.exports = dbContext;
