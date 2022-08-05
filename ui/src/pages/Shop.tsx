import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import Books from "../components/Books";
import Categories from "../components/Categories";
import Paginate from "../components/Paginate";
// import { BOOKS_QUERY } from "../graphql/queries";

const Shop = () => {
  const page = 15;
  const GET_BOOKS = gql`
    query Get_books {
      get_books(page: ${page}) {
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

  const { data, loading, error } = useQuery(GET_BOOKS);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (data) {
    // console.log(data);
  }
  if (error) {
    console.log(JSON.stringify(error, null, 2));
    return <div>Error</div>;
  }
  return (
    <div className="w-full mt-10 flex justify-between">
      <Categories />
      <div className="w-8/12 mx-auto flex-col">
        <div className=" grid grid-cols-3 gap-12">
          {data &&
            data.get_books.map((book: any) => (
              <Books key={book._id} data={book} />
            ))}
        </div>
        <Paginate />
      </div>
    </div>
  );
};

export default Shop;
