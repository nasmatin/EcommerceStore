import Header from "../Components/Header";
import Menu from "../Components/Menu";
import Footer from "./Footer";

function Support() {
  //view support component
  return (
    <>
      <Header />
      <Menu />

      <section
        dir="rtl"
        className="
          relative overflow-hidden
          bg-[#faf8fc] py-12 sm:py-16
          font-myfont animate-in fade-in duration-500
        "
      >
        {/* تزئینات پس‌زمینه */}
        <div className="pointer-events-none absolute -right-32 top-10 size-72 rounded-full bg-purple-100/70 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-32 size-80 rounded-full bg-fuchsia-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-4">
          {/* عنوان */}
          <div className="mb-12 text-center">
            <div
              className="
                mx-auto mb-5 flex size-16 items-center
                justify-center rounded-2xl
                bg-linear-to-br from-purple-900 to-fuchsia-700
                text-2xl text-white shadow-lg shadow-purple-200
              "
            >
              <i className="fa-solid fa-headset" />
            </div>

            <h1 className="text-2xl font-extrabold text-purple-950 sm:text-3xl">
              مرکز پشتیبانی
            </h1>

            <p className="mx-auto mt-4 max-w-lg text-sm leading-8 text-gray-500">
              سوالی داری؟ برای راهنمایی و همراهی در خرید، کنار تو هستیم.
            </p>

            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-linear-to-l from-purple-800 to-fuchsia-600" />
          </div>

          {/* کارت‌های پشتیبانی */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <div
              className="
                group rounded-2xl border border-purple-100
                bg-white p-6 shadow-sm shadow-purple-100/60
                transition-all duration-300
                hover:-translate-y-2 hover:border-fuchsia-200
                hover:shadow-xl hover:shadow-purple-100
              "
            >
              <div
                className="
                  mb-6 flex size-14 items-center justify-center
                  rounded-2xl bg-purple-50
                  text-2xl text-purple-800
                  transition-all duration-300
                  group-hover:bg-purple-900 group-hover:text-white
                "
              >
                <i className="fa-regular fa-comments" />
              </div>

              <h2 className="mb-3 text-lg font-extrabold text-purple-950">
                سوالات شما
              </h2>

              <p className="text-sm leading-8 text-gray-500">
                اگر درباره محصولات، ثبت سفارش یا نحوه ارسال سوالی داری، پشتیبانی
                آماده پاسخگویی به توست.
              </p>

              <div className="mt-6 h-1 w-10 rounded-full bg-purple-200 transition-all duration-300 group-hover:w-16 group-hover:bg-fuchsia-500" />
            </div>

            <div
              className="
                group rounded-2xl border border-purple-100
                bg-white p-6 shadow-sm shadow-purple-100/60
                transition-all duration-300
                hover:-translate-y-2 hover:border-fuchsia-200
                hover:shadow-xl hover:shadow-purple-100
              "
            >
              <div
                className="
                  mb-6 flex size-14 items-center justify-center
                  rounded-2xl bg-fuchsia-50
                  text-2xl text-fuchsia-700
                  transition-all duration-300
                  group-hover:bg-fuchsia-800 group-hover:text-white
                "
              >
                <i className="fa-solid fa-box-open" />
              </div>

              <h2 className="mb-3 text-lg font-extrabold text-purple-950">
                پیگیری سفارش
              </h2>

              <p className="text-sm leading-8 text-gray-500">
                برای پیگیری سفارش، شماره سفارش خود را به پشتیبانی اعلام کن تا
                وضعیت آن را بررسی کنیم.
              </p>

              <div className="mt-6 h-1 w-10 rounded-full bg-fuchsia-200 transition-all duration-300 group-hover:w-16 group-hover:bg-fuchsia-500" />
            </div>

            <div
              className="
                group rounded-2xl border border-purple-100
                bg-white p-6 shadow-sm shadow-purple-100/60
                transition-all duration-300
                hover:-translate-y-2 hover:border-fuchsia-200
                hover:shadow-xl hover:shadow-purple-100
              "
            >
              <div
                className="
                  mb-6 flex size-14 items-center justify-center
                  rounded-2xl bg-purple-50
                  text-2xl text-purple-800
                  transition-all duration-300
                  group-hover:bg-purple-900 group-hover:text-white
                "
              >
                <i className="fa-solid fa-phone" />
              </div>

              <h2 className="mb-3 text-lg font-extrabold text-purple-950">
                تماس با ما
              </h2>

              <p className="mb-5 text-sm leading-8 text-gray-500">
                شنبه تا پنجشنبه، ساعت ۹ تا ۱۸ پاسخگوی شما هستیم.
              </p>

              <a
                href="tel:02112345678"
                dir="ltr"
                className="
                  inline-flex min-h-11 items-center justify-center
                  gap-2 rounded-xl
                  bg-linear-to-l from-purple-900 to-fuchsia-800
                  px-4 py-2.5 text-sm font-bold text-white
                  shadow-md shadow-purple-200/60
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-lg
                  hover:shadow-fuchsia-200/70
                "
              >
                <i className="fa-solid fa-phone text-xs" />
                ۰۲۱-۱۲۳۴۵۶۷۸
              </a>

              <div className="mt-6 h-1 w-10 rounded-full bg-purple-200 transition-all duration-300 group-hover:w-16 group-hover:bg-fuchsia-500" />
            </div>
          </div>

          {/* پیام پایانی */}
          <div
            className="
              relative mt-8 overflow-hidden rounded-2xl
              bg-linear-to-l from-purple-950
              via-purple-900 to-fuchsia-800
              px-5 py-7 text-center text-white
              shadow-lg shadow-purple-200/60
              sm:px-8
            "
          >
            <div className="absolute -left-10 -top-16 size-40 rounded-full border border-white/10" />
            <div className="absolute -bottom-20 -right-10 size-48 rounded-full border border-white/10" />

            <div className="relative">
              <i className="fa-solid fa-heart mb-3 text-2xl text-fuchsia-200" />

              <p className="text-sm font-bold leading-8 sm:text-base">
                پاسخگویی سریع و همراهی شما، اولویت ماست.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Support;
