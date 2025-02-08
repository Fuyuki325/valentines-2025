import React from "react";
import { FaHeart } from "react-icons/fa";

const Header = () => {
  return (
    <div className="absolute top-0 w-full flex items-center justify-center px-12 py-5 bg-red-500 text-white text-xl font-bold shadow-lg">
      <FaHeart className="text-2xl animate-pulse mr-2" />
      <div>Happy Valentine&apos;s Day</div>
      <FaHeart className="text-2xl animate-pulse ml-2" />
    </div>
  );
};

export default Header;
