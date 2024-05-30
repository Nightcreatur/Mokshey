import React from "react";
import { posts } from "./data";

const Blogs = () => {
  return (
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide font-bold">
          Code Wisely With
          <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">
            {" "}
            Our Experts.
          </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
          voluptas culpa est, optio sequi molestias similique nostru
        </p>

        <div className=" justify-center mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gradient-to-r from-red-600 to-red-800 px-3 py-1.5 font-medium text-neutral-300 "
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-neutral-300 group-hover:text-neutral-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 border-neutral-800">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src={post.author.imageUrl}
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold border-neutral-300">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-neutral-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
