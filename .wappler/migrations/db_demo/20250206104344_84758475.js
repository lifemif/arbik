
exports.up = function(knex) {
  return knex.schema
    .table('fin_rez', async function (table) {
      table.string('bukmaker');
      table.string('currency');
      table.decimal('summa_currency');
      table.decimal('curse');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('fin_rez', async function (table) {
      table.dropColumn('bukmaker');
      table.dropColumn('currency');
      table.dropColumn('summa_currency');
      table.dropColumn('curse');
    })
};
