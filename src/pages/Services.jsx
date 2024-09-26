import React from "react";
import client5 from "/images/service-2.svg";
import bg from "/images/dots-bg-light.svg";

const Services = () => {
  const card = [
    {
      img: client5,
      heading: "UI/UX design",
      para: "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    },
    {
      img: client5,
      heading: "Web Development",
      para: "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    },
    {
      img: client5,
      heading: "Photography",
      para: "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    },
  ];
  return (
    <div className=" w-full lg:w-4/6  mx-auto  flex  flex-col lg:px-6 justify-around gap-10 py-6">
      <h1 className="font-bold text-3xl lg:text-4xl py-2 lg:py-20 px-6 lg:px-0 relative">
        <img src={bg} alt="" className="absolute -left-2  lg:-left-5 " />
        Services
      </h1>

      <div className="w-full  flex flex-wrap gap-4 justify-around">
        {card.map((item,idx) => {
          return (
            <div key={idx} className="size-80 lg:size-72 rounded-lg border flex flex-col items-center justify-center gap-3 px-3 text-center bg-blue-400 px-6">
              <img src={item.img} alt="" />
              <h1 className="font-bold text-lg">{item.heading}</h1>
              <p className="">{item.para}</p>
            </div>
          );
        })}
      </div>
      <h1 className="text-center text-sm lg:text-lg py-2 lg:py-10 px-2 lg:px-0">
        Looking for a custom job? Click here to contact me! 👋
      </h1>
    </div>
  );
};

export default Services;
