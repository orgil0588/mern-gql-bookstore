import Book from "../../models/Book";

export const resolvers = {
  Query: {
    books: async (_parent: any, _args: any) => {
      return await Book.find();
    },
    book: async (_parent: any, args: any) => {
      return await Book.findById(args.id);
    },
    get_books: async (_parent: any, args: any) => {
      console.log(args.page)
      return await Book.find()
        .skip(args.page * 15)
        .limit(15);
    },
    book_count: async () => {
      return await Book.countDocuments({});
    },
  },
  Mutation: {
    createBook: async (_parent: any, args: any) => {
      return await Book.create(args);
    },
    deleteBook: async (_parent: any, args: any) => {
      return await Book.findByIdAndRemove(args._id);
    },
    updateBook: async (_parent: any, args: any) => {
      interface IUpdateBook {
        _id: string;
        title: string;
        pageCount: number;
        publishDate: string;
        thumbnailUrl: string;
        shortDescription: string;
        longDescription: string;
        status: string;
        authors: string[];
        categories: string[];
      }
      const {
        _id,
        title,
        pageCount,
        publishDate,
        thumbnailUrl,
        shortDescription,
        longDescription,
        status,
        authors,
        categories,
      }: IUpdateBook = { ...args.input };

      return await Book.findByIdAndUpdate(
        { _id: _id },
        {
          title,
          pageCount,
          publishDate,
          thumbnailUrl,
          shortDescription,
          longDescription,
          status,
          authors,
          categories,
        }
      );
    },
  },
};
