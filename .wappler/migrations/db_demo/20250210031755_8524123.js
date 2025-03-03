
exports.up = function(knex) {
  return knex.schema
    .renameTable('sporting_line', 'sport_line')
};

exports.down = function(knex) {
  return knex.schema
    .renameTable('sport_line', 'sporting_line')
};
