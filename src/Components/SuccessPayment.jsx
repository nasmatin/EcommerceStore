import { Link } from "react-router";
import Logo from "./Logo";

function Success() {
  return (
    <div
      dir="rtl"
      className="
        relative flex min-h-screen w-full
        items-center justify-center overflow-hidden
        bg-linear-to-br from-purple-950
        via-purple-800 to-fuchsia-900
        px-4 py-10 font-myfont
      "
    >
      {/* تزئینات پس‌زمینه */}
      <div className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-purple-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 size-96 rounded-full bg-fuchsia-200/30 blur-3xl" />

      <div
        className="
          relative z-10 w-full max-w-lg
          overflow-hidden rounded-3xl
          border border-purple-100
          bg-white shadow-2xl shadow-purple-200/30
        "
      >
        {/* سربرگ */}
        <div
          className="
            relative overflow-hidden
            bg-linear-to-br from-purple-950
            via-purple-900 to-fuchsia-800
            px-6 py-10 text-center text-white
          "
        >
          <div className="absolute -left-10 -top-10 size-36 rounded-full border border-white/10" />
          <div className="absolute -bottom-16 -right-8 size-44 rounded-full border border-white/10" />

          <div
            className="
              relative mx-auto mb-5 flex size-24
              items-center justify-center rounded-full
              border border-white/20 bg-white/10
              text-5xl text-white shadow-lg
              backdrop-blur-sm
            "
          >
            <i className="fa-solid fa-check" />
          </div>

          <h1 className="relative text-2xl font-extrabold sm:text-3xl">
            سفارش شما با موفقیت ثبت شد
          </h1>

          <p className="relative mt-4 text-sm leading-7 text-purple-100">
            خرید شما با موفقیت انجام شد
          </p>
        </div>

        {/* محتوای کارت */}
        <div className="flex flex-col items-center px-6 py-9 text-center sm:px-9">
          <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-fuchsia-50 text-2xl text-fuchsia-700">
            <i className="fa-solid fa-heart" />
          </div>

          <p className="text-base font-bold text-purple-950">
            از خرید شما سپاسگزاریم 🌸
          </p>

          <p className="mt-3 text-sm leading-7 text-gray-500">
            امیدواریم از خریدت لذت ببری و دوباره ببینیمت.
          </p>

          <Link
            to="/"
            className="
              mt-8 inline-flex min-h-12 w-full
              items-center justify-center gap-3
              rounded-xl bg-linear-to-l
              from-purple-900 to-fuchsia-800
              px-6 py-3
              text-sm font-bold text-white
              shadow-md shadow-purple-200/60
              transition-all duration-300
              hover:-translate-y-1
              hover:from-purple-800 hover:to-fuchsia-700
              hover:shadow-lg hover:shadow-fuchsia-200/60
              active:scale-95
              sm:w-auto sm:min-w-56
            "
          >
            <i className="fa-solid fa-house" />
            بازگشت به صفحه اصلی
          </Link>

          <div className="mt-7">
            <Logo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
