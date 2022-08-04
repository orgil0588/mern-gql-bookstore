import { gql } from "apollo-server-express"

export const typeDefs = gql`
  type Book {
    _id: ID!
    title: String!
    isbn: String
    pageCount: Int!
    publishDate: String
    thumbnailUrl: String
    shortDescription: String
    longDescription: String
    status: String!
    authors: [String!]
    categories: [String!]

  }

  # Queries
  type Query {
    books: [Book!]!
    book(id: ID!) : Book!
  }

  #Mutation
  type Mutation {
    createBook(
    title: String!,
    pageCount: Int!,
    publishDate: String!,
    thumbnailUrl: String!,
    shortDescription: String!,
    longDescription: String!,
    status: String!,
    authors: [String!],
    categories: [String!],
    ): Book!
  }
`;

