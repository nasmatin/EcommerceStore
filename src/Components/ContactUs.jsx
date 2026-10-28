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
        className="font-myfont bg-fuchsia-50 py-12 animate-in fade-in duration-500"
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold text-fuchsia-900 transition-colors duration-300 hover:text-fuchsia-700">
              تماس با ما
            </h1>

            <p className="mt-3 text-sm text-fuchsia-700">
              راه‌های ارتباطی با مجموعه ما
            </p>
          </div>

          {/* اطلاعات + نقشه */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* اطلاعات تماس */}
            <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-fuchsia-100 transition-all duration-300 hover:shadow-md hover:ring-fuchsia-200">
              <h2 className="mb-6 text-xl font-bold text-fuchsia-900">
                اطلاعات تماس
              </h2>

              {/* آدرس */}
              <div className="mb-6 flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-fuchsia-800 text-lg text-white transition-transform duration-300 hover:scale-110">
                  📍
                </div>

                <div>
                  <h3 className="mb-1 font-bold text-gray-800">آدرس</h3>

                  <p className="text-sm leading-7 text-gray-500">
                    تهران، خیابان مثال، کوچه نمونه، پلاک ۱۲
                  </p>
                </div>
              </div>

              {/* شماره تماس */}
              <div className="mb-6 flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-fuchsia-700 text-lg text-white transition-transform duration-300 hover:scale-110">
                  ☎
                </div>

                <div>
                  <h3 className="mb-1 font-bold text-gray-800">شماره تماس</h3>

                  <a
                    href="tel:02112345678"
                    className="text-sm font-semibold text-fuchsia-800 transition-colors duration-200 hover:text-fuchsia-900"
                  >
                    ۰۲۱-۱۲۳۴۵۶۷۸
                  </a>
                </div>
              </div>

              {/* پشتیبانی */}
              <div className="mb-6 flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-fuchsia-600 text-lg text-white transition-transform duration-300 hover:scale-110">
                  💬
                </div>

                <div>
                  <h3 className="mb-1 font-bold text-gray-800">
                    شماره پشتیبانی
                  </h3>

                  <a
                    href="tel:09121234567"
                    className="text-sm font-semibold text-fuchsia-800 transition-colors duration-200 hover:text-fuchsia-900"
                  >
                    ۰۹۱۲-۱۲۳۴۵۶۷
                  </a>
                </div>
              </div>

              {/* ساعات کاری */}
              <div className="rounded-xl bg-fuchsia-50 p-4 transition-colors duration-300 hover:bg-fuchsia-100">
                <h3 className="mb-2 font-bold text-fuchsia-900">
                  ساعات پاسخگویی
                </h3>

                <p className="text-sm leading-7 text-gray-600">
                  شنبه تا پنجشنبه
                  <br />
                  ساعت ۹ صبح تا ۱۸ عصر
                </p>
              </div>
            </div>

            {/* نقشه */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-fuchsia-100 transition-all duration-300 hover:shadow-md hover:ring-fuchsia-200">
              <div className="border-b border-fuchsia-100 px-6 py-5">
                <h2 className="font-bold text-fuchsia-900">
                  موقعیت ما روی نقشه
                </h2>

                <p className="mt-1 text-xs text-gray-500">
                  برای مشاهده مسیر می‌توانید روی نقشه کلیک کنید.
                </p>
              </div>

              <div className="w-full">
                <ContactMap />
              </div>
            </div>
          </div>

          {/* نوار پایانی */}
          <div className="mt-6 rounded-2xl bg-fuchsia-800 px-6 py-6 text-center text-white transition-colors duration-300 hover:bg-fuchsia-900">
            <h2 className="font-bold">خوشحالیم که با ما در ارتباط هستید 💜</h2>

            <p className="mt-2 text-sm text-fuchsia-100">
              در صورت داشتن هرگونه سوال، از طریق شماره تماس یا پشتیبانی با ما در
              ارتباط باشید.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactUs;
