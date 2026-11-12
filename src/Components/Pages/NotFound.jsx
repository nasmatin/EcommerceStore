import { Link } from "react-router";
import Logo from "./Logo";

function NotFound() {
  return (
    <div
      dir="rtl"
      className="
        relative flex min-h-screen w-full
        flex-col items-center justify-center
        overflow-hidden px-4 py-10
        bg-linear-to-br from-purple-950
        via-purple-800 to-fuchsia-900
        font-myfont
        animate-in fade-in duration-500
      "
    >
      {/* تزئینات پس‌زمینه */}
      <div className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 size-125 rounded-full bg-purple-400/20 blur-3xl" />

      {/* کارت خطای 404 */}
      <div
        className="
          relative z-10 flex w-full max-w-lg
          flex-col items-center rounded-3xl
          border border-white/20
          bg-white/10 px-6 py-12
          text-center shadow-2xl shadow-purple-950/30
          backdrop-blur-xl sm:px-12
        "
      >
        <div
          className="
          mb-5 flex size-24 items-center justify-center
          rounded-3xl border border-white/20
          bg-white/10 text-white
          shadow-lg transition-transform duration-300
          hover:scale-110
        "
        >
          <i className="fa-solid fa-triangle-exclamation text-4xl" />
        </div>

        <h1
          className="
          text-7xl font-black tracking-widest
          text-white drop-shadow-lg sm:text-8xl
        "
        >
          404
        </h1>

        <div className="my-6 h-1 w-20 rounded-full bg-fuchsia-300" />

        <h2 className="text-xl font-extrabold text-white sm:text-2xl">
          صفحه مورد نظر پیدا نشد!
        </h2>

        <p className="mt-4 max-w-sm text-sm leading-8 text-purple-100">
          متأسفانه صفحه‌ای که دنبالش هستی وجود نداره یا ممکنه آدرسش تغییر کرده
          باشه.
        </p>

        <Link
          to="/"
          className="
            mt-8 inline-flex items-center justify-center
            gap-3 rounded-xl
            bg-white px-6 py-3.5
            text-sm font-extrabold text-purple-900
            shadow-lg shadow-purple-950/20
            transition-all duration-300
            hover:-translate-y-1
            hover:bg-fuchsia-100 hover:shadow-xl
            active:scale-95
          "
        >
          <i className="fa-solid fa-house" />
          بازگشت به صفحه اصلی
        </Link>

        <div className="mt-9 opacity-90">
          <Logo />
        </div>
      </div>
    </div>
  );
}

export default NotFound;
