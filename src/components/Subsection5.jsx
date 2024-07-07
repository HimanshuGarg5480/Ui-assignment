import React from "react";
import image1 from "../assets/section5_image_a.png";
import image2 from "../assets/section5_image_b.png";

const Subsection5 = () => {
  return (
    <div className="py-10 flex flex-col gap-10">
      <div className="text-center flex flex-col gap-1">
        <div className="text-lg sm:text-xl lg:text-3xl font-bold">
          Stop recording transactions manually
        </div>
        <div className="text-xs sm:text-sm lg:text-base">
          Spreadsheet integrated with other NextcloudERP’s app
        </div>
      </div>

      <div className="block sm:hidden">
        <ul className="flex flex-col items-center gap-5">
          <li className="flex justify-between gap-10">
            <div className="flex flex-col items-center">
              <div className="w-14">
                <img src={image1} alt="" />
              </div>
              <div className="text-xs font-semibold">Sales</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14">
                <img src={image2} alt="" />
              </div>
              <div className="text-xs font-semibold">Accounting</div>
            </div>
          </li>
          <li className="flex justify-between gap-10">
            <div className="flex flex-col items-center">
              <div className="w-14">
                <img src={image1} alt="" />
              </div>
              <div className="text-xs font-semibold">Subscriptions</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14">
                <img src={image2} alt="" />
              </div>
              <div className="text-xs font-semibold">Documents</div>
            </div>
          </li>
        </ul>
      </div>

      <div className="hidden sm:block">
        <ul className="flex justify-center gap-7 lg:gap-14">
          <li className="flex flex-col items-center">
            <div className="w-14">
              <img src={image1} alt="" />
            </div>
            <div className="text-xs font-semibold">Sales</div>
          </li>
          <li className="flex flex-col items-center">
            <div className="w-14">
              <img src={image2} alt="" />
            </div>
            <div className="text-xs font-semibold">Acconting</div>
          </li>
          <li className="flex flex-col items-center">
            <div className="w-14">
              <img src={image1} alt="" />
            </div>
            <div className="text-xs font-semibold">Subscriptions</div>
          </li>
          <li className="flex flex-col items-center">
            <div className="w-14">
              <img src={image2} alt="" />
            </div>
            <div className="text-xs font-semibold">Documents</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Subsection5;
