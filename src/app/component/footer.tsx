import Link from "next/link";
import React from "react";
import { AiFillFacebook, AiFillGithub } from "react-icons/ai";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font bg-blue-200">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          {/* Logo Section */}
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image src="/data/pic/muneebpic.png"
            alt="Muneeb" width={50} height={50} className="rounded-full" />
            <span className="ml-3 text-xl font-semibold">Muneeb Adil</span>
          </a>
          
          {/* Social Icons */}
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-4">
            <Link href="https://facebook.com" target="_blank" className="text-gray-500 transition duration-300 hover:text-blue-600">
              <AiFillFacebook className="text-3xl" />
            </Link>
            <Link href="https://github.com" target="_blank" className="text-gray-500 transition duration-300 hover:text-gray-800">
              <AiFillGithub className="text-3xl" />
            </Link>
          </span>
        </div>
        <div className="text-center py-4 text-gray-700 text-sm bg-blue-300">
          © {new Date().getFullYear()} Muneeb Adil. All rights reserved.
        </div>
      </footer>
    </div>
  );
};
export default Footer;
