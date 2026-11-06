import Header from "../Components/Header";
import Menu from "../Components/Menu";
import ContactMap from "./ContactMap";
import Footer from "./Footer";

const ContactUs = () => {
  //view contactus component

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
        <div className="pointer-events-none absolute -left-24 bottom-10 size-64 rounded-full bg-purple-200/40 blur-3xl sm:size-80" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="relative mb-8 overflow-hidden rounded-4xl bg-linear-to-l from-purple-950 via-fuchsia-900 to-purple-800 px-5 py-10 text-center shadow-xl shadow-purple-200/40 sm:mb-12 sm:px-10 sm:py-14">
            <div className="pointer-events-none absolute -right-10 -top-16 size-48 rounded-full border border-white/10 sm:size-64" />
            <div className="pointer-events-none absolute -bottom-24 -left-10 size-56 rounded-full border border-white/10 sm:size-72" />

            <div className="relative">
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-bold text-fuchsia-100 backdrop-blur-sm sm:text-sm">
                ✦ ارتباط با ما
              </span>

              <h1 className="text-2xl font-extrabold text-white sm:text-4xl">
                تماس با ما
              </h1>

              <p className="mx-auto mt-4 max-w-xl text-xs leading-7 text-purple-100 sm:text-sm sm:leading-8">
                ما همیشه آماده شنیدن نظرات و پاسخگویی به سوالات شما هستیم.
              </p>

              <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-fuchsia-300" />
            </div>
          </div>

          {/* Contact + Map */}
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-7">
            {/* Contact Information */}
            <div className="rounded-3xl border border-purple-100 bg-white p-5 shadow-sm sm:p-7">
              <div className="mb-7 flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-linear-to-br from-purple-700 to-fuchsia-500 text-2xl text-white shadow-md shadow-purple-200">
                  ☎
                </div>

                <div>
                  <h2 className="text-lg font-extrabold text-purple-950 sm:text-xl">
                    اطلاعات تماس
                  </h2>
                  <p className="mt-1 text-xs text-gray-400">
                    راه‌های ارتباطی با مجموعه ما
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="group mb-4 flex items-center gap-4 rounded-2xl border border-gray-100 bg-[#faf9fc] p-4 transition-all duration-300 hover:border-fuchsia-200 hover:bg-fuchsia-50/60">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-xl text-purple-700 transition-all duration-300 group-hover:bg-purple-700 group-hover:text-white">
                  📍
                </div>

                <div className="min-w-0">
                  <h3 className="mb-1 text-sm font-bold text-gray-800">آدرس</h3>
                  <p className="text-xs leading-7 text-gray-500 sm:text-sm">
                    تهران، خیابان مثال، کوچه نمونه، پلاک ۱۲
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="group mb-4 flex items-center gap-4 rounded-2xl border border-gray-100 bg-[#faf9fc] p-4 transition-all duration-300 hover:border-fuchsia-200 hover:bg-fuchsia-50/60">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-fuchsia-100 text-xl text-fuchsia-700 transition-all duration-300 group-hover:bg-fuchsia-700 group-hover:text-white">
                  ☎
                </div>

                <div>
                  <h3 className="mb-1 text-sm font-bold text-gray-800">
                    شماره تماس
                  </h3>
                  <a
                    href="tel:02112345678"
                    className="text-sm font-semibold text-fuchsia-800 transition-colors hover:text-purple-950"
                  >
                    ۰۲۱-۱۲۳۴۵۶۷۸
                  </a>
                </div>
              </div>

              {/* Support */}
              <div className="group mb-4 flex items-center gap-4 rounded-2xl border border-gray-100 bg-[#faf9fc] p-4 transition-all duration-300 hover:border-fuchsia-200 hover:bg-fuchsia-50/60">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-xl text-purple-700 transition-all duration-300 group-hover:bg-purple-700 group-hover:text-white">
                  💬
                </div>

                <div>
                  <h3 className="mb-1 text-sm font-bold text-gray-800">
                    شماره پشتیبانی
                  </h3>
                  <a
                    href="tel:09121234567"
                    className="text-sm font-semibold text-fuchsia-800 transition-colors hover:text-purple-950"
                  >
                    ۰۹۱۲-۱۲۳۴۵۶۷
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="mt-5 rounded-2xl bg-linear-to-l from-purple-50 to-fuchsia-50 p-5 ring-1 ring-purple-100">
                <div className="mb-3 flex items-center gap-2">
                  <span className="text-xl">🕒</span>
                  <h3 className="text-sm font-extrabold text-purple-950">
                    ساعات پاسخگویی
                  </h3>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-gray-600 sm:text-sm">
                  <span>شنبه تا پنجشنبه</span>
                  <span className="rounded-full bg-white px-3 py-2 font-bold text-fuchsia-800 shadow-sm">
                    ۹ صبح تا ۱۸ عصر
                  </span>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-3xl border border-purple-100 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-100/60">
              <div className="flex items-center gap-3 border-b border-purple-100 px-5 py-5 sm:px-6">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-fuchsia-100 text-xl text-fuchsia-700">
                  🗺️
                </div>

                <div>
                  <h2 className="text-base font-extrabold text-purple-950 sm:text-lg">
                    موقعیت ما روی نقشه
                  </h2>
                  <p className="mt-1 text-xs text-gray-400">
                    برای مشاهده موقعیت و مسیر دسترسی از نقشه استفاده کنید.
                  </p>
                </div>
              </div>

              <div className="h-80 w-full overflow-hidden sm:h-105 lg:h-full lg:min-h-105">
                <ContactMap />
              </div>
            </div>
          </div>

          {/* Final Message */}
          <div className="relative mt-7 overflow-hidden rounded-3xl bg-linear-to-l from-fuchsia-800 to-purple-900 px-5 py-8 text-center shadow-lg shadow-purple-200/40 sm:mt-9 sm:px-8 sm:py-10">
            <div className="pointer-events-none absolute -right-10 -top-16 size-40 rounded-full bg-white/5" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 size-52 rounded-full bg-white/5" />

            <div className="relative">
              <div className="mb-3 text-3xl text-fuchsia-200">♡</div>

              <h2 className="text-base font-extrabold text-white sm:text-xl">
                خوشحالیم که با ما در ارتباط هستید
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-xs leading-7 text-purple-100 sm:text-sm sm:leading-8">
                در صورت داشتن هرگونه سوال، از طریق شماره تماس یا پشتیبانی با ما
                در ارتباط باشید. همراهی شما برای ما ارزشمند است.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactUs;
