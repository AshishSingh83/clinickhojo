export default function Header({ heading }) {
  return (
    <div>
      <div className="flex justify-center">
        <img alt="" className="h-24 w-24 rounded-full" src="clinic_khojo.jpg" />
      </div>
      <h6 className="mt-6 text-center text-3xl font-semibold text-gray-900">
        {heading}
      </h6>
    </div>
  );
}
