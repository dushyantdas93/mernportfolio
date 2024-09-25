import React from 'react'
import favicon from "/images/favicon.png";

const AboutMe = () => {
  return (
    <div className=" w-full lg:w-4/6  mx-auto  flex  flex-col lg:px-6 justify-around gap-10 ">
      <h1 className="font-bold text-3xl lg:text-4xl py-2 lg:py-20 px-6 lg:px-0">About Me</h1>
      <div className="flex flex-col lg:flex-row items-center justify-around w-full h-full gap-10">
        <img src={favicon} alt="" className="lg:size-32" />
        <div className="w-[90%] lg:w-[70%] border flex flex-col lg:flex-row rounded-lg px-6 h-auto lg:gap-5">
          <div className="w-full lg:w-1/2 py-6 flex flex-col gap-5">
            <p className=" ">
              I am Animation Bro, web developer from London, United Kingdom. I
              have rich experience in web site design and building and
              customization, also I am good at WordPress.
            </p>
            <button className="bg-red-400 px-4 py-1 rounded-xl font-semibold lg:text-xl ">
              DownLoad CV
            </button>
          </div>
          <div className="w-full lg:w-1/2  flex flex-col h-[90] justify-between gap-4 pb-6  lg:justify-around ">
                      {[1, 2, 1].map((item) => {
                          return (
                            <div className=" flex justify-between items-center flex-col gap-1">
                              <div className="w-full flex justify-between ">
                                <h1 className="capitalize">development</h1>
                                <p>85%</p>
                                  </div>
                                  <div className="w-full h-3 border px-4 rounded-lg bg-blue-300"></div>
                              </div>
                                                        );
           })}
          </div>
        </div>
          </div>
          
          <div className="flex flex-wrap text-center items-center justify-around w-full lg:p-10 gap-4">
              {[1, 2, 3,4].map((item) => {
                  return (
                    <div className="">
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
}

export default AboutMe