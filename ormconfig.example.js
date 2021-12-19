module.exports = {
  "type": "postgres",
  "host": process.env.DB_HOST,
  "port": process.env.DB_PORT,
  "username": process.env.DB_USER,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_NAME,
  "entities": ["./src/modules/**/models/*.ts"],
  "migrations": ["./src/shared/migrations/*.ts"],
  "synchronize": true,
  "cli": {
    "migrationsDir": "./src/shared/migrations"
  }
}
