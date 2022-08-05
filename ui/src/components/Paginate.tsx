import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

const Paginate = () => {
  const [totalPage, setTotalPage] = useState([]);
  const DOCUMENT_COUNT = gql`
    query Book_count {
      book_count
    }
  `;

  const { data, loading, error } = useQuery(DOCUMENT_COUNT);

  if (data) {
    const count = () => {
      let pageSet: any = [];
      for (let i = 0; i < Math.max(data.book_count) / 15; i++) {
        pageSet.push(i);
      }
      return pageSet;
    };
    console.log(count());
  }

  return <div>{data && <div>{data.book_count}</div>}</div>;
};

export default Paginate;
