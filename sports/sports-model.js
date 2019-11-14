const db = require('../data/db-config');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
    //db must match table in database
  return db('sports').select('id', 'teamname', 'password', 'sport');
}

function findBy(filter) {
  return db('sports').where(filter);
}

async function add(team) {
    console.log(`add`, team)
  const [id] = await db('sports').insert(team);

  return findById(id);
}



function findById(id) {
  return db('sports')
    .where({ id })
    .first();
}
