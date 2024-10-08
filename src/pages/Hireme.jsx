import React from "react";
import favicon from "/images/favicon.png";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaHashnode } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";

import { FaGithub } from "react-icons/fa";
// import { BsMouse } from "react-icons/bs";

const Hireme = () => {
  const icons = [FaInstagram, FaGithub, FaMedium, FaLinkedin, FaHashnode];
  return (
    <div className=" w-full  flex  flex-col justify-center lg:justify-around  items-center    py-10  h-full lg:h-auto bg-gray-200 text-gray-600">
      <div className=" w-full lg:w-1/3 flex flex-col items-center pt-16  gap-4 lg:gap-6 ">
        <img src={favicon} alt="" className="size-32 drop-shadow-2xl " />
        <h1 className="font-bold text-2xl lg:text-4xl text-gray-600">
          Animation Bro
        </h1>
        <h3 className="text-md lg:text-lg ">I'm UX/UI designer</h3>
        <div className="flex items-center justify-center w-1/2 gap-4 lg:gap-6 ">
          {icons.map((Icon, index) => (
            <Icon key={index} className="size-7 lg:size-9 drop-shadow-2xl " />
          ))}
        </div>
        <button className="bg-red-500  px-4 py-1 rounded-full font-semibold lg:text-xl lg:px-6 lg:py-2 text-white">
          Hire me{" "}
        </button>
      </div>
      {/* <div className="flex flex-col items-center">
        <h1 className="text-lg font-semibold pt-4">Scroll down</h1>
              <BsMouse size={32} />
             
      </div> */}
    </div>
  );
};

export default Hireme;
