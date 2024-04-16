
import { useState } from "react";
import FormExtra from "./FormExtra";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [loginEmailVal, setLoginEmailVal] = useState("");
  const [loginPasswordVal, setLoginPasswordVal] = useState("");
  const [emailLabel, setEmailLabel] = useState("Email Address"); 
  const [message,setMessage] = useState('') ;
  const navigate = useNavigate();
  const handleChangeEmail = (e) => {
    setMessage('') ;
    setLoginEmailVal(e.target.value);
  };
  const handleChangePassword = (e) => {
    setMessage('') ;
    setLoginPasswordVal(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    authenticateUser();
  };

  const authenticateUser = async() => {
    if(emailLabel=="Username"){
      try{
        const response = await axios.post("api/admin/login/subAdmin",{
          "userName":"ASA",
          "password":"sdfsdfgsdfgg"
      });
      if(response.data.user){
        setMessage('')
      }
      } catch (error){
        console.error("Error fetching data:", error.response.status);
        if( error.response.status == 404){
          setMessage("User Not Found .....")
        }else{
          setEmailLabel("Internal Server Error")
        }
      }
    }else{
      navigate("../AdminHome");
    }
  };

  const handleSubAdminClick = () => {
    setEmailLabel("Username"); 
    setMessage('')
  };

  const handleSubAdminClickB = () => {
    setEmailLabel("Email Address"); 
    setMessage('')
  };

  return (
    <div className="">
     <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
     <div className=" flex flex-row gap-28 text-blue-700 text-xl">
        <div>
        <button onClick={handleSubAdminClick}>Subadmin Login</button>
        </div>
        <div>
        <button onClick={handleSubAdminClickB}>Admin Login</button>
        </div>
      </div>
      <div className="-space-y-px">
        <Input
          handleChange={handleChangeEmail}
          value={loginEmailVal}
          type="email"
          placeholder={emailLabel} 
          labelText={emailLabel} 
          labelFor="Email"
          my1="my-5"
          bg1="bg-[#FAEBEB]"
        />
        <Input
          handleChange={handleChangePassword}
          value={loginPasswordVal}
          type="password"
          placeholder="Password"
          labelText="Enter Password"
          labelFor="Password"
          my1="my-5"
          bg1="bg-[#FAEBEB]"
        />
      </div>
      <FormExtra />
      <div className=" text-red-500 ms-16">{message}</div>
      <Button handleSubmit={handleSubmit} text="Login" />
    </form>
    </div>
   
  );
}
