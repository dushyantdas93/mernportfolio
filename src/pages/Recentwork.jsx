import React from 'react'
import client5 from "/images/works/1.svg";

const Recentwork = () => {

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
    <div className=" w-full lg:w-4/6  mx-auto  flex  flex-col lg:px-6 justify-around gap-10 py-6 ">
      <h1 className="font-bold text-3xl lg:text-4xl py-2 lg:py-20 px-6 lg:px-0">
        Recent Works
      </h1>

      <div className="w-full  flex flex-wrap gap-4 justify-around">
        {card.map((item) => {
          return (
            <div className="size-80 lg:size-72 rounded-lg border flex flex-col items-center justify-center gap-3 object-container text-center ">
              <img src={item.img} alt="" />
            </div>
          );
        })}
      </div>
      <button className="bg-red-400 px-4 py-1 rounded-lg font-semibold lg:text-xl lg:px-6 lg:py-2 w-32 lg:w-auto">
        Lern More{" "}
      </button>
    </div>
  );
}
export default Recentwork