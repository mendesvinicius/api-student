import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { StudentResolver } from "../modules/student/resolvers/studentResolver";

async function runServer() {
    createConnection();
    const schema = await buildSchema({
        resolvers: [StudentResolver],
    });
    const server = new ApolloServer({
        schema,
        cors: {
            origin: "*",
            methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
            preflightContinue: false,
            optionsSuccessStatus: 204,
        },
    });

    await server.listen(process.env.PORT || 8000);
}

runServer();
