module.exports = {
  development: {
    client: `sqlite3`,
    connection: {
      filename: `./database/cars.db3`,
    },
    useNullAsDefault: true,
    migrations: {
      directory: `./database/migrations/`
    }
  },
  staging: {},
  production: {},
}