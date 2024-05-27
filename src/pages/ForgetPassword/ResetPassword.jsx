
import EnterPasswordForm from "./EnterPasswordForm";
export default function ResetPassword() {
  return (
    <div className="  flex  w-screen md:h-screen   bg-[#0529BB] flex-col items-center gap-2 md:gap-10 mt-0 md:mt-10    ">
      <div className="bg-[#0529BB] md:w-[590px] gap-2 md:gap-10   ">
        <div className="   md:pb-12 p-5">
          <div className="">
            <div>
              <div className="flex justify-center flex-col">
                <img
                  alt=""
                  className="h-24 w-40 self-center  rounded-none"
                  src="/newcliniclogo.png"
                />
              </div>
              <h6 className="mt-2 text-center text-2xl font-medium text-white">
                Reset Password
              </h6>
            </div>
          </div>
          <div className=" mt-5 md:mt-11 ">
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
