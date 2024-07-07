import React, { useState } from "react";
import NavbarImg from "../assets/NavbarImg.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeFill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="sm:hidden">
        <div className="flex justify-between items-center pl-1 pr-5 text-[#141414] font-medium">
          <div className="w-16">
            <img src={NavbarImg} alt="" />
          </div>
          <div className="flex gap-2 items-center text-[75%] font-semibold py-2 px-1">
            <div>Log in</div>
            <button className="bg-[#FF521B] px-3 py-1 rounded-xl text-[#FFFFFF] text-md font-medium flex items-center">
              Schedule a Demo
            </button>
          </div>
          <div className="ml-2 mt-1">
            <button onClick={toggleMenu}>
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
        <div
          className={`absolute top-0 left-0 w-full bg-slate-100 shadow-md transition-transform duration-300 ease-in-out ${
            isOpen ? "transform translate-y-0" : "transform -translate-y-full"
          }`}
        >
          <div className="p-4 font-medium">
            <div className="flex justify-end text-2xl">
              <button className="focus:text-lg" onClick={toggleMenu}>
                <RiCloseLargeFill />
              </button>
            </div>
            <ul>
              <li className="p-2 border-b flex items-center gap-1">
                <span>Products</span> <IoIosArrowDown />
              </li>
              <li className="p-2 border-b flex items-center gap-1">
                <span>Solutions</span>
                <IoIosArrowDown />
              </li>
              <li className="p-2 border-b">Customer Stories</li>
              <li className="p-2">Support & Resources</li>
              <li className="p-2">Services</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="hidden sm:block">
        <div className="px-1 pt-1 md:px-5 lg:px-20 flex gap-2 md:gap-10 items-center justify-around md:justify-between text-[#141414]">
          <div className="flex justify-between items-center gap-3 md:gap-7">
            <div className="w-14 md:w-24">
              <img src={NavbarImg} alt="" />
            </div>
            <div className="flex text-[70%] lg:text-sm font-semibold justify-between gap-4">
              <div className="flex items-center">
                <span>products</span> <IoIosArrowDown />
              </div>
              <div className="flex items-center">
                <span>solutions</span>
                <IoIosArrowDown />
              </div>
              <div>Customer stories</div>
              <div>Support & Resources</div>
              <div>Services</div>
            </div>
          </div>
          <div className="flex items-center gap-1 md:gap-4 text-[70%] md:text-[74%] lg:text-sm">
            <div className="font-bold">login</div>
            <button className="bg-[#FF521B] px-3 py-2 rounded-xl text-[#FFFFFF] text-md font-medium flex items-center">schedule a demo</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
