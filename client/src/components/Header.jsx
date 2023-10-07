function Header() {
  return (
    <div className="py-5 relative flex justify-between z-10 px-5 bg-gray-100">
      <h1 className="font-bold text-2xl text-red-300">Val Community Space</h1>
      <ul className="flex gap-3">
        <li className="bg-red-300 py-0.5 px-2 rounded-lg text-white font-semibold cursor-pointer">
          Home
        </li>
        <li className="bg-red-300 py-0.5 px-2 rounded-lg text-white font-semibold cursor-pointer">
          Events
        </li>
      </ul>
    </div>
  );
}

export default Header;
