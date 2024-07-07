import React from "react";
import subsection4 from '../assets/subsection4.png'
const Subsection4 = () => {
  return (
    <div className="bg-[#F5F6FF] py-10 px-5 flex flex-col items-center gap-4">
      <div className="text-base sm:text-xl font-bold text-center">More efficiently visualize your data</div>
      <div className="lg:mx-52 text-xs sm:text-sm md:text-base text-center">
        Visual representations help us to understand data easier and quicker.
        They make large volumes of data, and sometimes complicated ones,
        properly represented and with authority and clarity.{" "}
      </div>
      <div className="w-[80%] sm:w-[50%]">
        <img src={subsection4} alt="" />
      </div>
    </div>
  );
};

export default Subsection4;
