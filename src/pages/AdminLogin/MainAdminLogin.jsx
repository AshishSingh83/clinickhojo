
import Header from "../../components/ui/Header";
import NewLogin from "./NewLogin";

export default function MainAdminLogin() {
  return (
    <div className="flex flex-col justify-between items-center w-screen h-screen bg-[#1800AC] ">
      <div className="bg-[#1800AC] w-[90%] max-w-[590px] h-auto md:h-[600px] flex flex-col justify-center p-5 md:p-10">
          <div className=" md:h-96 mb-5">
            <Header
              heading="Admin Login"
              paragraph="Don't have an account yet?"
              linkName="Signup"
              linkUrl="/signup"
            />
          </div>
          <NewLogin />
        </div>
     
      <div className="mb-7 text-white font-normal opacity-80 text-center">
        <p className="ms-1 text-[18px]">Shamyani Health Services Pvt Ltd</p>
        <p>An ISO 9001:2015 certified company</p>
      </div>
    </div>
  );
}
