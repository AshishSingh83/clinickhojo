import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaSpinner } from "react-icons/fa"; 

function Dialog({ message, onDialog, sniper = false , bga="bg-red-500" , bgb="bg-green-500" }) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center  md:me-0 "
      onClick={() => onDialog(false)}
    >
      <div
        className="bg-white p-8 rounded-md text-black flex flex-col items-center justify-center relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 cursor-pointer"
          onClick={() => onDialog(false)}
        >
          <AiOutlineClose size={24} />
        </button>
        <h3 className="text-base mb-8 mt-5">{message}</h3>
        <div className="flex items-center">
          <button
            className={` ${bga} text-white px-6 py-2 mr-8 rounded cursor-pointer flex items-center justify-center `}
            onClick={() => onDialog(true)}
            disabled={sniper} 
          >
            {sniper ? <FaSpinner className="animate-spin" /> : "Yes"}
          </button>
          <button
            className={`${bgb} text-white px-6 py-2 rounded ${
              sniper ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }`}
            onClick={() => onDialog(false)}
            disabled={sniper} 
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dialog;
