// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import Button from "../../components/ui/Button";
// import { FiKey } from "react-icons/fi";
// import InputWithPassword from "../../components/ui/InputWithPassword";
// import Spinner from "../../components/ui/clipPath/Spinner";
// import instance from "../../axios";

// export default function EnterPasswordForm() {
//   const { token } = useParams();
//   const navigate = useNavigate();

//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [spinner, setSpinner] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       return alert("Passwords do not match");
//     }
//     if (password === confirmPassword) {
//       setDisabled(true);
//       const dataa = {
//         password,
//         resetToken: token,
//       };
//       try {
//         await instance.put("api/admin/reset-password", dataa);
//         setDisabled(false);
//         navigate("/AdminHome");
//       } catch (error) {
//         setMessage("Session Experied Try again");
//         console.error("Error resetting password", error.message);
//       }
//       setDisabled(false);
//     }
//   };
//   const [message, setMessage] = useState("");
//   const [disabled, setDisabled] = useState(false);

//   const handleChangeEmail = (e) => {
//     setMessage("");
//     setPassword(e.target.value);
//   };
//   const handleChangePassword = (e) => {
//     setMessage("");
//     setConfirmPassword(e.target.value);
//   };

//   async function handleMe(e) {
//     e.preventDefault();
//     setSpinner(true);
//     const email = "ashishsingh822003@gmail.com";
//     try {
//       const dataa = await instance.post("/api/admin/forgot-password", {
//         email: "ashishsingh822003@gmail.com",
//       });
//       setSpinner(false);
//       alert("Password reset email sent");
//     } catch (error) {
//       console.error("Error requesting password reset", error.message);
//     }
//     setSpinner(false);
//   }
//   function handleMeA() {
//     navigate("../");
//   }
//   return (
//     <div>
//       <form className="overflow-hidden" onSubmit={handleSubmit}>
//         <div>
//           <div className="text-md flex flex-row justify-end mb-4 gap-2 me-4">
//             <p>Did not receive?</p>
//             {spinner ? (
//               <Spinner
//                 height="h-[30px]"
//                 width="w-[30px]"
//                 fontSize="text-[.44rem]"
//               />
//             ):(
//               <p
//                 onClick={handleMe}
//                 className="font-medium text-[#E1E0E0] hover:text-blue-300 cursor-pointer"
//               >
//                 Send Again
//               </p>
//             )}

//             <p className="text-cyan-500">or</p>
//             <p
//               onClick={handleMeA}
//               className="font-medium text-[#E1E0E0] hover:text-blue-300 cursor-pointer"
//             >
//               Back to Login
//             </p>
//           </div>
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

//         <div className="text-red-500 ms-16 mt-8">
//           <p className="mb-4">{message}</p>
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
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import { FiKey } from "react-icons/fi";
import InputWithPassword from "../../components/ui/InputWithPassword";
import Spinner from "../../components/ui/clipPath/Spinner";
import instance from "../../axios";

export default function EnterPasswordForm() {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [spinner, setSpinner] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return alert("Passwords do not match");
    }
    if (password === confirmPassword) {
      setDisabled(true);
      const dataa = {
        password,
        resetToken: token,
      };
      try {
        await instance.put("api/admin/reset-password", dataa);
        setDisabled(false);
        navigate("/AdminHome");
      } catch (error) {
        setMessage("Session Expired Try again");
        console.error("Error resetting password", error.message);
      }
      setDisabled(false);
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

  function handleMeA() {
    navigate("../");
  }

  return (
    <div className="flex items-center  justify-center ">
      <form
        className=" md:p-8 rounded-lg shadow-lg w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-6 text-center">
          <div className="text-md flex flex-row justify-end mb-4 gap-2 me-4">
            <p className="text-gray-600">Did not receive?</p>
            {spinner ? (
              <Spinner
                height="h-[30px]"
                width="w-[30px]"
                fontSize="text-[.44rem]"
              />
            ) : (
              <p
                onClick={handleMe}
                className="font-medium text-blue-500 hover:text-blue-300 cursor-pointer"
              >
                Send Again
              </p>
            )}
            <p className="text-gray-500">or</p>
            <p
              onClick={handleMeA}
              className="font-medium text-blue-500 hover:text-blue-300 cursor-pointer"
            >
              Back to Login
            </p>
          </div>
        </div>
        <InputWithPassword
          handleChange={handleChangeEmail}
          value={password}
          type="password"
          placeholder="New Password"
          labelText="New Password"
          labelFor="Password"
          bg1="bg-gray-200"
          iconData={FiKey}
        />
        <InputWithPassword
          handleChange={handleChangePassword}
          value={confirmPassword}
          type="password"
          placeholder="Confirm Password"
          labelText="Confirm Password"
          labelFor="Password"
          bg1="bg-gray-200"
          iconData={FiKey}
        />
        <div className="text-red-500 text-center mt-4">
          <p>{message}</p>
        </div>
        <div className="mt-6">
          <Button
            handleSubmit={handleSubmit}
            text="Reset Password"
            bgColor="bg-[#FFFFFF]"
            textColor="text-[#FA0808]"
            hoverColor="hover:bg-blue-200"
            disabled={disabled}
          />
        </div>
      </form>
    </div>
  );
}
