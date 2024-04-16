import React, { useState, useRef } from "react";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";
export default function EnterOtpForm() {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const otpInputs = useRef([]);
  const navigate = useNavigate();
  const handleChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== "" && index < otp.length - 1) {
      otpInputs.current[index + 1].focus();
    }
  };

  const handleBackspace = (index, e) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      otpInputs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    console.log(otp);
    e.preventDefault();
    authenticateUser();
  };

  const authenticateUser = () => {
    navigate("../EnterPassword");
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="-space-y-px">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            value={digit}
            ref={(input) => (otpInputs.current[index] = input)}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleBackspace(index, e)}
            className="w-12 h-12 mx-1 border border-blue-700 rounded text-center text-white bg-[#FAEBEB]"
          />
        ))}
        <div className=" pt-2 ps-6 flex flex-row ">
          <span className="text-black">Did not received ? </span>
          <span className=" text-blue-700  underline">Send Again</span>
        </div>
      </div>
    </form>
  );
}
