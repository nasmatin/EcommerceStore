import Search from "./Search";
import Logo from "./Logo";
import Profile from "./Profile";

function Header() {
  return (
    <header dir="rtl" className="w-full">
      <div
        className="
          max-w-7xl mx-auto
          px-4 sm:px-6 lg:px-8
          py-3
          flex flex-wrap items-center
          gap-4
        "
      >
        {/* لوگو - سمت راست */}
        <div className="shrink-0">
          <Logo />
        </div>

        {/* جستجو - وسط */}
        <div className="w-full order-last md:order-none md:flex-1 md:min-w-0">
          <Search />
        </div>

        {/* پروفایل - سمت چپ */}
        <div className="shrink-0 mr-auto">
          <Profile />
        </div>
      </div>
    </header>
  );
}

export default Header;