import Logo from "./Logo";

const Footer = () => {
  return (
    <>
      <div className="h-1 border bg-fuchsia-400"></div>
      <footer
        dir="rtl"
        className="border-t border-gray-100 bg-fuchsia-200 font-myfont"
      >
        <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
          {/* ================= بخش اصلی ================= */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {/* ================= درباره فروشگاه ================= */}
            <div className="flex flex-col items-center text-center">
              <Logo />

              {/* <p className="font-semibold text-base leading-7 text-gray-500 max-w-md">
                فروشگاه آنلاین ما با هدف ارائه محصولات باکیفیت،
                تجربه خرید آسان و ارسال سریع در کنار شماست.
              </p> */}

              {/* ================= شبکه اجتماعی ================= */}
              <div className="mt-6 flex flex-col items-center gap-4">
                <span className="text-center text-sm font-medium text-gray-700">
                  ما را در شبکه‌های اجتماعی دنبال کنید
                </span>

                <div className="flex items-center justify-center gap-3">
                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-fuchsia-700 text-fuchsia-800 transition-all duration-300 ease-in-out hover:scale-110 hover:border-fuchsia-800 hover:bg-fuchsia-800 hover:text-white hover:shadow-md active:scale-95"
                  >
                    <i className="fa-brands fa-instagram text-lg transition-transform duration-300"></i>
                  </a>

                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-fuchsia-700 text-fuchsia-800 transition-all duration-300 ease-in-out hover:scale-110 hover:border-fuchsia-800 hover:bg-fuchsia-800 hover:text-white hover:shadow-md active:scale-95"
                  >
                    <i className="fa-brands fa-telegram text-lg transition-transform duration-300"></i>
                  </a>

                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-fuchsia-700 text-fuchsia-800 transition-all duration-300 ease-in-out hover:scale-110 hover:border-fuchsia-800 hover:bg-fuchsia-800 hover:text-white hover:shadow-md active:scale-95"
                  >
                    <i className="fa-brands fa-whatsapp text-lg transition-transform duration-300"></i>
                  </a>

                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-fuchsia-700 text-fuchsia-800 transition-all duration-300 ease-in-out hover:scale-110 hover:border-fuchsia-800 hover:bg-fuchsia-800 hover:text-white hover:shadow-md active:scale-95"
                  >
                    <i className="fa-brands fa-x-twitter text-lg transition-transform duration-300"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* ================= دسترسی سریع ================= */}
            {/* <div>

              <h3 className="font-bold text-gray-800 mb-5">
                دسترسی سریع
              </h3>

              <ul className="space-y-3 text-sm text-gray-500">

                <li>
                  <a href="#" className="hover:text-fuchsia-400 transition">
                    صفحه اصلی
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-fuchsia-400 transition">
                    فروشگاه
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-fuchsia-400 transition">
                    محصولات جدید
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-fuchsia-400 transition">
                    پرفروش‌ها
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-fuchsia-400 transition">
                    تخفیف‌ها
                  </a>
                </li>

              </ul>

            </div> */}

            {/* ================= خدمات مشتریان ================= */}
            <div className="text-center sm:text-right">
              <h3 className="mb-5 font-bold text-gray-800 transition-colors duration-300 hover:text-fuchsia-800">
                خدمات مشتریان
              </h3>

              <ul className="space-y-3 text-base font-semibold text-gray-500">
                <li>
                  <a
                    href="#"
                    className="inline-block transition-all duration-300 hover:-translate-x-1 hover:text-fuchsia-800"
                  >
                    پیگیری سفارش
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="inline-block transition-all duration-300 hover:-translate-x-1 hover:text-fuchsia-800"
                  >
                    راهنمای خرید
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="inline-block transition-all duration-300 hover:-translate-x-1 hover:text-fuchsia-800"
                  >
                    شرایط ارسال
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="inline-block transition-all duration-300 hover:-translate-x-1 hover:text-fuchsia-800"
                  >
                    شرایط بازگشت کالا
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="inline-block transition-all duration-300 hover:-translate-x-1 hover:text-fuchsia-800"
                  >
                    سوالات متداول
                  </a>
                </li>
              </ul>
            </div>

            {/* ================= ارتباط با ما ================= */}
            <div className="text-center sm:text-right">
              <h3 className="mb-5 font-bold text-gray-800 transition-colors duration-300 hover:text-fuchsia-800">
                ارتباط با ما
              </h3>

              <div className="space-y-4 text-base font-semibold text-gray-500">
                <div className="flex items-start gap-3 whitespace-nowrap">
                  <i className="fa-solid fa-location-dot mt-1 text-fuchsia-800"></i>

                  <a
                    href="#"
                    className="whitespace-nowrap transition-colors duration-300 hover:text-fuchsia-800"
                  >
                    تهران-خیابان توحید-خیابان پرچم-پ24
                  </a>
                </div>

                <div className="flex gap-3">
                  <i className="fa-solid fa-clock mt-1 text-fuchsia-800"></i>

                  <span>
                    شنبه تا پنجشنبه
                    <br />۹ صبح تا ۸ شب
                  </span>
                </div>

                <div className="mt-5 space-y-3 text-sm font-semibold text-gray-600">
                  <a
                    href="tel:02112345678"
                    className="flex items-center gap-3 transition-colors duration-300 hover:text-fuchsia-800"
                  >
                    <i className="fa-solid fa-phone text-fuchsia-800"></i>
                    <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
                  </a>

                  <a
                    href="#"
                    className="flex items-center gap-3 transition-colors duration-300 hover:text-fuchsia-800"
                  >
                    <i className="fa-solid fa-envelope text-fuchsia-900"></i>
                    <span>info@example.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ================= جداکننده ================= */}
          <div className="mt-10 border-t border-gray-300 pt-8">
            <div className="flex flex-col items-center gap-8">
              {/* ================= مجوزها ================= */}
              <div className="flex w-full flex-col items-center">
                <h3 className="mb-5 text-center font-bold text-gray-800 transition-colors duration-300 hover:text-fuchsia-800">
                  مجوزها و نمادهای اعتماد
                </h3>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  {/* ای نماد */}
                  <a
                    href="#"
                    className="flex h-24 w-24 flex-col items-center justify-center rounded-xl border border-gray-200 bg-white transition-all duration-300 ease-in-out hover:scale-105 hover:border-fuchsia-800 hover:shadow-lg active:scale-95 sm:h-28 sm:w-28"
                  >
                    <i className="fa-solid fa-shield-halved text-2xl text-fuchsia-800 transition-transform duration-300 sm:text-3xl"></i>

                    <span className="mt-2 text-center text-[11px] text-gray-500 sm:text-xs">
                      نماد اعتماد
                      <br />
                      الکترونیکی
                    </span>
                  </a>

                  {/* ساماندهی */}
                  <a
                    href="#"
                    className="flex h-24 w-24 flex-col items-center justify-center rounded-xl border border-gray-200 bg-white transition-all duration-300 ease-in-out hover:scale-105 hover:border-fuchsia-800 hover:shadow-lg active:scale-95 sm:h-28 sm:w-28"
                  >
                    <i className="fa-solid fa-certificate text-2xl text-fuchsia-800 transition-transform duration-300 sm:text-3xl"></i>

                    <span className="mt-2 text-center text-[11px] text-gray-500 sm:text-xs">
                      مجوز
                      <br />
                      ساماندهی
                    </span>
                  </a>

                  {/* پرداخت امن */}
                  <a
                    href="#"
                    className="flex h-24 w-24 flex-col items-center justify-center rounded-xl border border-gray-200 bg-white transition-all duration-300 ease-in-out hover:scale-105 hover:border-fuchsia-800 hover:shadow-lg active:scale-95 sm:h-28 sm:w-28"
                  >
                    <i className="fa-solid fa-lock text-2xl text-fuchsia-800 transition-transform duration-300 sm:text-3xl"></i>

                    <span className="mt-2 text-center text-[11px] text-gray-500 sm:text-xs">
                      پرداخت
                      <br />
                      امن
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= پایین فوتر ================= */}
        <div className="bg-fuchsia-950 text-white">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 px-5 py-4 text-center text-xs sm:text-sm md:flex-row lg:px-8">
            <p>تمامی حقوق این سایت محفوظ است.</p>

            <p className="flex items-center gap-1">
              طراحی و توسعه با
              <i className="fa-solid fa-heart text-sm transition-transform duration-300 hover:scale-125 hover:text-pink-300"></i>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
