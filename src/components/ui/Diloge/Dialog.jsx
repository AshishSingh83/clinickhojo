import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaSpinner } from "react-icons/fa"; 

function Dialog({ message, onDialog, sniper = false }) {
  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center"
      onClick={() => onDialog(false)}
    >
      <div
        className="text-black flex flex-col items-center justify-center relative bg-white p-8 rounded-md"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 cursor-pointer"
          onClick={() => onDialog(false)}
        >
          <AiOutlineClose size={24} />
        </button>
        <h3 className="text-black text-base mb-8 mt-5">{message}</h3>
        <div className="flex items-center">
          <button
            className="bg-red-500 text-white px-6 py-2 mr-8 rounded cursor-pointer flex items-center justify-center"
            onClick={() => onDialog(true)}
            disabled={sniper} 
          >
            {sniper ? <FaSpinner className="animate-spin" /> : "Yes"}{" "}
           
          </button>
          <button
            className={`bg-green-500 text-white px-6 py-2 rounded ${
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
