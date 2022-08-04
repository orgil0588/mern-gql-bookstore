import Book from "../../models/Book"

export const resolvers = {
  Query: {
    books: async () => {
      return await Book.find();
    },
    book: async (_parent: any, args: any) => {
      return await Book.findById(args.id)
    }
  },
  Mutation: {
    createBook: async (_parent: any, args: any) => {
      return await Book.create(args);
    },
  },
};

