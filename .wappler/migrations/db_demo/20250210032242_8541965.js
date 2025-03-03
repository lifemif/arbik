
exports.up = function(knex) {
  return knex.schema
    .table('sport_line', async function (table) {
      table.datetime('data-time_start');
      table.string('data-time_end');
      table.string('vid_sporta');
      table.string('name_playrs');
      table.string('tip_stavki');
      table.decimal('zatrata');
      table.decimal('teoretic_kef');
      table.decimal('practik_kef');
      table.decimal('stavka');
      table.string('bukmaker');
      table.string('valuta');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('sport_line', async function (table) {
      table.dropColumn('data-time_start');
      table.dropColumn('data-time_end');
      table.dropColumn('vid_sporta');
      table.dropColumn('name_playrs');
      table.dropColumn('tip_stavki');
      table.dropColumn('zatrata');
      table.dropColumn('teoretic_kef');
      table.dropColumn('practik_kef');
      table.dropColumn('stavka');
      table.dropColumn('bukmaker');
      table.dropColumn('valuta');
    })
};
