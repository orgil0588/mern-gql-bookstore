import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
const BooksDetail = () => {
  const { _id } = useParams();
  const GET_BOOK = gql`
    query Book($id: ID!) {
      book(id: $id) {
        _id
        title
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

  const { data, loading, error } = useQuery(GET_BOOK, {
    variables: {
      id: _id,
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  }
  if (data) {
    console.log(data);
  }
  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className="w-8/12 mx-auto mt-10 bg-white p-6 rounded-xl">
      {data && (
        <div className="grid grid-cols-2 gap-12 ">
          <img className="w-full" src={data.book.thumbnailUrl} />
          <div>
            <h1>{data.book.title}</h1>
            <ul className="flex items-center space-x-2 text-gray-600 text-sm">
              {data.book.categories.map((author: string) => (
                <li>| {author}</li>
              ))}
            </ul>
            <p>{data.book.longDescription}</p>
            <ul className="flex-col text-gray-600 text-sm mt-10">
              {data.book.authors.map((author: string) => (
                <li>{author}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default BooksDetail;
