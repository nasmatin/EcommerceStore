import Header from '../Components/Header'
 import Menu from '../Components/Menu'
const Support = () => {
  return (
    <>
    <Header/>
    <Menu/>
        <section
      dir="rtl"
      className="bg-purple-50 py-12"
    >
      <div className="mx-auto max-w-5xl px-4">

        {/* عنوان صفحه */}
        <div className="mb-10 text-center">
         

          <h1 className="text-3xl font-bold text-purple-900">
            پشتیبانی
          </h1>

          <p className="mt-3 text-sm text-purple-700">
            سوالی دارید؟ ما اینجا هستیم تا کمکتان کنیم.
          </p>
        </div>

        {/* کارت‌ها */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

          {/* سوالات */}
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-purple-100">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-800 text-xl text-white">
              💬
            </div>

            <h2 className="mb-2 text-lg font-bold text-purple-900">
              سوالات شما
            </h2>

            <p className="text-sm leading-7 text-gray-600">
              اگر درباره محصولات، ثبت سفارش یا نحوه ارسال سوالی دارید،
              پشتیبانی آماده پاسخگویی به شماست.
            </p>
          </div>

          {/* سفارش */}
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-purple-100">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-700 text-xl text-white">
              📦
            </div>

            <h2 className="mb-2 text-lg font-bold text-purple-900">
              پیگیری سفارش
            </h2>

            <p className="text-sm leading-7 text-gray-600">
              برای پیگیری سفارش، شماره سفارش خود را به پشتیبانی اعلام کنید
              تا وضعیت آن را بررسی کنیم.
            </p>
          </div>

          {/* تماس */}
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-purple-100">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600 text-xl text-white">
              ☎️
            </div>

            <h2 className="mb-2 text-lg font-bold text-purple-900">
              تماس با ما
            </h2>

            <p className="mb-4 text-sm leading-7 text-gray-600">
              شنبه تا پنجشنبه، ساعت ۹ تا ۱۸ پاسخگوی شما هستیم.
            </p>

            <a
              href="tel:02112345678"
              className="inline-flex items-center gap-2 rounded-lg bg-purple-700 px-4 py-2 text-sm font-bold text-white transition hover:bg-purple-900"
            >
              ☎ ۰۲۱-۱۲۳۴۵۶۷۸
            </a>
          </div>

        </div>

        {/* پایین صفحه */}
        <div className="mt-6 rounded-2xl bg-purple-800 px-6 py-5 text-center font-bold text-white">
          <p className="text-m">
            پاسخگویی سریع و همراهی شما، اولویت ماست.
          </p>
        </div>

      </div>
    </section>
    </>

  );
};

export default Support;