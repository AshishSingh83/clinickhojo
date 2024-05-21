import { useEffect, useState } from "react";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";
import instance from "../../axios";
import InputWithIcon from "../../components/ui/InputWithIcon";
import InputWithPassword from "../../components/ui/InputWithPassword";
import { FaUser } from "react-icons/fa";
import { FiKey } from "react-icons/fi";
export default function Login() {
  const [loginEmailVal, setLoginEmailVal] = useState("");
  const [loginPasswordVal, setLoginPasswordVal] = useState("");
  const [emailLabel, setEmailLabel] = useState("Email Address");
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(false);
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

  useEffect(() => {
    const savedData = getDataFromLocalStorage("SubAdminToken");
    console.log("helo", savedData);
    if (savedData) {
      console.log(savedData);
      setDisabled(true);
      const verifyToken = async () => {
        try {
          const response = await instance.post(
            "api/admin/profile/subAdmin",
            {},
            {
              headers: {
                Authorization: `Bearer ${savedData}`,
              },
            }
          );
          setDisabled(false);
          if (response.data.authData.userData.user_role == "subAdmin") {
            navigate("../AdminHome");
          }
        } catch (error) {
          setDisabled(false);
          console.log("Error:", error.message);
        }
      };
      verifyToken();
    }
  }, []);
  const authenticateUser = async () => {
    setDisabled(true);
    try {
      const response = await instance.post("api/admin/login/subAdmin", {
        userName: loginEmailVal,
        password: loginPasswordVal,
      });
      console.log("congrats", response);
      if (response.data.role == "subAdmin") {
        const accessToken = response.data.token;
        saveDataToLocalStorage("SubAdminToken", accessToken);
        setDisabled(false);
        navigate("../AdminHome");
      } else {
        setMessage("This userId related to Admin");
      }
      setDisabled(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      if (error.response.status == 404) {
        setMessage("User Not Found .....");
      } else {
        setMessage("Internal Server Error");
      }
      setDisabled(false);
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
  function handleMe() {
    navigate("../EnterPassword");
  }
  function handleMe() {
    navigate("../");
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className=" overflow-hidden">
        <div>
          <InputWithIcon
            handleChange={handleChangeEmail}
            value={loginEmailVal}
            type="UserName"
            placeholder="UserName"
            labelText={emailLabel}
            labelFor="Email"
            my1="my-0"
            bg1="bg-[#FAEBEB]"
            iconData={FaUser}
          />

          <InputWithPassword
            handleChange={handleChangePassword}
            value={loginPasswordVal}
            type="password"
            placeholder="Password"
            labelText="Enter Password"
            labelFor="Password"
            bg1="bg-[#FAEBEB]"
            iconData={FiKey}
          />
        </div>
        <div className="text-sm  flex flex-row justify-between ms-2 ">
          <p
            onClick={handleMe}
            className="font-medium text-[#E1E0E0] hover:text-blue-300 cursor-pointer"
          >
            Go to Admin Login
          </p>
        </div>
        <div className=" text-red-500 ms-16 mt-8 ">
          <p className=" mb-4">{message}</p>
        </div>
        <Button
          handleSubmit={handleSubmit}
          text="Login"
          bgColor="bg-[#FFFFFF]"
          textColor="text-[#FA0808]"
          hoverColor="hover:bg-blue-200"
          disabled={disabled}
        />
      </form>
    </div>
  );
}
