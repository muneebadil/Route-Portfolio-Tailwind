"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div id="About">
      <section className="text-gray-600 body-font bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          {/* Text Section */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-4xl mb-4 font-bold text-gray-900">
              I AM
              <br className="hidden lg:inline-block" />
              MOHAMMAD MUNEEB ADIL
            </h1>
            <div className="w-[150px] h-[3px] bg-gray-800 my-4"></div>
            <p className="mb-8 leading-relaxed text-gray-700 text-lg">
              Professional Digital Marketer and SEO Expert with over 5 years of experience. Currently exploring the Metaverse and Web 3.0 from Governor House Sindh. <br /> Skilled in HTML, CSS, JavaScript, TypeScript, Node, React, and Next.js.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link href="#Contact">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-3 px-8 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg transition duration-300">
                  Contact
                </button>
              </Link>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded-full mx-auto shadow-lg"
              alt="Mohammad Muneeb Adil"
              width={400}
              height={400}
              src="/data/pic/muneebpic.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Hero;
