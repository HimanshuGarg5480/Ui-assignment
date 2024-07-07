import React from "react";
import NavbarImg from "../assets/NavbarImg.png";
const Subsection6 = () => {
  return (
    <div className="sm:mt-10">
      
      <div className="">
        <div className="flex justify-around gap-5 text-[10px] sm:text-xs font-medium text-[#505050]">
          <div className="flex flex-col gap-7 pl-4">
            <div className="w-14 sm:w-20">
              <img src={NavbarImg} alt="" />
            </div>
            <div className="flex flex-col gap-3 text-[10px] sm:text-xs">
              <div>Get Support</div>
              <div>Become a partner</div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="text-[10px] sm:text-xs text-black font-bold">Products</div>
            <ul className="flex flex-col gap-3">
              <li>Finance</li>
              <li>Sales</li>
              <li>Website</li>
              <li>Inventory & MRP</li>
              <li>HR</li>
              <li>Marketing</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <div className="text-[10px] sm:text-xs text-black font-bold">Get Started</div>
            <ul className="flex flex-col gap-3">
              <li>What is CloudERP?</li>
              <li>Solutions</li>
              <li>Customer Stories</li>
              <li>FAQs</li>
              <li>Offers</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <div className="text-[10px] sm:text-xs text-black font-bold">About</div>
            <ul className="flex flex-col gap-3">
              <li>Help and Support</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Login</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subsection6;
