import React from "react";
import { constant } from "./constant";
import { Link } from "react-router-dom";
function Lists() {
  return (
    <div className="flex justify-center"> {/* Centering wrapper */}
  <div className="flex flex-wrap   w-[550px] h-[400px] gap-8 mt-28">
    {constant.map((field, index) => (
      <div
        className="max-w-sm w-64 rounded overflow-hidden shadow-lg h-40 bg-[#D9D9D9] hover:opacity-75 cursor-pointer"
        key={index}
      >
      <Link to={field.path}>
      <span>
      <div className="px-4 py-2">
          <div className=" font-medium text-lg  mt-3 text-black text-center">
            {field.title}
          </div>
        </div>
        <div className="px-4 pb-4 text-center">
          <span className="inline-block cursor-pointer  rounded-full px-5 py-2 text-sm font-semibold text-black mr-2 mb-2 bg-[#c9cbfb]">
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
