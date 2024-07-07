import React from "react";
import image1 from "../assets/section3_image_a.png";
import image2 from "../assets/section3_image_b.png";

const Subsection3 = () => {
  return (
    <div className="flex flex-col gap-4 sm:gap-0">
      <div className="flex flex-col gap-5 items-center justify-center sm:flex-row sm:justify-between py-5 sm:py-10 sm:px-10 lg:py-20 lg:px-20">
        <div className="w-[60%] md:w-[40%]">
          <img src={image1} alt="" />
        </div>
        <div className="w-[60%] md:w-[50%] lg:w-[35%] my-auto gap-3">
          <div className="text-sm sm:text-xl md:text-2xl lg:text-2xl font-bold">
            Highlight Information
          </div>
          <div className="text-xs sm:text-sm md:text-base lg:text-lg">
            With the conditional formatting option, you can effortlessly detect
            critical issues and identify patterns and trends. Easy! It can help
            you to notice your important data first.
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-5 items-center justify-center sm:flex-row sm:justify-between py-5 sm:py-10 sm:px-10 lg:py-20 lg:px-20">
        <div className="w-[60%] md:w-[50%] lg:w-[35%] my-auto flex flex-col gap-3">
          <div className="sm:text-xl md:text-2xl lg:text-2xl font-bold">
            Easily find data with filter{" "}
          </div>
          <div className="text-xs sm:text-sm md:text-base lg:text-lg">
            Add filters based on Date, Relations, or Text and always have
            up-to-date and customizable data, as different data can be quickly
            shown on the change of criteria. Powerful, right?!
          </div>
        </div>
        <div className="w-[60%] md:w-[40%]">
          <img src={image2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Subsection3;
