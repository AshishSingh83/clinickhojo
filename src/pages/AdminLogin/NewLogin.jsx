import { useEffect, useState } from "react";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";
import InputWithIcon from "../../components/ui/InputWithIcon";
import InputWithPassword from "../../components/ui/InputWithPassword";
import { FiKey } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import Spinner from "../../components/ui/clipPath/Spinner";
import instance from "../../axios";

export default function NewLogin() {
  const [loginEmailVal, setLoginEmailVal] = useState("");
  const [loginPasswordVal, setLoginPasswordVal] = useState("");
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [spinner, setSpinner] = useState(false);

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
    const savedData = getDataFromLocalStorage("AdminToken");
    if (savedData) {
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
          console.log(response);
          setDisabled(false);
          if (response.data.authData.userData.user_role == "admin") {
            navigate("../AdminHome");
          }
        } catch (error) {
          setDisabled(false);
          deleteDataFromLocalStorage('AdminToken')
          console.log("Error:", error.message);
        }
      };
      verifyToken();
      console.log(savedData);
    }
  }, []);

  const authenticateUser = async () => {
    setDisabled(true);
    try {
      const response = await instance.post("api/admin/login/subAdmin", {
        userName: loginEmailVal,
        password: loginPasswordVal,
      });
      if (response.data.role == "admin") {
        const accessToken = response.data.token;
        saveDataToLocalStorage("AdminToken", accessToken);
        saveDataToLocalStorage("UserId",loginEmailVal);
        setMessage("");
        setDisabled(false);
        navigate("../AdminHome");
      } else {
        setMessage("This userId related to subAdmin");
      }
      setDisabled(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      if (error.response.status == 404) {
        setMessage("User Not Found .....");
      } else {
        setMessage("Wrong UserId or Password");
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
  async function handleMe(e) {
    e.preventDefault();
    setSpinner(true);
    const email = "ashishsingh822003@gmail.com";
    try {
      const dataa = await instance.post("/api/admin/forgot-password", {
        email: "ashishsingh822003@gmail.com",
      });
      setSpinner(false);
      alert("Password reset email sent");
    } catch (error) {
      console.error("Error requesting password reset", error.message);
    }
    setSpinner(false);
  }
  function handleMea() {
    navigate("../SubAdminLogin");
  }
  return (
    <div>
      <form className=" overflow-hidden " onSubmit={handleSubmit}>
        <div>
          <InputWithIcon
            handleChange={handleChangeEmail}
            value={loginEmailVal}
            type="username"
            placeholder="UserName"
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
        <div className="text-sm  flex justify-between ms-2 ">
          <p
            onClick={handleMea}
            className="font-medium text-[#E1E0E0] hover:text-blue-300 cursor-pointer"
          >
            Go to Subadmin Login
          </p>
          {spinner ? (
            <Spinner
              height="h-[30px]"
              width="w-[30px]"
              fontSize="text-[.44rem]"
            />
          ) : (
            <p
              onClick={handleMe}
              className="font-medium text-[#E1E0E0] hover:text-blue-300 cursor-pointer"
            >
              Forgot password?
            </p>
          )}
        </div>
        <div className=" text-red-500 ms-16 mt-8">
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

