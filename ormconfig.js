const prodConfig = {
    type: "postgres",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: {
        rejectUnauthorized: false
    },
    entities: ["./dist/modules/**/models/*.js"],
    migrations: ["./dist/shared/migrations/*.js"],
    synchronize: true,
    cli: {
        migrationsDir: "./dist/shared/migrations",
    },
};

const devConfig = {
    type: "postgres",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ["./src/modules/**/models/*.ts"],
    migrations: ["./src/shared/migrations/*.ts"],
    synchronize: true,
    cli: {
        migrationsDir: "./src/shared/migrations",
    },
}

module.exports = process.env.NODE_ENV === 'dev' ? devConfig : prodConfig;
