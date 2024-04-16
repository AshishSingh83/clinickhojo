import React, { useState, useRef } from "react";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { useNavigate } from "react-router";
export default function EnterPasswordForm(){
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [againPassword, setAgainPassword] = useState("");
  const handleChange = (e) => {
    setPassword(e.target.value);
  };
  const handleChangeAgain = (e) => {
    setAgainPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  };

  const authenticateUser = () => {
    navigate('../AdminHome')
  };
  const bool = true ;
  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="-space-y-px">
        <Input
          key="InputPassword"
          handleChange={handleChange}
          value={password}
          labelText="Enter New Password"
          labelFor="Password"
          id="Input_Password"
          name="Password"
          type="password"
          isRequired={bool}
          placeholder="Enter New Password"
          bg1="bg-[#FAEBEB]"
          my1="my-5"
        />
        <Input
          key="AgainInputPassword"
          handleChange={handleChangeAgain}
          value={againPassword}
          labelText="Confirm New Password"
          labelFor="AgainPassword"
          id="Again_Input_Password"
          name="Input_Password"
          type="password"
          isRequired={bool}
          placeholder="Confirm New Password"
          bg1="bg-[#FAEBEB]"
          my1="my-5"
        />
      </div>
      <div className=" w-44 ms-16 " 
      >
      <Button handleSubmit={handleSubmit} text="Sign In" bgColor="bg-[#81FF76]" hoverColor="hover:bg-[#0db81b]" textColor="text-black" 
      />
      </div>
    </form>
  );
}
