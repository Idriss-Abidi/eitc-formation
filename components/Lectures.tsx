"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { blogPosts } from "../constants/content.js";

const Lectures = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Calculate the index of the last and first post to display
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Handle pagination
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div id="Lectures" className=" pb-4 mt-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ y: -50, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="text-center text-5xl font-bold text-white text-neon"
        style={{ fontFamily: '"Share Tech", sans-serif' }}
      >
        SESSIONS
      </motion.h2>
      <p
        className="text-center text-[17px] font-bold text-neon p-1"
        style={{ fontFamily: '"Share Tech", sans-serif' }}
      >
        Here you can explore the lectures from the EITC CP Cell session, where
        we’ve carefully curated the best and most widely used resources to
        enhance your competitive programming skills and knowledge.
      </p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {currentPosts.map((post, index) => (
          <article
            key={index}
            className=" shadow-lg shadow-blue-300/90 cursor-pointer relative isolate h-[250px] group overflow-hidden rounded-2xl bg-gray-900"
            onClick={() => window.open(post.pdf, "_blank")}
          >
            <div className="absolute inset-0">
              <Image
                src={post.image}
                alt={`Cover for ${post.title}`}
                layout="fill"
                objectFit="cover"
                className="transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-gray-900/0" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="relative p-8 flex flex-col h-full justify-end">
              <div className="flex items-center gap-x-4 text-white">
                <time className="text-sm leading-6 font-semibold">
                  {post.date}
                </time>
                <div className="flex items-center gap-x-2">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={32}
                    height={32}
                    className="h-8 w-8 rounded-full bg-white/10"
                  />
                  <span className="text-sm font-semibold leading-6">
                    {post.author.name}
                  </span>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <a href="#" className="hover:underline">
                  {post.title}
                </a>
              </h3>
            </div>
          </article>
        ))}
      </div>
      {/* <div className="flex justify-center mt-8">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-700 text-white rounded-lg mx-2 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-white ">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-700 text-white rounded-lg mx-2 disabled:opacity-50"
        >
          Next
        </button>
      </div> */}
      <div className="flex justify-center items-center mt-8 space-x-4">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className=" shadow-lg shadow-blue-300/90 px-4 py-2 bg-gray-700 text-white rounded-lg disabled:opacity-50"
        >
          Prev
        </button>
        <span className="text-white text-md font-semibold">
          {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className=" shadow-lg shadow-blue-300/90 px-4 py-2 bg-gray-700 text-white rounded-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Lectures;
