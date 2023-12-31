import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="py-5 relative flex justify-between z-10 px-5 bg-gray-100 border-b-4 border-b-red-400">
      <h1 className="font-bold text-2xl text-red-300">Val Community Space</h1>
      <ul className="flex gap-3">
        <Link to="/">
          <li className="bg-red-300 py-0.5 px-2 rounded-lg text-white font-semibold cursor-pointer">
            Home
          </li>
        </Link>
        <Link to="/events">
          <li className="bg-red-300 py-0.5 px-2 rounded-lg text-white font-semibold cursor-pointer">
            Events
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
