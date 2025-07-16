import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import { motion } from "framer-motion";
const Testimonials = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y:100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x:0 }}
      viewport={{ once: true }}
      id="Testimonials"
      className="container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
    >
      <h1 className="text-2xl sm:text-4xl fint-bold mb-2">
        Customers{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Testimonials
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        What our clients say about us
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonialsData.map((data, index) => (
          <div
            key={index}
            className="max-w-[340px] border shadow-lg rounded px-8 py-12 text-center"
          >
            <img
              src={data.image}
              alt={data.alt}
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{data.name}</h2>
            <p className="text-gray-600 mb-4 text-sm">{data.title}</p>
            <div className="flex justify-center items-center gap-2 mb-4 text-red-500">
              {Array.from({ length: data.rating }, (item, index) => (
                <img key={index} src={assets.star_icon} alt="" />
              ))}
            </div>
            <p className="text-gray-600 ">{data.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
