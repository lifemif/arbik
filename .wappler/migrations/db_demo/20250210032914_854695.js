
exports.up = function(knex) {
  return knex.schema
    .table('sport_line', async function (table) {
      table.decimal('kurs_valuti');
      table.decimal('summa_valuti');
      table.decimal('itogo');
      table.string('stratery');
      table.string('tsikl_uuid');
      table.decimal('tsikl_sector');
      table.string('skrap_uuid');
      table.string('aziat_uuid');
      table.string('status');
      table.string('raschet');
      table.text('description');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('sport_line', async function (table) {
      table.dropColumn('kurs_valuti');
      table.dropColumn('summa_valuti');
      table.dropColumn('itogo');
      table.dropColumn('stratery');
      table.dropColumn('tsikl_uuid');
      table.dropColumn('tsikl_sector');
      table.dropColumn('skrap_uuid');
      table.dropColumn('aziat_uuid');
      table.dropColumn('status');
      table.dropColumn('raschet');
      table.dropColumn('description');
    })
};
