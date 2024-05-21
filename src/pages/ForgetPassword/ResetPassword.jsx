
import EnterPasswordForm from "./EnterPasswordForm";
export default function ResetPassword() {
  return (
    <div className="  flex justify-between w-screen h-screen   bg-[#0529BB] flex-col items-center    ">
      <div className="bg-[#0529BB] w-[590px] h-[600px]  ">
        <div className=" m-10  pb-12 p-5">
          <div className=" mb-5">
            <div>
              <div className="flex justify-center flex-col">
                <img
                  alt=""
                  className="h-24 w-40 self-center  rounded-none"
                  src="newcliniclogo.png"
                />
              </div>
              <h6 className="mt-2 text-center text-2xl font-medium text-white">
                Reset Password
              </h6>
            </div>
          </div>
          <div className=" mt-16">
            <EnterPasswordForm />
          </div>
        </div>
      </div>
      <div className=" mb-6 text-[#FFFFFF] font-normal opacity-80">
        <p className=" ms-4">Shamyani health services Pvt Ltd </p>
        <p>An ISO 9001:2015 certified company</p>
      </div>
    </div>
  );
}
