const Categories = () => {
  const categories = [
    "Software engineer",
    "Internet",
    "Open source",
    "Mobile",
    "Java",
    "Microsoft",
    "Web Development",
    "Next Generation Databases",
    "PowerBuilder",
  ];
  return (
    <div className="w-3/12 bg-white rounded-md p-6 min-h-screen h-fit">
      <h1 className="font-semibold mb-4">Categories</h1>
      <ul>
        {categories.map((category) => (
          <li className="py-1">{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
