import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div
      className="p-10 px-4 md:px-20 lg:px-32 bg-gray-100 bg-gray-800 w-full overflow-hidden text-white"
      id="Footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo_dark} alt="" />
          <p className="text-gray-400 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
            quia error laudantium sequi rem! Vel voluptates minima nostrum id
            perferendis dignissimos vitae dicta mollitia ea dolore, iure quos
            aliquam aliquid labore maiores hic voluptatum praesentium nesciunt.
            Odit iusto rerum vero nam pariatur, perferendis enim sint inventore
            ullam, labore autem non.
          </p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="text-gray-400 flex flex-col gap-2">
            <a href="#Header" className=" mb-2 hover:text-white">
              Home
            </a>
            <a href="#About" className=" mb-2 hover:text-white">
              About
            </a>
            <a href="#Projects" className=" mb-2 hover:text-white">
              Projects
            </a>
            <a href="#Testimonials" className=" mb-2 hover:text-white">
              Testimonials
            </a>
          </ul>
        </div>
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Subscribe </h3>
          <p className="text-gray-400 mb-4 max-w-80">
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro odit
            enim quae laborum? Officiis, ea?
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              className="p-2 rounded bg-gray-800 text-white border-gray-700 focus:outline-none"
            />
            <button className="py-2 rounded bg-blue-500 text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-400 mt-10">
        Copyright 2025 @ Shruti. All right reserved
      </div>
    </div>
  );
};

export default Footer;
