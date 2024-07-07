import React from "react";
import Subsection2a from "../assets/Subsection2a.png";
import Subsection2b from "../assets/image2.png";
import Subsection2c from "../assets/image3.png";
import Subsection2d from "../assets/image4.png";

const Subsection2 = () => {
  return (
    <div className="mt-4 sm:mt-0 bg-[#FFFCE2] flex flex-col gap-7 sm:gap-7 lg:gap-16 pt-10 sm:pt-10 lg:pt-20">
      <div className="sm:text-lg lg:text-2xl font-bold text-center">
        <div>Keep focus on profit rest of things </div>
        <div>we do it for you</div>
      </div>
      <div>
        <ul className="flex flex-col sm:flex-row gap-2">
          <li>
            <div className=" flex flex-col items-center gap-3">
              <div className="w-16 sm:w-14 lg:w-20">
                <img src={Subsection2a} alt="" />
              </div>
              <div className="text-center flex flex-col gap-2">
                <div className="sm:text-xs lg:text-xl font-semibold">
                  Easily manage data
                </div>
                <div className="text-[60%] md:text-xs lg:text-sm">
                  anyone can easily access & manage data with the authentic user
                  permission.
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="flex flex-col items-center gap-3">
              <div className="sm:w-14 lg:w-20">
                <img src={Subsection2b} alt="" />
              </div>
              <div className="text-center flex flex-col gap-2">
                <div className="sm:text-xs lg:text-xl font-semibold">
                  Make projections
                </div>
                <div className="text-[60%] md:text-xs lg:text-sm">
                  Understand your financial situation and discover your profit
                  potential.
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="flex flex-col items-center gap-3">
              <div className="sm:w-14 lg:w-20">
                <img src={Subsection2c} alt="" />
              </div>
              <div className="text-center flex flex-col gap-2">
                <div className="sm:text-xs lg:text-xl font-semibold">
                  Calculate commission
                </div>
                <div className="text-[60%] md:text-xs lg:text-sm">
                  Devise a strong business plan and enhance team performance.
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="flex flex-col items-center gap-3">
              <div className="sm:w-14 lg:w-20">
                <img src={Subsection2d} alt="" />
              </div>
              <div className="text-center flex flex-col gap-2">
                <div className="sm:text-xs lg:text-xl font-semibold">
                  Analyze Data
                </div>
                <div className="text-[60%] md:text-xs lg:text-sm">
                  Devise a strong business plan and enhance team performance.
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default Subsection2;
