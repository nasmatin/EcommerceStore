import Logo from "./Logo";

const Footer = () => {
  return (
    <>
      <div className="border bg-fuchsia-400 h-1 "></div>
      <footer
        dir="rtl"
        className="bg-fuchsia-200 font-myfont border-t border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-10">
          {/* ================= بخش اصلی ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {/* ================= درباره فروشگاه ================= */}
            <div className="flex flex-col items-center text-center">
              <Logo />

              {/* <p className="font-semibold text-base leading-7 text-gray-500 max-w-md">
                فروشگاه آنلاین ما با هدف ارائه محصولات باکیفیت،
                تجربه خرید آسان و ارسال سریع در کنار شماست.
              </p> */}

              {/* ================= شبکه اجتماعی ================= */}
              <div className="flex flex-col items-center gap-4 mt-6">
                <span className="text-sm font-medium text-gray-700 text-center">
                  ما را در شبکه‌های اجتماعی دنبال کنید
                </span>

                <div className="flex items-center justify-center gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full border border-fuchsia-700
                    flex items-center justify-center text-fuchsia-800
                    hover:text-white hover:bg-fuchsia-800
                    hover:border-fuchsia-800 transition"
                  >
                    <i className="fa-brands fa-instagram text-lg"></i>
                  </a>

                  <a
                    href="#"
                    className="w-10 h-10 rounded-full border border-fuchsia-700
                    flex items-center justify-center text-fuchsia-800
                    hover:text-white hover:bg-fuchsia-800
                    hover:border-fuchsia-800 transition"
                  >
                    <i className="fa-brands fa-telegram text-lg"></i>
                  </a>

                  <a
                    href="#"
                    className="w-10 h-10 rounded-full border border-fuchsia-700
                    flex items-center justify-center text-fuchsia-800
                    hover:text-white hover:bg-fuchsia-800
                    hover:border-fuchsia-800 transition"
                  >
                    <i className="fa-brands fa-whatsapp text-lg"></i>
                  </a>

                  <a
                    href="#"
                    className="w-10 h-10 rounded-full border border-fuchsia-700
                    flex items-center justify-center text-fuchsia-800
                    hover:text-white hover:bg-fuchsia-800
                    hover:border-fuchsia-800 transition"
                  >
                    <i className="fa-brands fa-x-twitter text-lg"></i>
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
              <h3 className="font-bold text-gray-800 mb-5">خدمات مشتریان</h3>

              <ul className="font-semibold space-y-3 text-base text-gray-500">
                <li>
                  <a href="#" className="hover:text-fuchsia-400 transition">
                    پیگیری سفارش
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-fuchsia-400 transition">
                    راهنمای خرید
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-fuchsia-400 transition">
                    شرایط ارسال
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-fuchsia-400 transition">
                    شرایط بازگشت کالا
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-fuchsia-400 transition">
                    سوالات متداول
                  </a>
                </li>
              </ul>
            </div>

            {/* ================= ارتباط با ما ================= */}
            <div className="text-center sm:text-right">
              <h3 className="font-bold text-gray-800 mb-5">ارتباط با ما</h3>

              <div className="font-semibold text-base space-y-4 text-gray-500">
                <div className="flex items-start gap-3 whitespace-nowrap">
                  <i className="fa-solid fa-location-dot text-fuchsia-800 mt-1"></i>

                  <a
                    href="#"
                    className="whitespace-nowrap hover:text-fuchsia-400 transition"
                  >
                    تهران-خیابان توحید-خیابان پرچم-پ24
                  </a>
                </div>

                <div className="flex gap-3">
                  <i className="fa-solid fa-clock text-fuchsia-800 mt-1"></i>

                  <span>
                    شنبه تا پنجشنبه
                    <br />۹ صبح تا ۸ شب
                  </span>
                </div>

                <div className="font-semibold mt-5 space-y-3 text-sm text-gray-600">
                  <a href="tel:02112345678">
                    <i className="fa-solid fa-phone text-fuchsia-800"></i>

                    <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
                  </a>

                  <a
                    href="#"
                    className="flex items-center gap-3 hover:text-fuchsia-400 transition"
                  >
                    <i className="fa-solid fa-envelope text-fuchsia-900"></i>
                    <span>info@example.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ================= جداکننده ================= */}
          <div className="border-t border-gray-300 mt-10 pt-8">
            <div className="flex flex-col items-center gap-8">
              {/* ================= مجوزها ================= */}
              <div className="w-full flex flex-col items-center">
                <h3 className="font-bold text-gray-800 mb-5 text-center">
                  مجوزها و نمادهای اعتماد
                </h3>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  {/* ای نماد */}
                  <a
                    href="#"
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl
                    border border-gray-200 bg-white
                    flex flex-col items-center justify-center
                    hover:border-fuchsia-800 hover:shadow-md transition"
                  >
                    <i className="fa-solid fa-shield-halved text-2xl sm:text-3xl text-fuchsia-800"></i>

                    <span className="text-[11px] sm:text-xs text-gray-500 mt-2 text-center">
                      نماد اعتماد
                      <br />
                      الکترونیکی
                    </span>
                  </a>

                  {/* ساماندهی */}
                  <a
                    href="#"
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl
                    border border-gray-200 bg-white
                    flex flex-col items-center justify-center
                    hover:border-fuchsia-800 hover:shadow-md transition"
                  >
                    <i className="fa-solid fa-certificate text-2xl sm:text-3xl text-fuchsia-800"></i>

                    <span className="text-[11px] sm:text-xs text-gray-500 mt-2 text-center">
                      مجوز
                      <br />
                      ساماندهی
                    </span>
                  </a>

                  {/* پرداخت امن */}
                  <a
                    href="#"
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl
                    border border-gray-200 bg-white
                    flex flex-col items-center justify-center
                    hover:border-fuchsia-800 hover:shadow-md transition"
                  >
                    <i className="fa-solid fa-lock text-2xl sm:text-3xl text-fuchsia-800"></i>

                    <span className="text-[11px] sm:text-xs text-gray-500 mt-2 text-center">
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
          <div
            className="max-w-7xl mx-auto px-5 lg:px-8 py-4
            flex flex-col md:flex-row
            items-center justify-center
            gap-3 text-xs sm:text-sm text-center"
          >
            <p>تمامی حقوق این سایت محفوظ است.</p>

            <p className="flex items-center gap-1">
              طراحی و توسعه با
              <i className="fa-solid fa-heart text-sm"></i>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
