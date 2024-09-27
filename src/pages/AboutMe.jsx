import React from "react";
import favicon from "/images/avatar-2.svg";
import bg from "/images/dots-bg-light.svg";

const AboutMe = () => {
  // Function to determine the background color based on percentage
  const getColor = (percent) => {
    if (percent >= 0 && percent <= 20) {
      return "bg-red-500"; // Low percent, red color
    } else if (percent > 20 && percent <= 50) {
      return "bg-yellow-500"; // Medium percent, yellow color
    } else if (percent > 30 && percent <= 80) {
      return "bg-green-500"; // Higher percent, green color
    } else if (percent > 80 && percent <= 100) {
      return "bg-blue-500"; // Almost full, blue color
    }
    return "bg-gray-300"; // Default color for out-of-range values
  };

  // Array of skill percentages
  const skills = [
    { name: "Development", percent: 10 },
    { name: "Design", percent: 60 },
    { name: "Animation", percent: 90 },
  ];

  return (
    <div className=" w-full lg:w-4/6  mx-auto  flex  flex-col lg:px-6 justify-around gap-10 text-gray-600 ">
      <h1 className="font-bold text-2xl lg:text-4xl py-2 lg:py-10 px-6 lg:px-0 flex relative text-gray-600">
        <img src={bg} alt="" className="absolute -left-5 " /> About Me
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-around w-full h-full gap-10">
        <img src={favicon} alt="" className="lg:size-32 drop-shadow-2xl" />
        <div className="w-[90%] lg:w-[70%] border border-gray-300 flex flex-col lg:flex-row rounded-lg px-6 h-auto lg:gap-5 shadow-xl">
          <div className="w-full lg:w-1/2 py-6 flex flex-col gap-5 ">
            <p className="">
              I am Animation Bro, web developer from London, United Kingdom. I
              have rich experience in web site design and building and
              customization, also I am good at WordPress.
            </p>
            <button className="bg-red-500  px-2 w-40 py-1 rounded-full font-semibold lg:text-lg text-white">
              Download CV
            </button>
          </div>
          <div className="w-full lg:w-1/2  flex flex-col h-[90] justify-between gap-4 pb-6  lg:justify-around ">
            {skills.map((skill, idx) => {
              return (
                <div
                  key={idx}
                  className="flex justify-between items-center flex-col gap-1"
                >
                  <div className="w-full flex justify-between ">
                    <h1 className="capitalize">{skill.name}</h1>
                    <p>{skill.percent}%</p>
                  </div>
                  <div className="w-full h-3 border border-gray-300  rounded-lg">
                    <div
                      className={`h-full ${getColor(skill.percent)}`}
                      style={{ width: `${skill.percent}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap text-center items-center justify-around w-full lg:p-10 gap-4">
        {[1, 2, 3, 4].map((item, idx) => {
          return (
            <div key={idx} className="">
              <h1 className="text-2xl lg:text-4xl font-bold">29</h1>
              <p className="text-lg font-semibold text-gray-500 w-46">
                Projects complete
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutMe;
