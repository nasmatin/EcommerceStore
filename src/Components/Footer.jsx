import Logo from "./Logo";

const Footer = () => {
  return (
    <>
      <footer
        dir="rtl"
        className="
  relative overflow-hidden
  border-t-4 border-fuchsia-800
  bg-fuchsia-800
  font-myfont text-gray-700
"
      >
        {/* ================= بخش اصلی ================= */}
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {/* ================= درباره فروشگاه ================= */}
            <div className="flex flex-col items-center rounded-3xl border border-purple-100 bg-white p-7 text-center shadow-sm">
              <Logo />

              <p className="mt-5 max-w-xs text-sm leading-8 text-gray-500">
                تجربه‌ای آسان و لذت‌بخش از خرید آنلاین، همراه با محصولات باکیفیت
                و خدمات مطمئن.
              </p>

              {/* ================= شبکه اجتماعی ================= */}
              <div className="mt-6">
                <h3 className="mb-4 text-sm font-bold text-gray-800">
                  ما را در شبکه‌های اجتماعی دنبال کنید
                </h3>

                <div className="flex items-center justify-center gap-3">
                  {[
                    ["fa-instagram", "اینستاگرام"],
                    ["fa-telegram", "تلگرام"],
                    ["fa-whatsapp", "واتساپ"],
                    ["fa-x-twitter", "توییتر"],
                  ].map(([icon, title]) => (
                    <a
                      key={icon}
                      href="#"
                      aria-label={title}
                      className="
                        flex size-10 items-center justify-center
                        rounded-xl border border-purple-100
                        bg-[#f7f1fb] text-fuchsia-800
                        transition-all duration-300
                        hover:-translate-y-1
                        hover:border-fuchsia-400
                        hover:bg-fuchsia-700 hover:text-white
                        hover:shadow-md hover:shadow-fuchsia-200
                      "
                    >
                      <i className={`fa-brands ${icon} text-lg`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* ================= خدمات مشتریان ================= */}
            <div className="rounded-3xl border border-purple-100 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-md hover:shadow-purple-100">
              <h3 className="mb-7 flex items-center gap-3 font-bold text-gray-800">
                <span className="flex size-10 items-center justify-center rounded-xl bg-fuchsia-100 text-fuchsia-800">
                  <i className="fa-solid fa-headset"></i>
                </span>
                خدمات مشتریان
              </h3>

              <ul className="space-y-5 text-sm font-medium text-gray-500">
                {[
                  "پیگیری سفارش",
                  "راهنمای خرید",
                  "شرایط ارسال",
                  "شرایط بازگشت کالا",
                  "سوالات متداول",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="group flex items-center gap-2 transition-colors duration-300 hover:text-fuchsia-800"
                    >
                      <i className="fa-solid fa-angle-left text-xs text-fuchsia-400 transition-transform duration-300 group-hover:-translate-x-1"></i>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ================= ارتباط با ما ================= */}
            <div className="rounded-3xl border border-purple-100 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-md hover:shadow-purple-100">
              <h3 className="mb-7 flex items-center gap-3 font-bold text-gray-800">
                <span className="flex size-10 items-center justify-center rounded-xl bg-fuchsia-100 text-fuchsia-800">
                  <i className="fa-solid fa-phone"></i>
                </span>
                ارتباط با ما
              </h3>

              <div className="space-y-5 text-sm font-medium text-gray-500">
                <div className="flex items-start gap-3">
                  <i className="fa-solid fa-location-dot mt-1 text-lg text-fuchsia-700"></i>
                  <span className="leading-7">
                    تهران - خیابان توحید - خیابان پرچم - پ24
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <i className="fa-solid fa-clock mt-1 text-lg text-fuchsia-700"></i>
                  <span className="leading-7">
                    شنبه تا پنجشنبه
                    <br />۹ صبح تا ۸ شب
                  </span>
                </div>

                <a
                  href="tel:02112345678"
                  className="flex items-center gap-3 transition-colors duration-300 hover:text-fuchsia-800"
                >
                  <i className="fa-solid fa-phone text-fuchsia-700"></i>
                  <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
                </a>

                <a
                  href="mailto:info@example.com"
                  className="flex items-center gap-3 transition-colors duration-300 hover:text-fuchsia-800"
                >
                  <i className="fa-solid fa-envelope text-fuchsia-700"></i>
                  <span className="break-all">info@example.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* ================= مجوزها ================= */}
          <div className="mt-12 rounded-3xl border border-purple-100 bg-white/70 px-5 py-8">
            <h3 className="mb-6 text-center font-bold text-gray-800">
              مجوزها و نمادهای اعتماد
            </h3>

            <div className="flex flex-wrap items-center justify-center gap-4">
              {[
                ["fa-shield-halved", "نماد اعتماد", "الکترونیکی"],
                ["fa-certificate", "مجوز", "ساماندهی"],
                ["fa-lock", "پرداخت", "امن"],
              ].map(([icon, title, subtitle]) => (
                <a
                  key={icon}
                  href="#"
                  className="
                    flex size-24 flex-col items-center justify-center
                    rounded-2xl border border-purple-100
                    bg-[#f8f3fc] shadow-sm
                    transition-all duration-300
                    hover:-translate-y-1 hover:border-fuchsia-300
                    hover:shadow-md hover:shadow-fuchsia-100
                    sm:size-28
                  "
                >
                  <i
                    className={`fa-solid ${icon} text-2xl text-fuchsia-800 sm:text-3xl`}
                  ></i>

                  <span className="mt-2 text-center text-[11px] leading-5 text-gray-500 sm:text-xs">
                    {title}
                    <br />
                    {subtitle}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ================= پایین فوتر ================= */}
        <div className="border-t border-fuchsia-800 bg-fuchsia-950 text-white">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 px-5 py-5 text-center text-xs sm:text-sm md:flex-row md:gap-8 lg:px-8">
            <p>تمامی حقوق این سایت محفوظ است.</p>

            <span className="hidden text-fuchsia-400 md:block">|</span>

            <p className="flex items-center gap-2">
              طراحی و توسعه با
              <i className="fa-solid fa-heart text-pink-300 transition-transform duration-300 hover:scale-125"></i>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
