import Header from "../../components/ui/Header";
import Login from "./Login";
import NewLogin from "./NewLogin";
export default function MainAdminLogin() {
  return (
    <div  className="bg-[#0529BB] w-[600px] " >
      <div className="m-20 pt-12 pb-12 p-5 ">
      <Header
          heading="Admin Login"
          paragraph="Don't have an account yet? "
          linkName="Signup"
          linkUrl="/signup"
        />
        <NewLogin />
      </div>
    </div>
  );
}
