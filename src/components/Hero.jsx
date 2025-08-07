import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="bg-[url(/images/Adron2.jpeg)] hero">
      <div className="container text-green-500">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px]">
          Secure the Land <br /> That Defines Your Legacy. <br /> Your Dream
          Home.
        </h1>
        <p className="text-black-200 max-w-[440px] pt-4 pb-8">
          From compact land plots to vast properties, our expertise ensures you
          find the perfect setting for your vision.
        </p>
        <Button
          label="Schedule A Tour"
          className="primary-btn bg-green-600 text-gray-100"
        />
      </div>
    </section>
  );
};

export default Hero;
