
exports.up = function(knex) {
  return knex.schema
    .createTable('exchange_rates', async function (table) {
      table.increments('id');
      table.string('user_uuid');
      table.string('valuta_uuid');
      table.datetime('data_time').defaultTo(knex.fn.now());
      table.string('name_valuta');
      table.decimal('curse');
      table.text('description');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('exchange_rates')
};
