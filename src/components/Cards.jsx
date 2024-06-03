import React from "react";
import { IoIosArrowForward } from "react-icons/io";

import Earphones from "../assets/desktop/earphones.png";
import Headphone from "../assets/desktop/headphones.png";
import Speaker from "../assets/desktop/speakers.png";

const cards = [
  { id: 1, image: Earphones, title: "earphones " },
  { id: 2, image: Headphone, title: "headphones " },
  { id: 3, image: Speaker, title: "speakers" },
];

const Cards = () => {
  return (
    <div
      className={`grid grid-cols-1 gap-6  sm:grid-cols-2 lg:grid-cols-3 mx-8 sm:mx-12 md:mx-16 lg:mx-20 xl:mx-32 pb-28 `}
    >
      {/* mx-8 sm:mx-12 md:mx-16 lg:mx-20 xl:mx-32: Responsive margins to ensure proper spacing on different screen sizes. */}
      {cards.map((card, index) => (
        <div
          key={card.id}
          className={`border rounded-lg mt-36  bg-neutral-300/40 shadow-lg overflow-visible relative p-6 `}
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <img
            src={card.image}
            alt={card.title}
            className="w-3/4 mx-auto h-48 absolute -top-20 left-1/2 transform -translate-x-1/2  "
          />

          <div className="p-4 mt-24">
            <h3 className="text-xl font-bold mb-2 uppercase text-center">
              {card.title}
            </h3>
          </div>
          <div className="flex  items-center justify-center mb-4 ">
            <h4 className="uppercase text-gray-600/50 ">shop</h4>
            <div>
              <IoIosArrowForward size={18} className="text-orange-600 ml-2" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
