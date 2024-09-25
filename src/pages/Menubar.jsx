import React from 'react'
import { IoMdHome } from "react-icons/io";

const Menubar = ({menu , setMenu}) => {
  return (
    <div
      className="hidden  h-2/5 w-full border lg:h-full lg:w-1/6 bg-black  lg:bg-white lg:flex flex-col p-6 lg:py-20  gap-2 lg:gap-6 capitalize mt-14 lg:m-0 fixed top-0 lg:static"
      id="sidebar"
    >
      <div className="hidden lg:block text-black text-4xl font-bold px-10">
        Portfolio
      </div>
      <div className="lg:flex flex-col p-6 lg:py-20  gap-4 capitalize">
        {[
          "Home",
          "about",
          "services",
          "experience",
          "works",
          "blog",
          "contact",
        ].map((item, idx) => {
          return (
            <h1 className="text-white lg:text-black lg:text-lg font-bold active:text-red-300 hover:text-red-600 flex items-center gap-3">
              <IoMdHome  className='text-red-600 font-'/>
              {item}
            </h1>
          );
        })}
      </div>
    </div>
  );
}

export default Menubar