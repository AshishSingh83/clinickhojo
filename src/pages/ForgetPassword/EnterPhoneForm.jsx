import React, { useState, useRef } from "react";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router";
export default function EnterPhoneForm() {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleChange = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
    console.log('otp sent');
  };

  const authenticateUser = () => {
  };
  const bool = true ;
  return (
    <form className="mt-8 space-y-3 " onSubmit={handleSubmit}>
      <div className="-space-y-px">
        <div className=" ms-2 font-medium text-black" style={{fontSize:'18px'}}>
          <span>OTP will be sent to  +9172XXXXXXXX</span> <br/>
        </div>
      </div>
      <div className=" w-36 ms-20">
      <Button handleSubmit={handleSubmit} text="Send OTP" />
      </div>
    </form>
  );
}
