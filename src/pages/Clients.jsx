import React from "react";
import avatar from "/images/avatar-1.svg";
import client1 from "/images/client-2.svg";
import client2 from "/images/client-2.svg";
import client3 from "/images/client-3.svg";
import client4 from "/images/client-4.svg";
import client5 from "/images/client-5.svg";



const Clients = () => {
  const card = [
    {
      img: avatar,
      name: "UI/UX design",
      role: "developer as a fronf",
      para: "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
    },
    
    // {
    //   img: client5,
    //   name: "Web Development",role:"developer as a fronf",
    //   para: "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    // },
    // {
    //   img: client5,
    //   name: "Photography",role:"developer as a fronf",
    //   para: "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    // },
  ];
  return (
    <div className=" w-full lg:w-4/6  mx-auto  flex  flex-col lg:px-6 justify-around gap-10 py-6  ">
      <h1 className="font-bold text-3xl lg:text-4xl py-2 lg:py-20 px-6 lg:px-0">
        Client & Reviews
      </h1>

          <div className="w-full flex">
              {card.map((item, idx) => {
                  return (
                      <div className="w-full flex flex-col gap-2  items-center px-6">
                      <img src={avatar} alt="" />
                      <h1 className="font-bold text-lg">{item.name}</h1>
                          <p className="">{item.role}</p>
                          <div className="w-full text-center border rounded-lg py-3 h-32 lg:h-20 lg:w-2/4 mt-4 p-3  lg:p-6">
                              <p>{ item.para}</p>
                          </div>
                    </div>
                  );
              })}

      </div>
          <div className="w-full  flex items-center justify-center flex-wrap  ">
              
              {[1, 1, 1, 1, 1, 1, 1, 1].map((item, idx) => {
                  return (
                    <div className="w-1/2 lg:w-1/4   flex justify-center p-5">
                      <img src={client1} className=""  />
                    </div>
                  );
                  
              })}
                  
</div>

      
    </div>
  );
};

export default Clients;
