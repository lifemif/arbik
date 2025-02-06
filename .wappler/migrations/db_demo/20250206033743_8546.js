
exports.up = function(knex) {
  return knex.schema
    .table('money', async function (table) {
      table.string('currency');
      table.decimal('summ_curerency');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('money', async function (table) {
      table.dropColumn('currency');
      table.dropColumn('summ_curerency');
    })
};
