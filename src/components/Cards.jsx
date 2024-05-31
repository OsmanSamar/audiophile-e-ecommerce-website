import React from "react";
import { IoIosArrowForward } from "react-icons/io";

import Earphones from "../assets/desktop/image-earphones-yx1.jpg";
import Headphone from "../assets/desktop/image-headphone.jpg";
import Speaker from "../assets/desktop/image-speaker-zx9.png";

const cards = [
  { id: 1, image: Earphones, title: "earphone " },
  { id: 2, image: Headphone, title: "head phones " },
  { id: 3, image: Speaker, title: "speakers" },
];

const Cards = () => {
  return (
    <div
      className={`grid grid-cols-1 gap-6 px-8 py-8 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 md:px-28 xl:px-60 pb-28 lg:gap-6 xl:gap-6`}
    >
      {cards.map((card, index) => (
        <div
          key={card.id}
          className={`border rounded-lg overflow-hidden bg-neutral-300/40 shadow-lg  `}
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <img src={card.image} alt={card.title} className=" w-full h-48 " />

          <div className="p-4 mt-4">
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
