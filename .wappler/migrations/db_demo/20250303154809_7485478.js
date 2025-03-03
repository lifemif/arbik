
exports.up = function(knex) {
  return knex.schema
    .table('sport_line', async function (table) {
      table.decimal('inog_kef');
      table.decimal('stavka_valuta');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('sport_line', async function (table) {
      table.dropColumn('inog_kef');
      table.dropColumn('stavka_valuta');
    })
};
