import { Link } from "react-router";
import Logo from "./Logo";

function Welcome() {
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

      {/* کارت خوش‌آمدگویی */}
      <div
        className="
          relative z-10 w-full max-w-xl
          overflow-hidden rounded-3xl
          border border-purple-100
          bg-white shadow-2xl shadow-purple-200/30
          animate-in fade-in zoom-in-95 duration-700
        "
      >
        {/* سربرگ */}
        <div
          className="
            relative overflow-hidden
            bg-linear-to-br from-purple-950
            via-purple-900 to-fuchsia-800
            px-6 py-10 text-center text-white
            sm:py-12
          "
        >
          <div className="absolute -left-10 -top-10 size-36 rounded-full border border-white/10" />
          <div className="absolute -bottom-16 -right-8 size-44 rounded-full border border-white/10" />

          <div
            className="
              relative mx-auto mb-5 flex size-20
              items-center justify-center rounded-3xl
              border border-white/20 bg-white/10
              text-4xl shadow-lg backdrop-blur-sm
            "
          >
            ✨
          </div>

          <h1 className="relative text-3xl font-extrabold sm:text-4xl">
            خوش اومدی! 💜
          </h1>

          <p className="relative mt-4 text-sm leading-8 text-purple-100 sm:text-base">
            خوشحالیم که اینجایی!
            <br />
            امیدواریم از گشت‌وگذار و خریدت لذت ببری.
          </p>
        </div>

        {/* محتوای کارت */}
        <div className="flex flex-col items-center px-6 py-9 text-center sm:px-10">
          <div className="mb-7">
            <Logo />
          </div>

          <div className="mb-7 h-px w-2/3 bg-linear-to-l from-transparent via-fuchsia-300 to-transparent" />

          <Link
            to="/"
            className="
              inline-flex min-h-14 w-full items-center
              justify-center gap-3 rounded-xl
              bg-linear-to-l from-purple-900 to-fuchsia-800
              px-8 py-4 text-base font-bold text-white
              shadow-md shadow-purple-200/60
              transition-all duration-300
              hover:-translate-y-1
              hover:from-purple-800 hover:to-fuchsia-700
              hover:shadow-lg hover:shadow-fuchsia-200/70
              active:scale-95
              sm:w-auto sm:min-w-56
            "
          >
            شروع خرید
            <i className="fa-solid fa-arrow-left text-sm" />
          </Link>

          <p className="mt-7 text-xs leading-7 text-gray-400 sm:text-sm">
            یک تجربه شیرین، فقط چند قدم با تو فاصله داره 🌸
          </p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
