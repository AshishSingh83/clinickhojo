import Header from "../../components/ui/Header";
import Login from "./Login";
export default function SubAdminLogin() {
  return (
    <div className=" w-screen h-screen flex justify-center items-center bg-[#0529BB]">
    <div  className="bg-[#0529BB] w-[600px] " >
      <div className="m-20 pt-12 pb-12 p-5 ">
      <Header
          heading="Subadmin Login"
          paragraph="Don't have an account yet? "
          linkName="Signup"
          linkUrl="/signup"
        />
        <Login />
      </div>
    </div>
    </div>



  );
}
