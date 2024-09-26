import React, { useState } from "react";
import Menubar from "./pages/Menubar";
import Navbar from "./pages/Navbar";
import Hireme from "./pages/Hireme"
import AboutMe from "./pages/AboutMe";
import Services from "./pages/Services";
import Recentwork from "./pages/Recentwork";
import Experience from "./pages/Experience";
import PricingPlans from "./pages/PricingPlans";
import Clients from "./pages/Clients";
import LatestPost from "./pages/LatestPost";
import GetInTouch from "./pages/GetInTouch";
import { Link } from "react-scroll";
import { FaArrowUpLong } from "react-icons/fa6";

const App = () => {
  const [menu, setMenu] = useState(false); // Handle menu state for mobile views

  return (
    <div className=" bg-white">
      <Navbar menu={menu} setMenu={setMenu} />
      <div className=" flex flex-col lg:flex-row   h-full w-full">
        {/* Menubar */}
        <Menubar menu={menu} setMenu={setMenu} />
        <Link
          // Link to the section
          to="home"
          smooth={true} // Enable smooth scrolling
          duration={500} // Duration of the scroll
          offset={-70} // Offset for fixed header (optional)
          className="fixed bottom-4 lg:bottom-10 right-4 lg:right-10 rounded-full size-10 lg:size-16 flex items-center justify-center bg-white border z-10"
          // onClick={handleLinkClick} // Close the menu on click
        >
          <FaArrowUpLong className="h-20 " />
        </Link>

        {/* divs */}
        <div
          className="h-full w-full  lg:h-full lg:w-5/6 lg:ml-[20%] overflow-y-scroll items-center justify-center "
          id="main"
        >
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

          <section id="pricing">
            <PricingPlans />
          </section>

          <section id="client">
            <Clients />
          </section>

          <section id="blog">
            <LatestPost />
          </section>

          <section id="contact">
            <GetInTouch />
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;
