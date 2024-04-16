export default function Header({
  heading,
}) {
  return (
    <div>
      <div className="flex justify-center">
        <img alt="" className="h-14 w-14" src="clinic_khojo.jpg" />
      </div>
      <p
        className="mt-6 text-center"
      >
        {heading}
      </p>
    </div>
  );
}
