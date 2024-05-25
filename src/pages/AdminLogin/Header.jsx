export default function Header({ heading }) {
  return (
    <div>
      <div className="flex justify-center rounded-none">
        <img alt="" className="h-14 w-14" src="/newcliniclogo.png" />
      </div>
      <p className="mt-6 text-center">{heading}</p>
    </div>
  );
}
