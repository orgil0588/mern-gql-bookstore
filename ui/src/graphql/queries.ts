import { gql } from "@apollo/client";
export const BOOKS_QUERY = gql`
  query Books {
    books {
      title
      _id
      isbn
      pageCount
      publishDate
      thumbnailUrl
      shortDescription
      longDescription
      status
      authors
      categories
    }
  }
`;
