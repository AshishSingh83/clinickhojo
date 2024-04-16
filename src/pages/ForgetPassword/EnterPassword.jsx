import React from "react";
import EnterPasswordForm from "./EnterPasswordForm";
import './global.css';
import EnterOtpForm from "./EnterOtpForm";
import EnterPhoneForm from "./EnterPhoneForm";
function EnterPassword() {
  return (
    <div className="bg-[#D9D9D9]">
      <div className=" m-24 pt-12 pb-12 ">
        <EnterPhoneForm/>
        <div>
        <EnterOtpForm/>
        </div>
        <EnterPasswordForm />
      </div>
    </div>
  );
}

export default EnterPassword;
