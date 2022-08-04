
const Navbar = () => {
  return (
    <nav className="py-3 bg-white text-center flex justify-evenly">
      <div>
        <a href="/">GoodRead</a>
      </div>
      <ul className="flex items-center space-x-4">
        <li>
          <a href="/shop">Shop</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
