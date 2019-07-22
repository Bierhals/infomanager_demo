import * as knex from 'knex';

export const dbContext = knex({
  client: 'sqlite3',
  connection: {
    filename: './infomanager.db',
  },
  useNullAsDefault: true,
});