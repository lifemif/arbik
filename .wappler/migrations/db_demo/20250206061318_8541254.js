
exports.up = function(knex) {
  return knex.schema
    .table('money', async function (table) {
      table.decimal('curse');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('money', async function (table) {
      table.dropColumn('curse');
    })
};
