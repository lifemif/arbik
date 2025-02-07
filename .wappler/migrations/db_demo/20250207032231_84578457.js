
exports.up = function(knex) {
  return knex.schema
    .renameTable('exchange_rates', 'curse_valut')
};

exports.down = function(knex) {
  return knex.schema
    .renameTable('curse_valut', 'exchange_rates')
};
