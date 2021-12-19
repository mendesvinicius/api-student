import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { StudentResolver } from "../modules/student/resolvers/studentResolver";

async function runServer() 
{
  createConnection();
  const schema = await buildSchema({
    resolvers: [StudentResolver],
  });
  const server = new ApolloServer({ schema });
  await server.listen(8000);

  console.log("Server started at port ::8000");
}

runServer();
