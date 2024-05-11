

import { useEffect, useState } from "react";
import FormExtra from "./FormExtra";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import InputWithIcon from "../../components/ui/InputWithIcon";

export default function Login() {
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
        const newTime = currentTime + (100 * 1000);
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
      // console.log('save upar',savedData);
      // setData(savedData);
      // setExpiryTime(savedData.expiry);
      if(new Date().getTime() < savedData.expiry) {
              console.log('yahan bhi kyun',savedData.expiry-new Date().getTime());
              setLoginEmailVal(savedData.dataa.userName );
              setLoginPasswordVal(savedData.dataa.password);
              setLabel(savedData.dataa.label);
              //authenticateUser()
              handleAutoLogin(savedData.dataa.userName,savedData.dataa.password)
      }else{
        console.log('data experied');
        deleteDataFromLocalStorage('myData');
        setLoginEmailVal('');
        setLoginPasswordVal('');
      }
      
    }
  }, []);
  // useEffect(() => {
  //   console.log('hi',new Date().getTime(),data);
  //     if (new Date().getTime() > expiryTime) {
  //       console.log('upar nhi beta');
  //       deleteDataFromLocalStorage('myData');
  //       setData({
  //         userName: '',
  //         password: '',
  //         label:'',
  //       });
  //       setExpiryTime(0);
  //     }
  //     else if(new Date().getTime() < expiryTime) {
  //       console.log('yahan bhi kyun');
  //       setLoginEmailVal(data.dataa.userName );
  //       setLoginPasswordVal(data.dataa.password);
  //       setLabel(data.dataa.label);
  //       authenticateUser()
  //     }
  //     else{
  //       console.log('nothing else');
  //     }
  
  // }, []);
  
  const authenticateUser = async()=>{
    console.log('called',loginEmailVal,loginPasswordVal);
      try{
        const response = await axios.post("api/admin/login/subAdmin", {
          userName: loginEmailVal,
          password: loginPasswordVal,
        });
        console.log('2');
        if (response.data.user){
          const dataa = {
            userName: loginEmailVal,
            password: loginPasswordVal,
            label: "Username",
          };
          const currentTime = new Date().getTime();
          const newTime = currentTime + (100 * 1000);
          saveDataToLocalStorage('myData', { dataa, expiry: newTime });
          setMessage("");
          navigate("../AdminHome");
        }
      } catch (error) {
        console.log('hereee');
        console.error("Error fetching data:", error.response.status);
        if (error.response.status == 404) {
          setMessage("User Not Found .....");
        } else {
          setMessage("Internal Server Error");
        }
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
   function handleMea(){
    navigate("../")
   }
  return (
    <div >
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        
        <div className="-space-y-px">
          <InputWithIcon
            handleChange={handleChangeEmail}
            value={loginEmailVal}
            type="UserName"
            placeholder="UserName"
            labelText={emailLabel}
            labelFor="Email"
            my1="my-3"
            bg1="bg-[#FAEBEB]"
            iconData="FaUser"
          />

          <InputWithIcon
            handleChange={handleChangePassword}
            value={loginPasswordVal}
            type="password"
            placeholder="Password"
            labelText="Enter Password"
            labelFor="Password"
            bg1="bg-[#FAEBEB]"
            iconData="FiKey"
          />
        </div>
        <div className="text-sm  flex flex-row justify-between  ">
          <a href="#" onClick={handleMea} className="font-medium text-[#E1E0E0] hover:text-blue-300">
            Admin Login
          </a>
          <a href="#" onClick={handleMe} className="font-medium text-[#E1E0E0] hover:text-blue-300">
            Forgot password?
          </a>
        </div>
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
