import Header from "../../components/ui/Header";
import Login from "./Login";
export default function AdminLogin() {
  return (
    <div  className=" bg-[#D9D9D9]" >
      <div className="m-20 pt-12 pb-12 p-5 ">
      <Header
          heading="Login to your account"
          paragraph="Don't have an account yet? "
          linkName="Signup"
          linkUrl="/signup"
        />
        <Login />
      </div>
    </div>
  );
}
