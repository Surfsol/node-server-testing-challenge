// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/sports.sqlite3'
    },
    useNullAsDefault: true //prevents bugs and issues 
      },
        migrations: {
          directory: './data/migrations' //to put migrations under folder data
        },
        seeds: {
          directory: './data/seeds'
        },
        // add the following
        pool: {
          afterCreate: (conn, done) => {
            // runs after a connection is made to the sqlite engine
            conn.run('PRAGMA foreign_keys = ON', done); // turn on Foreign Key enforcement
          },
    },
    testing: {
      client: 'sqlite3',
      connection: {
        filename: './data/test.db3',
      },
      useNullAsDefault: true,
      migrations: {
        directory: './migrations',
      },
      seeds: {
        directory: './data/seeds',
      },
    },
  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
