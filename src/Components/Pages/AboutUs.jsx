import Header from "../Components/Header";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";

const AboutUs = () => {
  //view aboutus component

  return (
    <>
      <Header />
      <Menu />

      <section
        dir="rtl"
        className="relative isolate overflow-hidden bg-[#faf8fc] py-10 font-myfont sm:py-16 lg:py-20"
      >
        {/* Background Decoration */}
        <div className="pointer-events-none absolute -right-24 top-10 size-64 rounded-full bg-fuchsia-200/40 blur-3xl sm:size-80" />
        <div className="pointer-events-none absolute -left-24 bottom-20 size-64 rounded-full bg-purple-200/40 blur-3xl sm:size-80" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="relative mb-10 overflow-hidden rounded-4xl bg-linear-to-l from-purple-950 via-fuchsia-900 to-purple-800 px-5 py-12 text-center shadow-xl shadow-purple-200/40 sm:mb-14 sm:px-10 sm:py-16">
            <div className="pointer-events-none absolute -right-10 -top-16 size-48 rounded-full border border-white/10 sm:size-64" />
            <div className="pointer-events-none absolute -bottom-24 -left-10 size-56 rounded-full border border-white/10 sm:size-72" />

            <div className="relative">
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-bold text-fuchsia-100 backdrop-blur-sm sm:text-sm">
                ✦ درباره ما
              </span>

              <h1 className="text-2xl font-extrabold leading-relaxed text-white sm:text-4xl lg:text-5xl">
                با ما بیشتر آشنا شوید
              </h1>

              <p className="mx-auto mt-4 max-w-xl text-xs leading-7 text-purple-100 sm:text-sm sm:leading-8">
                تجربه‌ای ساده، مطمئن و لذت‌بخش از خرید آنلاین
              </p>

              <div className="mx-auto mt-7 h-1 w-16 rounded-full bg-fuchsia-300" />
            </div>
          </div>

          {/* Introduction */}
          <div className="mb-8 grid items-center gap-6 rounded-3xl border border-purple-100/80 bg-white/90 p-5 shadow-sm backdrop-blur-sm sm:p-8 md:grid-cols-[auto_1fr] md:gap-8">
            <div className="mx-auto flex size-20 shrink-0 items-center justify-center rounded-3xl bg-linear-to-br from-purple-700 to-fuchsia-500 text-4xl text-white shadow-lg shadow-purple-200 sm:size-24 sm:text-5xl">
              ♡
            </div>

            <div>
              <span className="mb-2 inline-block text-xs font-bold text-fuchsia-600">
                همراه شما در انتخاب بهتر
              </span>

              <h2 className="mb-4 text-lg font-extrabold text-purple-950 sm:text-2xl">
                ما چه کاری انجام می‌دهیم؟
              </h2>

              <p className="text-justify text-xs leading-8 text-gray-600 sm:text-sm sm:leading-9">
                ما تلاش می‌کنیم مجموعه‌ای از محصولات کاربردی و باکیفیت را در
                اختیار شما قرار دهیم تا بتوانید خریدی راحت و مطمئن داشته باشید.
                هدف ما این است که فرآیند انتخاب و خرید محصول، ساده و لذت‌بخش
                باشد.
              </p>

              <p className="mt-3 text-justify text-xs leading-8 text-gray-600 sm:text-sm sm:leading-9">
                از انتخاب محصول تا ثبت سفارش و دریافت آن، تلاش می‌کنیم در کنار
                شما باشیم و تجربه خوبی از خرید آنلاین برایتان ایجاد کنیم.
              </p>
            </div>
          </div>

          {/* Features Title */}
          <div className="mb-6 text-center">
            <span className="text-xs font-bold text-fuchsia-600">
              ✦ چرا ما؟
            </span>
            <h2 className="mt-2 text-xl font-extrabold text-purple-950 sm:text-2xl">
              ارزش‌هایی که به آن‌ها پایبندیم
            </h2>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            <div className="group rounded-3xl border border-purple-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-100/70">
              <div className="mx-auto mb-5 flex size-16 items-center justify-center rounded-2xl bg-purple-50 text-3xl text-purple-700 transition-all duration-300 group-hover:rotate-6 group-hover:bg-purple-700 group-hover:text-white">
                ✓
              </div>

              <h3 className="mb-3 text-base font-extrabold text-purple-950">
                کیفیت
              </h3>

              <p className="text-xs leading-8 text-gray-500 sm:text-sm">
                تلاش می‌کنیم محصولات باکیفیت و مناسب را برای شما فراهم کنیم.
              </p>
            </div>

            <div className="group rounded-3xl border border-fuchsia-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-fuchsia-200 hover:shadow-xl hover:shadow-fuchsia-100/70">
              <div className="mx-auto mb-5 flex size-16 items-center justify-center rounded-2xl bg-fuchsia-50 text-3xl text-fuchsia-700 transition-all duration-300 group-hover:rotate-6 group-hover:bg-fuchsia-700 group-hover:text-white">
                ♡
              </div>

              <h3 className="mb-3 text-base font-extrabold text-purple-950">
                رضایت شما
              </h3>

              <p className="text-xs leading-8 text-gray-500 sm:text-sm">
                رضایت مشتری و تجربه خوب خرید، یکی از مهم‌ترین اهداف ماست.
              </p>
            </div>

            <div className="group rounded-3xl border border-purple-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-100/70 sm:col-span-2 lg:col-span-1">
              <div className="mx-auto mb-5 flex size-16 items-center justify-center rounded-2xl bg-purple-50 text-3xl text-purple-700 transition-all duration-300 group-hover:rotate-6 group-hover:bg-purple-700 group-hover:text-white">
                ⚡
              </div>

              <h3 className="mb-3 text-base font-extrabold text-purple-950">
                ارسال سریع
              </h3>

              <p className="text-xs leading-8 text-gray-500 sm:text-sm">
                سفارش‌ها را در سریع‌ترین زمان ممکن آماده و ارسال می‌کنیم.
              </p>
            </div>
          </div>

          {/* Final Message */}
          <div className="relative mt-8 overflow-hidden rounded-3xl bg-linear-to-l from-fuchsia-800 to-purple-900 px-5 py-9 text-center shadow-lg shadow-purple-200/40 sm:mt-10 sm:px-8 sm:py-12">
            <div className="pointer-events-none absolute -right-10 -top-16 size-40 rounded-full bg-white/5" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 size-52 rounded-full bg-white/5" />

            <div className="relative">
              <div className="mb-4 text-3xl text-fuchsia-200">✦</div>

              <h2 className="text-lg font-extrabold text-white sm:text-2xl">
                ممنون که ما را برای خرید انتخاب می‌کنید
              </h2>

              <p className="mt-3 text-xs leading-7 text-purple-100 sm:text-sm">
                همراهی شما باعث می‌شود هر روز برای بهتر شدن تلاش کنیم.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;
