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
        className="font-myfont bg-fuchsia-100 py-12 animate-in fade-in duration-500"
      >
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold text-fuchsia-900 transition-colors duration-300 hover:text-fuchsia-700">
              پشتیبانی
            </h1>

            <p className="mt-3 text-sm text-fuchsia-700">
              سوالی دارید؟ ما اینجا هستیم تا کمکتان کنیم.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-fuchsia-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:ring-fuchsia-300">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-fuchsia-800 text-xl text-white transition-transform duration-300 hover:scale-110">
                💬
              </div>

              <h2 className="mb-2 text-lg font-bold text-fuchsia-900 transition-colors duration-200 hover:text-fuchsia-700">
                سوالات شما
              </h2>

              <p className="text-sm leading-7 text-gray-600">
                اگر درباره محصولات، ثبت سفارش یا نحوه ارسال سوالی دارید،
                پشتیبانی آماده پاسخگویی به شماست.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-fuchsia-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:ring-fuchsia-300">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-fuchsia-700 text-xl text-white transition-transform duration-300 hover:scale-110">
                📦
              </div>

              <h2 className="mb-2 text-lg font-bold text-fuchsia-900 transition-colors duration-200 hover:text-fuchsia-700">
                پیگیری سفارش
              </h2>

              <p className="text-sm leading-7 text-gray-600">
                برای پیگیری سفارش، شماره سفارش خود را به پشتیبانی اعلام کنید تا
                وضعیت آن را بررسی کنیم.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-fuchsia-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:ring-fuchsia-300">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-fuchsia-600 text-xl text-white transition-transform duration-300 hover:scale-110">
                ☎️
              </div>

              <h2 className="mb-2 text-lg font-bold text-fuchsia-900 transition-colors duration-200 hover:text-fuchsia-700">
                تماس با ما
              </h2>

              <p className="mb-4 text-sm leading-7 text-gray-600">
                شنبه تا پنجشنبه، ساعت ۹ تا ۱۸ پاسخگوی شما هستیم.
              </p>

              <a
                href="tel:02112345678"
                className="inline-flex items-center gap-2 rounded-lg bg-fuchsia-700 px-4 py-2 text-sm font-bold text-white transition-all duration-200 hover:scale-[1.03] hover:bg-fuchsia-900"
              >
                ☎ ۰۲۱-۱۲۳۴۵۶۷۸
              </a>
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-fuchsia-800 px-6 py-5 text-center font-bold text-white transition-colors duration-300 hover:bg-fuchsia-900">
            <p className="text-m">پاسخگویی سریع و همراهی شما، اولویت ماست.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Support;
