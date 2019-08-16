
exports.up = function(knex) {
  return knex.schema.createTable(`cars`, table => {
    table.increments(`id`)
    table
      .varchar(`VIN`, 17)
      .unique()
      .notNullable()
    table.text(`Make`).notNullable()
    table.varchar(`Model`).notNullable()
    table.integer(`Mileage`).notNullable()
    table.varchar(`Transmission`)
    table.varchar(`Title`)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists(`cars`)
};
