import Search from "../Components/Search";
import Logo from "../Components/Logo";
import Profile from "../Components/Profile";

function Header() {
  return (
    <header dir="rtl" className="relative z-50 w-full">
      <div
        className="
          max-w-7xl mx-auto
          px-4 sm:px-6 lg:px-8
          py-3
          flex flex-wrap items-center
          gap-4
        "
      >
        <div className="shrink-0 transition-transform duration-300 hover:scale-[1.03]">
          <Logo />
        </div>

        <div className="order-last w-full transition-all duration-300 md:order-0 md:min-w-0 md:flex-1">
          <Search />
        </div>

        <div className="mr-0 shrink-0">
          <Profile />
        </div>
      </div>
    </header>
  );
}

export default Header;
