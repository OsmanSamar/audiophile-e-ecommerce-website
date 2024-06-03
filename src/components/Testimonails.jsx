import React from "react";
import Speaker from "../assets/desktop/speakers.png";
import Speaker2 from "../assets/desktop/image-speaker-zx7.jpg";
import Earphone from "../assets/desktop/image-earphones-yx1.jpg";
// import Speakerzx7 from "../assets/mobile/image-speaker-zx7.jpg";
// import Speakerzx9 from "../assets/mobile/image-speaker-zx9.png";
// import Earphoneyx1 from "../assets/mobile/image-earphones-yx1.jpg";

const Testimonails = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6 px-8 md:gap-6 md:px-28 xl:px-60 pb-28 lg:gap-6 xl:gap-6  ">
        <div
          className="md:col-span-2 bg-customOrange relative  rounded-lg  
        cursor-pointer hover:transform transition-transform hover:scale-110 hover:opacity-70 text-white   float-left"
        >
          {/* First Image */}
          <div className="md:col-span-2 bg-customOrange relative rounded-lg ">
            <img src={Speaker} alt="Speaker" />
            <div className="absolute bottom-0 right-0 font-josefin-sans px-10 py-6 uppercase  font-bold text-white">
              <h3 className=" text-l md:text-3xl">zx9 Speaker</h3>
              <button className="bg-black text-white py-2 px-4 mt-2 text-sm">
                See Product
              </button>
            </div>
          </div>
        </div>

        {/* Second Image */}
        <div className="md:col-span-2 relative rounded-lg  cursor-pointer hover:transform transition-transform hover:scale-110 hover:opacity-70">
          <img
            src={Speaker2}
            alt="Speaker2"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute bottom-0 left-0 font-josefin-sans px-10 py-6 uppercase  font-bold text-black">
            <h3 className="text-l md:text-3xl">zx7 Speaker</h3>
            <button className="border-2 border-black text-black py-2 px-4 mt-2 text-sm">
              See Product
            </button>
          </div>
        </div>

        {/* Third Image */}
        <div className=" relative rounded-lg  cursor-pointer hover:transform transition-transform hover:scale-110 hover:opacity-70">
          <img
            src={Earphone}
            alt="Earphone"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Fourth img */}
        <div className="bg-neutral-300/40 shadow-lg relative rounded-lg  cursor-pointer hover:transform transition-transform hover:scale-110 hover:opacity-70">
          <div className="absolute bottom-0 left-0 font-josefin-sans px-10 py-6 uppercase text-2xl font-bold text-white">
            <h3 className="text-black text-l md:text-3xl">yx1 earphones</h3>
            <button className="border-2 border-black text-black py-2 text-sm  px-4 mt-2">
              See Product
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonails;
