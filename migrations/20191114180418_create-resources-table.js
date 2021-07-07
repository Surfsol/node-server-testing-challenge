
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('olympics', teams => {
        teams.increments();

        teams
            .string('teamname', 50)
            .notNullable()
            .unique()
        teams.string('password', 20).notNullable()
        teams.string('sport')
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('olympics');
};
