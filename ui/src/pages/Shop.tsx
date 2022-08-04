import { useQuery, gql } from "@apollo/client";
import Books from "../components/Books";
import Categories from "../components/Categories";
import { BOOKS_QUERY } from "../graphql/queries";

const Shop = () => {
  
  const { data, loading, error } = useQuery(BOOKS_QUERY);

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
    <div className="w-full mt-10 flex justify-between">
      <Categories />
      <div className="w-8/12 grid grid-cols-3 gap-12">
        {data &&
          data.books.map((book: any) => <Books key={book._id} data={book} />)}
      </div>
    </div>
  );
};

export default Shop;
