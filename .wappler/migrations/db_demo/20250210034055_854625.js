
exports.up = function(knex) {
  return knex.schema
    .table('sport_line', async function (table) {
      table.datetime('data-time_end').alter();
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('sport_line', async function (table) {
      table.string('data-time_end', 255).alter();
    })
};
