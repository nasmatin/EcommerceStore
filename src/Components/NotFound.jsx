import { Link } from "react-router";
import Logo from "./Logo";

function NotFound() {
  return (
    <div
      className="font-myfont flex justify-center flex-col min-h-screen
        w-full items-center bg-fuchsia-400 animate-in fade-in duration-500"
    >
      <h1 className="text-4xl font-bold text-center mb-14 transition-transform duration-300 hover:scale-110">
        404
      </h1>

      <h2 className="text-xl font-bold text-center mb-10 transition-colors duration-300 hover:text-fuchsia-800">
        صفحه مورد نظر پیدا نشد
      </h2>

      <Link
        to="/"
        className="bg-fuchsia-400 font-myfont font-bold transition-transform duration-300 hover:scale-105"
      >
        <h2 className="text-l text-fuchsia-800 font-bold text-center transition-colors duration-300 hover:text-white">
          بازگشت به صفحه اصلی
        </h2>

        <Logo />
      </Link>
    </div>
  );
}

export default NotFound;
