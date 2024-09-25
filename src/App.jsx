import React, { useState } from "react";
import Navbar from "./pages/Navbar";
import Menubar from "./pages/Menubar";
import Hireme from "./pages/Hireme";
import AboutMe from "./pages/AboutMe";
import Services from "./pages/Services";
import Recentwork from "./pages/Recentwork";
import Experience from "./pages/Experience";
import PricingPlans from "./pages/PricingPlans";
import Clients from "./pages/Clients";
import LatestPost from "./pages/LatestPost";
import GetInTouch from "./pages/GetInTouch";
import { FaArrowUpLong } from "react-icons/fa6";



const App = () => {
  const [menu,setMenu]= useState(false)
  return (
    <div className="h-screen w-screen">
      <Navbar menu={menu} setMenu={setMenu} />
      <div className=" flex flex-col lg:flex-row h-full w-full">
        <Menubar menu={menu} setMenu={setMenu} />
        <div
          className="h-full w-full border lg:h-full lg:w-5/6 overflow-y-scroll items-center justify-center"
          id="main"
        >
          <div className="fixed bottom-4 lg:bottom-10 right-4 lg:right-10 rounded-full size-10 lg:size-16 flex items-center justify-center bg-red-300">
            <a href="">
              <FaArrowUpLong className="h-20" />
            </a>
          </div>
          <Hireme />
          <AboutMe />
          <Services />
          <Experience />
          <Recentwork />
          <PricingPlans />
          <Clients />
          <LatestPost />
          <GetInTouch />
        </div>
      </div>
    </div>
  );
};

export default App;
