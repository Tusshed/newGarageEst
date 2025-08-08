import React from "react";
import { teams } from "../constant/data";
import Button from "./Button";
const Team = () => {
  return (
    <section className="section pb-[90px] md:pb-[150px]">
      <div className="container">
        <p className="text-lg text-lime-600 mt-2">Our Team</p>
        <h2>Meet our Team</h2>

        <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-4 mt-10">
  {teams.map((member) => (
    <div className="relative" key={member.id}>
      {/* image */}
      <figure className="overflow-hidden rounded-lg h-48 sm:h-64 lg:h-72">
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[75%] bg-white p-4 border text-center rounded-lg border-gray-300">
        <h4 className="font-semibold text-lg text-green-700">
          {member.name}
        </h4>
        <p>{member.role}</p>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default Team;
