
import { ApolloServer } from "apollo-server-express";
import express from "express"

import dotenv from "dotenv"

import { typeDefs } from './graphql/schema/typeDefs'
import { resolvers } from './graphql/resolvers/index'

import connectDB from "./config/db"


dotenv.config();

const app = express();

connectDB();

const initServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });
};
initServer();
app.listen(process.env.PORT || 8000, () => {
  console.log(`Server running : ${process.env.PORT || 8000}`);
});
