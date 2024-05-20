import { useNavigate } from "react-router-dom";
export default function FormExtra() {
  const navigate = useNavigate();
  function handleMe() {
    navigate("../EnterPassword");
  }
  return (
    <div className="text-sm ms-64 flex flex-row ">
      <a
        href="#"
        onClick={handleMe}
        className="font-medium text-[#E1E0E0] hover:text-blue-300"
      >
        Subadmin Login
      </a>
      <a
        href="#"
        onClick={handleMe}
        className="font-medium text-[#E1E0E0] hover:text-blue-300"
      >
        Forgot password?
      </a>
    </div>
  );
}
