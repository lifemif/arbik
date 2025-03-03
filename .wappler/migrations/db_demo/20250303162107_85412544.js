
exports.up = function(knex) {
  return knex.schema
    .table('sport_line', async function (table) {
      table.decimal('teoretic_kef').alter();
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('sport_line', async function (table) {
      table.integer('teoretic_kef').alter();
    })
};
