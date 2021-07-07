npm i nodemon-D
cross-env


scripts:
test: cross-env DB_ENV=testing jest --watch

added to Knex

--------------------------------------------------------------
directed to testing database

},
    testing: {
      client: 'sqlite3',
      connection: {
        filename: './data/test.db3',
      },
      useNullAsDefault: true,
      migrations: {
        directory: './data/migrations',
      },
      seeds: {
        directory: './data/seeds',
      },
    },

------------------------------------------------------
sportsModel.spec.js
//for test db
testing data access layer