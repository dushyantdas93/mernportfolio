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
  const [menu, setMenu] = useState(false);
  return (
    // <div className="h-screen w-screen bg-gray-200">
    //   <Navbar menu={menu} setMenu={setMenu} />
    <div className=" flex flex-col lg:flex-row h-full w-full">
      <Menubar menu={menu} setMenu={setMenu} />{" "}
      {/* Update menu logic as needed */}
      <div
        className="h-full w-full  lg:h-full lg:w-5/6 overflow-y-scroll items-center justify-center"
        id="main"
      >
        {/* <div className="fixed bottom-4 lg:bottom-10 right-4 lg:right-10 rounded-full size-10 lg:size-16 flex items-center justify-center bg-gray-200 border border-black z-10">
            <a href="">
              <FaArrowUpLong className="h-20 " />
            </a>
          </div> */}

        <section id="home">
          <Hireme />
        </section>

        <section id="about">
          <AboutMe />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="works">
          <Recentwork />
        </section>

        <section id="blog">
          <PricingPlans />
        </section>

        <section id="contact">
          <Clients />
        </section>

        <section id="LatestPost">
          <LatestPost />
        </section>

        <section id="GetInTouch">
          <GetInTouch />
        </section>
      </div>
    </div>
    // </div>
  );
};

export default App;
