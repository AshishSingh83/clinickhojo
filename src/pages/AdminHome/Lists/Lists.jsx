
import React from "react";
import { constant } from "./constant";
import { Link } from "react-router-dom";

function Lists() {
  return (
    <div className="flex justify-center ">
      <div className="flex flex-wrap items-center  gap-8 mt-10 md:w-[550px] md:mt-28 justify-center md:justify-start ">
        {constant.map((field, index) => (
          <div
            className=" max-w-sm md:w-64 rounded-lg overflow-hidden shadow-lg md:h-40 bg-[#FFFFFF] hover:opacity-75 cursor-pointer "
            key={index}
          >
            <Link to={field.path}>
              <span>
                <div className="px-4 md:py-2">
                  <div className="font-medium text-lg mt-3 text-black text-center">
                    {field.title}
                  </div>
                </div>
                <div className="px-4 pb-4 text-center">
                  <span className="inline-block cursor-pointer rounded-full px-5 py-2 text-sm font-semibold text-black mr-2 mb-2 bg-[#c9cbfb]">
                    view...
                  </span>
                </div>
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lists;
