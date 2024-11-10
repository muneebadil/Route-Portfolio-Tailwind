import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = () => {
  return (
    <div id="Project">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              MY PROJECTS
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* Project 1 */}
            <div className="lg:w-1/2 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative h-80"> {/* Set height for the image container */}
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/data/project/projectone.png" // Use the relative path
                  width={400}
                  height={400}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Editable Resume Builder
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Resume Builder
                  </h1>
                  <p className="leading-relaxed">
                    Creating Amazing Resume in less than 2 minutes
                  </p>
                  <Link href={"https://editable-resume-builder-puce.vercel.app/"}>
                    <p className="leading-relaxed">View Project</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Additional Projects */}
            <div className="lg:w-1/2 sm:w-1/2 p-4">
              <div className="flex relative h-80"> {/* Set height for the image container */}
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/data/project/projecttwo.png"
                  width={400}
                  height={400}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Portfolio
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Personal Portfolio
                  </h1>
                  <p className="leading-relaxed">
                    Amazing Frontend using the power of HTML and CSS
                  </p>
                  <Link href={"https://portfolio-html-css-lac-delta.vercel.app/"}>
                    <p className="leading-relaxed">View Project</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Repeat similar structure for other projects */}
            {/* You can copy and paste the same structure for other projects */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
