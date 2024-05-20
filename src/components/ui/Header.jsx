export default function Header({ heading }) {
  return (
    <div>
      <div className="flex justify-center flex-col">
        <img
          alt=""
          className="h-24 w-40 self-center  rounded-none"
          src="newcliniclogo.png"
        />
        <img
          alt=""
          className=" h-[100px] w-[100px] self-center rounded-full mt-9"
          src="myLogo.jpeg"
        />
      </div>
      <h6 className="mt-2 text-center text-2xl font-medium text-white">
        {heading}
      </h6>
    </div>
  );
}
