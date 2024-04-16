import { useNavigate } from "react-router-dom"
export default function FormExtra(){
  const navigate = useNavigate()
  function handleMe(){
   navigate("../EnterPassword")
  }
    return(
        <div className="flex items-center justify-between ">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
            Remember me
          </label>
        </div>
        <div className="text-sm">
          <a href="#" onClick={handleMe} className="font-medium text-blue-500 hover:text-blue-900">
            Forgot your password?
          </a>
        </div>
      </div>

    )
}