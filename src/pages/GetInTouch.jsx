import React from "react";
import map from "/images/map-light.png";
import bg from "/images/dots-bg-light.svg";

const GetInTouch = () => {
  return (
    <div className=" w-full lg:w-4/6  mx-auto  flex  flex-col lg:px-6 justify-around gap-10 py-6">
      <h1 className="font-bold text-3xl lg:text-4xl py-2 lg:py-10 px-6 lg:px-0 relative">
        <img src={bg} alt="" className="absolute -left-2  lg:-left-5 " />
        Get In touch
      </h1>
      <div className="px-6 lg:p-0 flex flex-col lg:flex-row">
        <div className="relative w-full  lg:w-1/3 h-32 lg:h-40">
          <img src={map} alt="" className="h-42 absolute top-0 " />
          <h1 className="font-bold text-xl">Let's talk about everything!</h1>
          <p className="">Don't like forms? Send me an email. 👋</p>
        </div>
        <div className="w-full  lg:w-2/3  p-2">
          <form action="" className="flex flex-wrap gap-4">
            <input
              type="text "
              placeholder="enter your name"
              className="w-full h-10 px-2 text-center rounded-lg border border-black "
            />
            <input
              type="text"
              placeholder="enter your name"
              className="w-full h-10 px-2 text-center rounded-lg border border-black "
            />
            <input
              type="text"
              placeholder="enter your name"
              className="w-full h-20 px-2 text-center rounded-lg border border-black "
            />
            <input
              type="text"
              placeholder="enter your name"
              className="w-full h-40 px-2 text-center rounded-lg border border-black "
            />
            <button
              type="submit"
              className="bg-red-400 px-4 py-1 rounded-full font-semibold lg:text-xl lg:px-6 lg:py-2 text-white"
            >
              Send Message{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
