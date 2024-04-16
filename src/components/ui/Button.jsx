export default function Button({
  handleSubmit,
  text,
  minw,
  bgColor = "bg-blue-800",
  hoverColor = "hover:bg-blue-700",
  textColor="text-white"
}) {
  return (
    <>
      <button
        type="submit"
        className={`group relative w-full flex justify-center py-2 px-4 border border-transparent
         text-lg font-medium rounded-md ${textColor} ${bgColor} ${hoverColor}
                    focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-blue-100  ${minw} font-serif`}
        onClick={handleSubmit}
      >
        {text}
      </button>
    </>
  );
}
