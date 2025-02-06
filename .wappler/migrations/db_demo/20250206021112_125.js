
exports.up = function(knex) {
  return knex.schema
    .table('setting_valuta', async function (table) {
      table.dropColumn('curse');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('setting_valuta', async function (table) {
      table.decimal('curse');
    })
};
