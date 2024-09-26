import React from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Navbar = ({ menu, setMenu }) => {
  return (
    <div className="lg:hidden bg-gray-200 w-full flex items-center px-6 text-xl font-bold justify-between border border-black-b py-3 fixed top-0 z-10">
      <h1 className=" text-2xl font-bold">Portfolio</h1>
      {menu ? (
        <IoClose
          className="font-bold"
          onClick={() => {
            setMenu(!menu);
          }}
        />
      ) : (
        <HiOutlineMenuAlt4
          className="font-bold"
          onClick={() => {
            setMenu(!menu);
          }}
        />
      )}
    </div>
  );
};

export default Navbar;
