import Header from "../../components/ui/Header";
import Login from "./Login";
export default function SubAdminLogin() {
  return (
    <div className="  flex justify-between w-screen h-screen   bg-[#0529BB] flex-col items-center    ">
    <div  className="bg-[#0529BB] w-[590px] h-[600px]  " >
      <div className=" m-10  pb-12 p-5">
      <div className=" mb-5">
      <Header
          heading="Subadmin Login"
          paragraph="Don't have an account yet?"
          linkName="Signup"
          linkUrl="/signup"
        />
      </div>
      
        <Login />
      </div>
    </div>
    <div className=" mb-6 text-[#FFFFFF] font-normal opacity-80">
      <p className=" ms-4">Shamyani health services Pvt Ltd </p>
      <p>An ISO 9001:2015 certified company</p>
    </div>
    </div>



  );
}
