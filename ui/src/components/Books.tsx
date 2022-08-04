import { Link } from "react-router-dom";
const BookDetail = ({ data }: any) => {
  console.log(data);
  return (
    <Link to={data._id}>
      <div className="bg-white p-4 rounded-xl flex flex-col justify-between hover:shadow-2xl cursor-pointer">
        <img className="w-full" src={data.thumbnailUrl} alt={data.title} />
        <div>
          <h1 className="font-semibold text-base">{data.title}</h1>
          <ul className="flex items-center space-x-2 text-gray-600 text-sm">
            {data.authors.map((author: string) => (
              <li>| {author}</li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default BookDetail;
