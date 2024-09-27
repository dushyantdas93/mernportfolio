import React from "react";
import client5 from "/images/price-1.svg";
import bg from "/images/dots-bg-light.svg";


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
      mainhed: "Premum",
      para: " Unlimited product including apps integrations and more features",
      subpara: "Mon-Fri support",
      rate: 25,
    },
  ];
  return (
    <div className=" w-full lg:w-4/6  mx-auto  flex  flex-col lg:px-6 justify-around gap-10 py-6">
      <h1 className="font-bold text-2xl lg:text-4xl py-2 lg:py-10 px-6 lg:px-0 relative">
        <img src={bg} alt="" className="absolute -left-2  lg:-left-5 " />
        Pricing Plans
      </h1>

      <div className="w-full  flex flex-wrap gap-4 justify-around relative">
        {card.map((item, idx) => {
          return (
            <div
              key={idx}
              className={`w-80 lg:w-80 rounded-lg border border-gray-300 flex flex-col items-center justify-center  relative overflow-hidden text-center p-8 gap-6 shadow-xl ${
                idx === 1 ? "scale-110" : "scale-100"
              }`}
            >
              {/* <div className="bg-red-500  absolute -top-1 rounded-lg left-1 px-3 py-2">
                  <h1>Review </h1>
                </div> */}

              <h1
                className={`font-semibold text-sm absolute -rotate-90  px-2 pr-6 text-white rounded-lg bg-blue-500 top-10 -left-3 ${
                  item.mainhed === "Premium" ? " inline" : " hidden"
                } `}
              >
                Recommonded
              </h1>
              <img src={item.img} alt="" className="size-42 drop-shadow-2xl" />

              <h1 className="font-bold text-xl">{item.mainhed}</h1>
              <p className="text-sm  font-semibold">{item.para}</p>
              <p className="text-sm  font-semibold">{item.subpara}</p>
              <p className="text-sm font-semibold">
                $ <span className="text-3xl font-bold"> {item.rate} </span>
                month
              </p>

              <button className="bg-red-500  px-4 py-1 rounded-full font-semibold lg:text-lg lg:px-6 lg:py-1 text-white">
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
