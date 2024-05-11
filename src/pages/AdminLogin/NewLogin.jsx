

import { useEffect, useState } from "react";
import FormExtra from "./FormExtra";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import InputWithIcon from "../../components/ui/InputWithIcon";

export default function NewLogin() {
  const [loginEmailVal, setLoginEmailVal] = useState("");
  const [loginPasswordVal, setLoginPasswordVal] = useState("");
  const [emailLabel, setEmailLabel] = useState("Email Address");
  const [message, setMessage] = useState("");
  const [expiryTime, setExpiryTime] = useState(0);
  const [data, setData] = useState({
    userName: '',
    password: '',
    label:'',
  });
  const [label,setLabel] = useState('');
  const navigate = useNavigate();
  const saveDataToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  const getDataFromLocalStorage = (key) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  };
  const deleteDataFromLocalStorage = (key) => {
    localStorage.removeItem(key);
  };
  const setExpiry = (timeInSeconds) => {
    const currentTime = new Date().getTime();
    setExpiryTime(currentTime + timeInSeconds * 1000);
  };
  const handleChangeEmail = (e) => {
    setMessage("");
    setLoginEmailVal(e.target.value);
  };
  const handleChangePassword = (e) => {
    setMessage("");
    setLoginPasswordVal(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    authenticateUser();
  };
  const handleAutoLogin = async(a,b)=>{
    try{
      const response = await axios.post("api/admin/login/subAdmin", {
        userName: a,
        password: b,
      });
      if (response.data.user){
        const dataa={
          userName: a,
          password: b,
          label: "Username",
        };
        const currentTime = new Date().getTime();
        const newTime = currentTime + (10 * 1000);
        saveDataToLocalStorage('myData', { dataa, expiry: newTime });
        setMessage("");
        navigate("../AdminHome");
      }
    } catch (error) {
      console.error("Error fetching data:", error.response.status);
      if (error.response.status == 404) {
        setMessage("User Not Found .....");
      } else {
        setEmailLabel("Internal Server Error");
      }
    }
  }
    useEffect(() => {
    const savedData = getDataFromLocalStorage('myData');
    console.log('okaaaaa');
    if (savedData){
      if(new Date().getTime() < savedData.expiry) {
              console.log('yahan bhi kyun',savedData.expiry-new Date().getTime());
              setLoginEmailVal(savedData.dataa.userName );
              setLoginPasswordVal(savedData.dataa.password);
              setLabel(savedData.dataa.label);
              handleAutoLogin(savedData.dataa.userName,savedData.dataa.password)
      }else{
        console.log('data experied');
        deleteDataFromLocalStorage('myData');
        setLoginEmailVal('');
        setLoginPasswordVal('');
      }
      
    }
  }, []);
  
  
  const authenticateUser = async()=>{
    console.log('called',loginEmailVal,loginPasswordVal);
    if (emailLabel == "Username" || data?.dataa?.label === "Username"){
      try{
        const response = await axios.post("api/admin/login/subAdmin", {
          userName: loginEmailVal,
          password: loginPasswordVal,
        });
        if (response.data.user){
          console.log(response.data);
          const dataa = {
            userName: loginEmailVal,
            password: loginPasswordVal,
            label: "Username",
          };
          const currentTime = new Date().getTime();
          const newTime = currentTime + (10 * 1000);
          console.log(newTime);
          console.log('not calleddddd');
          saveDataToLocalStorage('myData', { dataa, expiry: newTime });
          setMessage("");
          navigate("../AdminHome");
        }
      } catch (error) {
        console.error("Error fetching data:", error.response.status);
        if (error.response.status == 404) {
          setMessage("User Not Found .....");
        } else {
          setEmailLabel("Internal Server Error");
        }
      }
    } else {
      //navigate("../AdminHome");
    }
  };

  const handleSubAdminClick = () => {
    setEmailLabel("Username");
    setMessage("");
  };

  const handleSubAdminClickB = () => {
    setEmailLabel("Email Address");
    setMessage("");
  };
  function handleMe(){
    navigate("../EnterPassword")
   }
  return (
    <div>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="-space-y-px">
          {/* <Input
            handleChange={handleChangeEmail}
            value={loginEmailVal}
            type="email"
            placeholder="Username"
            labelText={emailLabel}
            labelFor="Email"
            my1="my-5"
            bg1="bg-[#FAEBEB]"
          /> */}
          <InputWithIcon
            handleChange={handleChangeEmail}
            value={loginEmailVal}
            type="email"
            placeholder="Username"
            my1="my-3"
            bg1="bg-[#FAEBEB]"
          />
          {/* <Input
            handleChange={handleChangePassword}
            value={loginPasswordVal}
            type="password"
            placeholder="Password"
            labelText="Enter Password"
            labelFor="Password"
            my1="my-5"
            bg1="bg-[#FAEBEB]"
          /> */}
          <InputWithIcon
            handleChange={handleChangePassword}
            value={loginPasswordVal}
            type="password"
            placeholder="Password"
            labelText="Enter Password"
            labelFor="Password"
            // my1="my-0"
            bg1="bg-[#FAEBEB]"
          />
        </div>
        <a href="#" onClick={handleMe} className=" ms-64 text-[#E1E0E0] hover:text-blue-300">
            Forgot password?
          </a>
        <div className=" text-red-500 ms-16">{message}</div>
        <Button 
        handleSubmit={handleSubmit}
         text="Login"
         bgColor="bg-[#FFFFFF]"
         textColor="text-[#FA0808]"
         hoverColor = "hover:bg-blue-200"
          />
      </form>
    </div>
  );
}
