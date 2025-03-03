
exports.up = function(knex) {
  return knex.schema
    .createTable('sporting_line', async function (table) {
      table.increments('id');
      table.string('user_uuid');
      table.string('uuid_sport-line');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('sporting_line')
};
