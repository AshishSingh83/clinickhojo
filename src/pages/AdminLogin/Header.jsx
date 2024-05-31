export default function Header({ heading }) {
  return (
    <div>
      <div className="flex justify-center rounded-none">
        <img alt="" className=" " src="/clinic_khojo.jpg" />
      </div>
      <p className="mt-6 text-center">{heading}</p>
    </div>
  );
}
