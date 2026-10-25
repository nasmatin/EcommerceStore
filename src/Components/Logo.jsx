import logo from "../assets/—Pngtree—shop logo vector template design_4146475.png";

function Logo() {
  return (
    <div
      dir="rtl"
      className="w-28 h-28 sm:w-24 sm:h-24 lg:w-28 lg:h-28 shrink-0"
    >
      <a href="/store" className="block w-full h-full">
        <img src={logo} alt="logo" className="w-full h-full object-contain" />
      </a>
    </div>
  );
}

export default Logo;
