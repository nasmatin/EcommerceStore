import logo from "../assets/—Pngtree—shop logo vector template design_4146475.png";

function Favorite() {
  return (
    <div
      dir="rtl"
      className="w-24 h-24 sm:w-24 sm:h-24 lg:w-28 lg:h-28 shrink-0"
    >
      <a href="/" className="block w-full h-full">
        <img
          src={logo}
          alt="logo"
          className="w-full h-full object-contain"
        />
      </a>
    </div>
  );
}

export default Favorite;