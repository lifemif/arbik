
exports.up = function(knex) {
  return knex.schema
    .table('sport_line', async function (table) {
      table.string('spread_uuid');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('sport_line', async function (table) {
      table.dropColumn('spread_uuid');
    })
};
