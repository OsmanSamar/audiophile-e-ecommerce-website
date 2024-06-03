import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { FaTwitter } from "react-icons/fa";
import { ImFacebook2, ImInstagram } from "react-icons/im";

const Footer = () => {
  return (
    <div className="text-white  py-10 bg-black ">
      <div
        className="container mx-auto font-josefin-sans px-6
      md:px-20 lg:px-20 py-10 md:py-20
       flex flex-col gap-10 md:flex-col lg:flex-row justify-between border-t border-slate-800"
      >
        {/* Logo Icon */}
        <div className="flex justify-center md:justify-start">
          <Logo alt="Logo Icon" className="mb-6" />
        </div>

        {/* QUICK LINKS */}
        <div className="flex flex-col items-center md:items-start">
          <p className="mb-4">QUICK LINKS</p>

          <div className="flex flex-col items-center gap-4 font-bold md:items-start justify-between text-center md:text-left uppercase mb-4 md:mb-0 md:flex-row">
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
      {/*End Of  Div Container  */}
      <div className="flex flex-col items-center text-pretty  md:flex-row justify-between md:px-6 lg:px-20 py-1 ">
        <p className="text-sm  text-center md:text-left px-12 py-4 lg:px-20 md:w-[82ch] md:leading-relaxed  ">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility -we’re open 7 days a week.
        </p>
        {/* The 82ch unit sets the maximum width of the text container to approximately 60 characters. 
        This helps control text wrapping on medium screens. */}
      </div>

      {/* Copyright */}
      <div className="flex flex-col md:flex-row justify-between items-center lg:items-start md:px-6  lg:px-20 py-10">
        <span className="text-gray-200  leading-10 text-sm text-center px-12 py-4 lg:px-20   md:text-left">
          Copyright 2021. All Rights Reserved
        </span>

        {/* SOCIAL MEDIA */}
        <div className="flex mt-4 md:mr-5 lg:-mt-4 gap-3">
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
    </div>
  );
};

export default Footer;
