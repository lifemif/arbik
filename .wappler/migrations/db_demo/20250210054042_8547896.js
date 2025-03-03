
exports.up = function(knex) {
  return knex.schema
    .table('sport_line', async function (table) {
      table.string('vid_stsvki');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('sport_line', async function (table) {
      table.dropColumn('vid_stsvki');
    })
};
