import React from "react";
import EnterOtpForm from "./EnterOtpForm";
import EnterPhoneForm from "./EnterPhoneForm";
function EnterOtp() {
  return (
    <div class="containerr">
    <div className=" m-20 pt-10 pb-10 ">
    <EnterPhoneForm/>
      <div className="pt-5 ">
        <h3>Enter Otp Sent to </h3>
        <h3>Mobile Number +9182XXXXXXXX</h3>
      </div>
      <EnterOtpForm />
    </div>
    </div>
  );
}

export default EnterOtp;
