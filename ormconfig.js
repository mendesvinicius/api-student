module.exports = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: false
  },
  entities: ["./src/modules/**/models/{*.js, *.ts}"],
  migrations: ["./src/shared/migrations/{*.js, *.ts}"],
  synchronize: true,
  cli: {
    migrationsDir: "./src/shared/migrations",
  },
};
