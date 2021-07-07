const db = require('../data/db-config');

module.exports = {
  add,
  find,
  findBy,
  findById,
  remove,
};

function find() {
    //db must match table in database
  return db('olympics').select('id', 'teamname', 'password');
}

function findBy(filter) {
  return db('olympics').where(filter);
}

async function add(team) {
    console.log(`add`, team)
  const [id] = await db('olympics').insert(team);

  return findById(id);
}



function findById(id) {
  return db('olympics')
    .where({ id })
    .first();
}

function remove(id){
    return db('olympics')
    .delete(id)
    .where({id: id})
}
