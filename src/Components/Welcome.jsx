
import { Link } from "react-router";
import Logo from "./Logo";

function Welcome() {
  return (
    <div
      dir="rtl"
      className="relative flex min-h-screen w-full items-center justify-center
      overflow-hidden bg-gradient-to-br from-fuchsia-300 via-purple-200 to-pink-200
      px-5 font-myfont"
    >
      {/* Background effects */}
      <div className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-fuchsia-400/30 blur-3xl" />
      <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-purple-400/30 blur-3xl" />

      {/* Welcome card */}
      <div
        className="relative z-10 flex w-full max-w-xl flex-col items-center
        rounded-3xl border border-white/60 bg-white/50 px-6 py-12
        text-center shadow-2xl shadow-fuchsia-900/10 backdrop-blur-xl
        animate-in fade-in zoom-in-95 duration-700 sm:px-12"
      >
        <div className="mb-7 flex h-20 w-20 items-center justify-center
          rounded-full bg-fuchsia-100 text-4xl shadow-inner">
          ✨
        </div>

        <Logo />

        <h1 className="mt-8 text-3xl font-extrabold text-fuchsia-950 sm:text-4xl">
          خوش اومدی! 💜
        </h1>

        <p className="mt-5 max-w-sm text-base leading-9 text-purple-900 sm:text-lg">
          خوشحالیم که اینجایی!
          <br />
          امیدواریم از گشت‌وگذار و خریدت لذت ببری.
        </p>

        <div className="my-8 h-px w-2/3 bg-gradient-to-r
          from-transparent via-fuchsia-300 to-transparent" />

        <Link
          to="/"
          className="rounded-2xl bg-gradient-to-l from-fuchsia-700 to-purple-700
          px-10 py-4 text-lg font-bold text-white shadow-lg shadow-fuchsia-500/30
          transition-all duration-300 hover:-translate-y-1 hover:scale-105
          hover:shadow-xl hover:shadow-fuchsia-500/40"
        >
          شروع خرید
          <span className="mr-2">←</span>
        </Link>

        <p className="mt-7 text-sm text-purple-800/70">
          یک تجربه شیرین، فقط چند قدم با تو فاصله داره 🌸
        </p>
      </div>
    </div>
  );
}

export default Welcome;
