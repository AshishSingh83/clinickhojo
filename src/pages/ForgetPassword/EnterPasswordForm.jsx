// import React, { useEffect, useState } from "react";
// import { useParams, useHistory } from 'react-router-dom';
// import axios from 'axios';
// import Button from "../../components/ui/Button";
// import { useNavigate } from "react-router-dom";
// import { FiKey } from "react-icons/fi";
// import InputWithPassword from "../../components/ui/InputWithPassword";
// export default function EnterPasswordForm(){
//     const { token } = useParams();
//     const history = useHistory();

//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   useEffect(() => {
//     const validateToken = async () => {
//         try {
//             await axios.get(`/api/reset-password/${token}`);
//         } catch (error) {
//             console.error('Invalid or expired token');
//             history.push('/invalid-token');
//         }
//     };

//     validateToken();
// }, [token, history]);

// const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//         return alert('Passwords do not match');
//     }

//     try {
//         await axios.post(`/api/reset-password/${token}`, { password });
//         alert('Password has been reset');
//         history.push('/login');
//     } catch (error) {
//         console.error('Error resetting password', error);
//     }
// };
//   const [message, setMessage] = useState("");
//   const [disabled, setDisabled] = useState(false);

//   const navigate = useNavigate();
//   const saveDataToLocalStorage = (key, value) => {
//     localStorage.setItem(key, JSON.stringify(value));
//   };
//   const getDataFromLocalStorage = (key) => {
//     const item = localStorage.getItem(key);
//     return item ? JSON.parse(item) : null;
//   };
//   const deleteDataFromLocalStorage = (key) => {
//     localStorage.removeItem(key);
//   };

//   const handleChangeEmail = (e) => {
//     setMessage("");
//     setPassword(e.target.value);
//   };
//   const handleChangePassword = (e) => {
//     setMessage("");
//     setConfirmPassword(e.target.value);
//   };

//   function handleMe() {
//     navigate("../EnterPassword");
//   }
//   function handleMeA() {
//     navigate("../");
//   }
//   return (
//     <div>
//       <form  className=" overflow-hidden">
//         <div>
//         <div className="text-md  flex flex-row justify-end mb-4 gap-2 me-4  ">
//         <p>Did not received ?</p>
//           <a
//             href="/"
//             onClick={handleMe}
//             className="font-medium text-[#E1E0E0] hover:text-blue-300"
//           >
//             Send Again
//           </a>
//           <p className=" text-cyan-500">or</p>
//           <a
//             // href="/"
//             onClick={handleMeA}
//             className="font-medium text-[#E1E0E0] hover:text-blue-300"
//           >
//             Back to Login
//           </a>
//         </div>
//           <InputWithPassword
//             handleChange={handleChangeEmail}
//             value={password}
//             type="password"
//             placeholder="New Password"
//             labelText="New Password"
//             labelFor="Password"
//             bg1="bg-[#FAEBEB]"
//             iconData={FiKey}
//           />

//           <InputWithPassword
//             handleChange={handleChangePassword}
//             value={confirmPassword}
//             type="password"
//             placeholder="Confirm Password"
//             labelText="Confirm Password"
//             labelFor="Password"
//             bg1="bg-[#FAEBEB]"
//             iconData={FiKey}
//           />
//         </div>

//         <div className=" text-red-500 ms-16 mt-8 ">
//         <p className=" mb-4">{message}</p>
//         </div>
//         <></>
//         <Button
//           handleSubmit={handleSubmit}
//           text="Login"
//           bgColor="bg-[#FFFFFF]"
//           textColor="text-[#FA0808]"
//           hoverColor="hover:bg-blue-200"
//           disabled={disabled}
//         />
//       </form>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../../components/ui/Button";
import { FiKey } from "react-icons/fi";
import InputWithPassword from "../../components/ui/InputWithPassword";
import Spinner from "../../components/ui/clipPath/Spinner";

export default function EnterPasswordForm() {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [spinner, setSpinner] = useState(false);

  // useEffect(() => {
  //     const validateToken = async () => {
  //         try {
  //             await axios.get(`/api/admin/reset-password/${token}`);
  //         } catch (error) {
  //             console.error('Invalid or expired token');
  //             navigate('/');
  //         }
  //     };
  //     validateToken();
  // }, [token, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return alert("Passwords do not match");
    }
    if (password === confirmPassword) {
      setDisabled(true) ;
      const dataa = {
        password,
        resetToken: token,
      };
      try {
        await axios.put("api/admin/reset-password", dataa);
        setDisabled(false) ;
        navigate("/AdminHome");
        // alert('Password has been reset');
      } catch (error) {
        setMessage("Session Experied Try again");
        console.error("Error resetting password", error.message);
      }
      setDisabled(false) ;
    }
  };

  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(false);

  const handleChangeEmail = (e) => {
    setMessage("");
    setPassword(e.target.value);
  };
  const handleChangePassword = (e) => {
    setMessage("");
    setConfirmPassword(e.target.value);
  };

  async function handleMe(e) {
    e.preventDefault();
    setSpinner(true);
    const email = "ashishsingh822003@gmail.com";
    try{
      const dataa = await axios.post("/api/admin/forgot-password", {
        email: "ashishsingh822003@gmail.com",
      });
      setSpinner(false);
      alert("Password reset email sent");
    } catch (error) {
      console.error("Error requesting password reset", error.message);
    }
    setSpinner(false);
  }
  function handleMeA() {
    navigate("../");
  }

  return (
    <div>
      <form className="overflow-hidden" onSubmit={handleSubmit}>
        <div>
          <div className="text-md flex flex-row justify-end mb-4 gap-2 me-4">
            <p>Did not receive?</p>
            {spinner ? (
              <Spinner height="h-[30px]" width="w-[30px]" fontSize="text-[.44rem]" />
            ) : (
              <p
                onClick={handleMe}
                className="font-medium text-[#E1E0E0] hover:text-blue-300 cursor-pointer"
              >
                Send Again
              </p>
            )}

            <p className="text-cyan-500">or</p>
            <p
              onClick={handleMeA}
              className="font-medium text-[#E1E0E0] hover:text-blue-300 cursor-pointer"
            >
              Back to Login
            </p>
          </div>
          <InputWithPassword
            handleChange={handleChangeEmail}
            value={password}
            type="password"
            placeholder="New Password"
            labelText="New Password"
            labelFor="Password"
            bg1="bg-[#FAEBEB]"
            iconData={FiKey}
          />

          <InputWithPassword
            handleChange={handleChangePassword}
            value={confirmPassword}
            type="password"
            placeholder="Confirm Password"
            labelText="Confirm Password"
            labelFor="Password"
            bg1="bg-[#FAEBEB]"
            iconData={FiKey}
          />
        </div>

        <div className="text-red-500 ms-16 mt-8">
          <p className="mb-4">{message}</p>
        </div>
        <></>
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
