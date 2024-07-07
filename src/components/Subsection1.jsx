import React from "react";
import subsection1 from "../assets/Subsection1.png";
const Subsection1 = () => {
  return (
    <div className="flex justify-between">
      <div className="sm:w-[40%] h-fit mx-auto mt-14 sm:ml-16 lg:ml-48 sm:mt-20 md:mt-28 flex flex-col gap-3 sm:gap-3 md:gap-5 lg:gap-5">
        <div className="flex sm:flex-col">
          <div className="text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl sm:font-extrabold">
            Go to extra mile
          </div>
          <div className="text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl sm:font-extrabold">
            with Spreadsheet
          </div>
        </div>
        <div className="text-[#505050] text-[10px] sm:text-[11px] md:text-xs lg:text-sm font-medium">
          Upskill your Bussiness Intelligence practices.
        </div>
        <div className="flex items-center gap-5">
          <button className="border border-black font-medium text-[10px] sm:text-[10px] md:text-xs lg:text-sm rounded-2xl py-[2px] px-[6px] sm:py-1 sm:px-2 lg:py-2 lg:px-4">
            Meet an Expert
          </button>
          <button className="bg-[#FF521B] text-white font-medium text-[12px] sm:text-[12px] md:text-sm lg:text-sm rounded-2xl py-[2px] px-[6px] sm:py-1 sm:px-3 lg:py-2 lg:px-4">
            Schedule a Demo
          </button>
        </div>
      </div>
      <div className="mt-10 w-0 sm:w-[60%] lg:w-[600px]">
        <img src={subsection1} alt="" />
      </div>
    </div>
  );
};

export default Subsection1;
