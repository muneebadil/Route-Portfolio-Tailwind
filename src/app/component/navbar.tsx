import Link from "next/link";
import Image from "next/image";
import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="bg-blue-600 z-50 sticky top-0 shadow-md">
      <header className="container mx-auto flex flex-wrap p-4 md:p-6 items-center text-white">
        {/* Logo and Name */}
        <div className="flex items-center">
          <Image 
            // src={require("../../../public/data/pic/muneebpic.png")} 
           src="/data/pic/muneebpic.png"
            alt="Muneeb Adil's profile picture" 
            width={50} 
            height={50} 
            className="rounded-full border-2 border-white"
          />
          <span className="ml-3 text-2xl font-semibold">MUNEEB ADIL</span>
        </div>
        
        {/* Navigation Links */}
        <nav className="ml-auto md:flex space-x-8 text-lg hidden">
          <Link href="/" className="hover:text-yellow-300 transition duration-300">
            HOME
          </Link>
          <Link href="/aboutus" className="hover:text-yellow-300 transition duration-300">
            ABOUT
          </Link>
          <Link href="/Contact" className="hover:text-yellow-300 transition duration-300">
            CONTACT
          </Link>
          <Link href="/Projects" className="hover:text-yellow-300 transition duration-300">
            PROJECTS
          </Link>

        </nav>
        
        {/* Download CV Button */}
        <div className="ml-8 mt-4 md:mt-0">
          <Link href="/data/cv/cv_digital_marketer.pdf">
            <button className="flex items-center bg-white text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300">
              DOWNLOAD CV
              <AiOutlineCloudDownload className="ml-2 text-2xl" />
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
