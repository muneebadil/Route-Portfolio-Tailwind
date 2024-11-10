import React from "react";
import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
  return (
    <div id="Contact">
      <section className="text-gray-600 body-font relative bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Feel free to reach out for any inquiries!
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg transition duration-300">
                  Send Message
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a href="mailto:mohammadmuneeb197@email.com" className="text-indigo-500">
                  mohammadmuneeb197@email.com
                </a>
                <p className="leading-normal my-5">
                  Garden West
                  <br />
                  Karachi, Pakistan
                </p>
                <span className="inline-flex space-x-4">
                  <a href="https://facebook.com" target="_blank" className="text-gray-500 hover:text-blue-600">
                    <AiFillFacebook className="text-2xl" />
                  </a>
                  <a href="https://twitter.com" target="_blank" className="text-gray-500 hover:text-blue-400">
                    <AiFillTwitterCircle className="text-2xl" />
                  </a>
                  <a href="https://instagram.com" target="_blank" className="text-gray-500 hover:text-pink-500">
                    <AiFillInstagram className="text-2xl" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" className="text-gray-500 hover:text-blue-700">
                    <AiFillLinkedin className="text-2xl" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
