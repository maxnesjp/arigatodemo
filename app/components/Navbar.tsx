import React from "react";
import Image from "next/image";
import logo from "../../public/Arigato Logo.png";
import { CgDarkMode } from "react-icons/cg";
import { IoLanguage } from "react-icons/io5";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between h-16 bg-gray-800 px-4">
      <div className="text-white">
        <Image src={logo} alt="logo" width={50} height={50} />
      </div>
      <div className="flex items-center justify-normal text-white">
        <div className="flex gap-4 items-center">
          <div className="py-2 px-4">
            <IoLanguage className="h-7 w-7 " />
          </div>
          <div className="py-2 px-4">
            <CgDarkMode className="h-7 w-7 " />
          </div>

          <button className="text-lg py-2 px-4 bg-white text-gray-800 rounded-lg">
            Register
          </button>
          <button className="text-lg py-2 px-4 bg-white text-gray-800 rounded-lg">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
