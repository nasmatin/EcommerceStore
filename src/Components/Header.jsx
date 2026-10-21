import Search from "../Components/Search";
import Logo from "../Components/Logo";
import Profile from "../Components/Profile";

function Header() {
  return (
    <header dir="rtl" className="w-full">
      <div
        className="
          max-w-7xl mx-auto
          px-4 sm:px-6 lg:px-8
          py-3
          flex flex-wrap items-center
          gap-4 ">
        <div className="shrink-0">
          <Logo />
        </div>
        <div className="w-full order-last md:order-0 md:flex-1 md:min-w-0">
          <Search />
        </div>
        <div className="shrink-0 mr-0">
          <Profile />
        </div>
      </div>
    </header>
  );
}

export default Header;
