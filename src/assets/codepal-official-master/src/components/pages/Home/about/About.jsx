import React from "react";
import { teamMembers } from "./data";

const Team = () => {
  return (
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide font-bold">
          Meet Our
          <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">
            {" "}
            Experts.
          </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
          Our team is comprised of industry experts with a wealth of experience
          and a passion for excellence.
        </p>

        <div className="justify-center mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {teamMembers.map((member) => (
            <article
              key={member.id}
              className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-x-4 text-xs">
                  <a
                    href={member.href}
                    className="relative z-10 rounded-full bg-gradient-to-r from-red-600 to-red-800 px-3 py-1.5 font-medium text-white shadow-md"
                  >
                    {member.role}
                  </a>
                </div>
                <div className="group relative mt-4">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-neutral-900 group-hover:text-red-600 transition-colors duration-300">
                    <a href={member.href}>
                      <span className="absolute inset-0" />
                      {member.name}
                    </a>
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-neutral-600">
                    {member.bio}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
