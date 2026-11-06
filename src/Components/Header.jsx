import Search from "../Components/Search";
import Logo from "../Components/Logo";
import Profile from "../Components/Profile";

function Header() {
  return (
    <header
      dir="rtl"
 className="
  relative z-50 w-full
  bg-white/95
  border-b border-fuchsia-100
  shadow-[0_4px_20px_rgba(112,26,117,0.06)]
"
    >
      <div
        className="
          max-w-7xl mx-auto
          px-4 sm:px-6 lg:px-8
          py-3 sm:py-4
          flex flex-wrap items-center
          gap-4
        "
      >
        {/* Logo */}
        <div
          className="
            shrink-0
            transition-transform duration-300
            hover:scale-105
          "
        >
          <Logo />
        </div>

        {/* Search */}
        <div
          className="
            order-last w-full
            md:order-0 md:min-w-0 md:flex-1
            transition-all duration-300
          "
        >
          <Search />
        </div>

        {/* Profile */}
        <div className="mr-auto md:mr-0 shrink-0">
          <Profile />
        </div>
      </div>
    </header>
  );
}

export default Header;
