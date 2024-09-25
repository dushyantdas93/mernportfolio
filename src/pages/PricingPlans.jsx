import React from "react";
import client5 from "/images/price-1.svg";

const PricingPlans = () => {
  const card = [
    {
      img: client5,
      mainhed: "Basic",
      para: "Unlimited product including apps integrations and more features",
      subpara: "Mon-Fri support",
      rate: 25,
    },
    {
      img: client5,
      mainhed: "Premium",
      para: "Unlimited product including apps integrations and more features",
      subpara: "Mon-Fri support",
      rate: 25,
    },
    {
      img: client5,
      mainhed: "Premium",
      para: " Unlimited product including apps integrations and more features",
      subpara: "Mon-Fri support",
      rate: 25,
    },
  ];
  return (
    <div className=" w-full lg:w-4/6  mx-auto  flex  flex-col lg:px-6 justify-around gap-10 py-6">
      <h1 className="font-bold text-3xl lg:text-4xl py-2 lg:py-20 px-6 lg:px-0">
       Pricing Plans
      </h1>

      <div className="w-full  flex flex-wrap gap-4 justify-around">
        {card.map((item,idx) => {
          return (
            <div className="w-80 lg:w-72 rounded-lg border flex flex-col items-center justify-center  relative overflow-hidden text-center p-8 gap-6  ">
              {/* <div className="bg-red-400  absolute -top-1 rounded-lg left-1 px-3 py-2">
                  <h1>Review </h1>
                </div> */}

              <img src={item.img} alt="" className="size-42" />

              <h1 className="font-bold text-xl">{item.mainhed}</h1>
              <p className="text-sm  font-semibold">{item.para}</p>
              <p className="text-sm  font-semibold">{item.subpara}</p>
              <p className="text-sm font-semibold">
                      $ <span className="text-3xl font-bold"> {item.rate}{ " "}</span>month
              </p>

              <button className="bg-red-400 px-4 py-1 rounded-lg font-semibold lg:text-lg lg:px-6 lg:py-1">
                Get Started{" "}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricingPlans;
