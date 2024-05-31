export default function Header({ heading }) {
  return (
    <div>
      <div className="flex flex-col h-auto bg-[#1800AC]">
        <img
          alt=""
          className=" h-44 w-44 self-center  rounded-none "
          src="newcliniclogo.png"
        />
        <img
          alt=""
          className=" h-[100px] w-[100px] self-center rounded-full "
          src="myLogo.jpeg"
        />
      </div>
      <h6 className=" text-center text-2xl font-medium text-white">
        {heading}
      </h6>
    </div>
  );
}
