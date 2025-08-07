import React from "react";
import { stats } from "../constant/data";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Button from "./Button";
const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, //only trigger the animation once
    threshold: 0.3, //start when 30% of the element is visible
  });
  return (
    <section className="section">
      <div className="container grid md:grid-cols-2 md:items-center gap-[50px]">
        {/* content */}
        <div className="md:order-1">
          <p className="text-lg text-lime-600 mt-2">About Us</p>
          <h2 className="mb-4">Our Mission</h2>
          <p className="mb-8">
            We are daily driven to keep our promise, increase our land bank,
            expand our client base offering excellent services and affordable
            housing products with a singular mission to exceed expectations.
          </p>

          {/* Stats */}
          <div
            className="flex flex-wrap items-center justify-center md:justify-start gap-5 md:gap-10 text-center"
            ref={ref}
          >
            {stats.map((stat) => (
              <div key={stat.id}>
                <h3 className="text-3xl md:text-4xl font-bold text-lime-600">
                  {inView && <CountUp end={stat.value} duration={2} />} +
                </h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        {/* banner */}
        <figure>
          <img
            src="/images/group.JPG"
            alt="about banner"
            className="w-full h-full object-cover rounded-xl"
          />
        </figure>
      </div>
    </section>
  );
};

export default About;
