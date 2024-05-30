import React from "react";
import { links, stats } from "./data";

const Career = () => {
  return (
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide font-bold">
          Work With
          <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">
            {" "}
            Us.
          </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
          Empowering businesses with innovative solutions, our software company
          delivers tailored digital solutions to streamline operations and
          enhance efficiency.
        </p>

        <div className="flex mt-10 justify-center">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center justify-center py-3 px-5 bg-red-600 rounded-md hover:bg-red-700 transition duration-300 shadow-lg transform hover:-translate-y-1"
              >
                <span>{link.name}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a.75.75 0 0 1 .53.22l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06-1.06L13.94 10 9.47 5.53A.75.75 0 0 1 10 4.41V4a.75.75 0 0 1 .75-.75zM4.75 19a.75.75 0 0 1-.53-1.28l5-5a.75.75 0 0 1 1.06 1.06L5.06 18.28a.75.75 0 0 1-.53.22z"
                  />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            >
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="text-3xl font-bold leading-9 tracking-tight text-red-600 mt-2">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Career;
