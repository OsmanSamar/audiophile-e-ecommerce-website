import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { FaTwitter } from "react-icons/fa";
import { ImFacebook2, ImInstagram } from "react-icons/im";

const Footer = () => {
  return (
    <div className="text-white  py-10 bg-black ">
      <div className="container mx-auto font-josefin-sans px-20 lg:px-20 py-20 flex flex-col gap-10 md:flex-row justify-between border-t border-slate-800">
        <div className="flex">
          <Logo alt="Logo Icon" className="mb-6  " />
        </div>

        <div className="">
          <p>QUICK LINKS</p>

          <div className="flex flex-col items-start justify-between text-start uppercase  mb-4 md:mb-0 md:flex-row">
            <a
              href="/"
              alt="Home Page"
              className="block py-2 px-2 hover:text-orange-600"
            >
              Home
            </a>

            <a
              href="/headphones"
              alt="headphones"
              className="block  py-2 px-2 hover:text-orange-600"
            >
              Headphones
            </a>
            <a
              href="/speakers"
              alt="speakers"
              className="block  py-2 px-2 hover:text-orange-600"
            >
              Speakers
            </a>
            <a
              href="/earphones"
              alt="earphones"
              className="block md:inline-block py-2 px-2 hover:text-orange-600"
            >
              Earphones
            </a>
          </div>
        </div>
        {/* End Of QUICK LINKS */}
      </div>
      <div className="flex flex-col items-center justify-between md:flex-row md:px-20 py-1 ">
        <div>
          <p className="text-sm text-center px-12 py-4 lg:px-20 md:text-left">
            Audiophile is an all in one stop to fulfill your audio needs.
            <br></br> We're a small team of music lovers and sound specialists
            <br></br>
            who are devoted to helping you get the most out of<br></br> personal
            audio. Come and visit our demo facility<br></br>we’re open 7 days a
            week.
          </p>
        </div>
        {/* SOCIAL MEDIA */}
        <div className="flex mt-4 gap-3 lg:px-20">
          <a
            href="#facebook"
            className=" p-1.5 rounded-sm text-white  hover:scale-110 hover:text-orange-400"
          >
            <ImFacebook2 size={24} />
          </a>
          <a
            href="#twitter"
            className=" p-1.5 rounded-sm text-whit hover:scale-110 hover:text-orange-400"
          >
            <FaTwitter size={24} />
          </a>

          <a
            href="#instagram"
            className=" p-1.5 rounded-sm text-whit  hover:scale-110 hover:text-orange-400"
          >
            <ImInstagram size={24} />
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center lg:items-start    lg:px-40 md:text-left   py-10">
        <span className="text-gray-200  leading-10 text-sm text-center   md:text-left">
          Copyright 2021. All Rights Reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
