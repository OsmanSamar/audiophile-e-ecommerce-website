import React, { useState, useEffect } from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { GiShoppingCart } from "react-icons/gi";
import Ripples from "react-ripples";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.refresh();
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className=" bg-mobile-image py-20 md:bg-tablet-image lg:bg-hero-image bg-cover bg-center md:py-32  ">
      <div
        className="  flex items-center justify-between  border-b border-slate-800
        container mx-auto px-8   
        font-josefin-sans -mt-8 mb-20 md:px-20 md:-mt-20 md:mb-40 "
      >
        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={isOpen ? "true" : "false"}
            onClick={toggleMenu}
          >
            <BiMenu
              size={26}
              className={` ${isOpen ? "hidden" : "block"}  text-white mb-4 `}
            />

            <AiOutlineClose
              size={26}
              className={` ${
                isOpen ? "block" : "hidden"
              } h-6 w-6 text-white mb-4 `}
            />
          </button>
        </div>

        {/* The ReactComponent import syntax is a special syntax used by Create
          React App for importing SVG files as React components. */}
        <Logo alt="Logo Icon" className="mb-6  " />
        <div className="hidden space-x-6 md:mb-6   md:flex">
          <a href="#home" className="text-orange-600 text-sm uppercase  ">
            home
          </a>

          <a
            href="#headphones"
            className=" text-white text-sm uppercase hover:text-orange-600 "
          >
            headphones
          </a>
          <a
            href="#speakers"
            className="text-white text-sm  uppercase hover:text-orange-600  "
          >
            speakers
          </a>
          <a
            href="#earphones"
            className="text-white text-sm uppercase hover:text-orange-600 "
          >
            earphones
          </a>
        </div>
        <GiShoppingCart size={24} className="text-white mb-6" />
      </div>

      {/* Mobile Menu*/}
      <div
        className={`  ${isOpen ? "block pt-2" : "hidden"} md:hidden`}
        id="mobile-menu"
        data-aos={isOpen ? "fade-right" : ""}
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-delay="50"
      >
        <div
          className="absolute flex flex-col items-left self-end py-10 px-10
            mt-2 space-y-6 font-bold bg-white text-black sm:w-full left-0
            right-0 drop-shadow-lg uppercase"
        >
          <a href="home" onClick={toggleMenu} className="cursor-pointer ">
            home
          </a>
          <a href="headphones" onClick={toggleMenu} className="cursor-pointer ">
            headphones
          </a>
          <a href="speakers" onClick={toggleMenu} className="cursor-pointer ">
            speakers
          </a>
          <a href=" earphones" onClick={toggleMenu} className="cursor-pointer ">
            earphones
          </a>
        </div>
      </div>
      {/* End Of  Mobile Menu */}

      <div
        className="mx-auto text-white px-10 py-12 w-[90vw] max-w-[300px]
             font-josefin-sans text-center md:w-[415px] md:ml-auto md:mr-auto md:h-[400px]
             lg:text-left lg:ml-24 "
      >
        {/* mx-auto :Centers the container horizontally in the viewport.
        w-[90vw] max-w-[300px]: Ensures the width of the container is responsive, taking up 90% of the viewport width but not exceeding 300px on small screens.
        md:w-[415px] md:ml-auto md:mr-auto: Sets a fixed width for medium screens and ensures it is centered. */}
        <h3 className="uppercase  mb-4 text-gray-400/40 "> new product</h3>
        <p
          data-aos="zoom-in-up"
          data-aos-duration="1000" //animation duration for a smoother or faster effect
          data-aos-easing="ease-in-out" //Change the easing function for different animation effects.
          data-aos-delay="10" //Add a delay to stagger the animations.
          data-aos-once="false" //Control if the animation happens only once or every time the element is scrolled into view.
          data-aos-mirror="true" //Repeat the animation when scrolling up.
          data-aos-offset="100" //Adjust the trigger point of the animation relative to the viewport.
          className="uppercase font-bold text-2xl  md:text-3xl  "
        >
          xx99 mark II
        </p>
        <p
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="uppercase font-bold text-xl  md:text-3xl  "
        >
          headphones
        </p>
        <p className="mt-4 text-gray-400/60 text-sm ">
          Experience natural,lifelike audio and exceptionalbuild quality made
          for the passionate music enthusiast.
        </p>
        <Ripples
          color="rgba(255, 255, 255, 0.3)"
          className="text-white text-sm   bg-orange-600 px-5 py-2.5  uppercase mt-6  cursor-pointer "
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-delay="10"
          data-aos-once="false"
          data-aos-mirror="true"
          data-aos-offset="100"
        >
          see product
        </Ripples>
      </div>
    </div>
  );
};

export default Navbar;
