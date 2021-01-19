import * as knex from 'knex';

// eslint-disable-next-line import/prefer-default-export
export const dbContext = knex({
  client: 'sqlite3',
  connection: {
    filename: './infomanager.db',
  },
  useNullAsDefault: true,
});
