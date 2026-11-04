import { Link } from "react-router";
import Logo from "./Logo";

function Success() {
  return (
    <div
      className="font-myfont flex justify-center flex-col min-h-screen
        w-full items-center bg-fuchsia-400 animate-in fade-in duration-500"
    >
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">
        سفارش شما با موفقیت ثبت شد
      </h1>

      <p className="text-lg font-semibold text-center mb-12 text-fuchsia-950">
        از خرید شما سپاسگزاریم 🌸
      </p>

      <Link
        to="/"
        className="flex flex-col items-center gap-4 font-myfont font-bold
          transition-transform duration-300 hover:scale-105"
      >
        <span className="text-lg text-fuchsia-800 text-center transition-colors duration-300 hover:text-white">
          بازگشت به صفحه اصلی
        </span>

        <Logo />
      </Link>
    </div>
  );
}

export default Success;