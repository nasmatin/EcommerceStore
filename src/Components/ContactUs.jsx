import Header from '../Components/Header'
 import Menu from '../Components/Menu'
import ContactMap from "./ContactMap";
const ContactUs = () => {
  return (
    <>
    <Header/>
    <Menu/>
        <section
      dir="rtl"
      className=" bg-purple-50 py-12"
    >
      <div className="mx-auto max-w-6xl px-4">

        {/* عنوان صفحه */}
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block rounded-full bg-purple-100 px-4 py-1 text-sm font-medium text-purple-800">
            ارتباط با ما
          </span>

          <h1 className="text-3xl font-bold text-purple-900">
            تماس با ما
          </h1>

          <p className="mt-3 text-sm text-purple-700">
            راه‌های ارتباطی با مجموعه ما
          </p>
        </div>

        {/* اطلاعات + نقشه */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

          {/* اطلاعات تماس */}
          <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-purple-100">

            <h2 className="mb-6 text-xl font-bold text-purple-900">
              اطلاعات تماس
            </h2>

            {/* آدرس */}
            <div className="mb-6 flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-800 text-lg text-white">
                📍
              </div>

              <div>
                <h3 className="mb-1 font-bold text-gray-800">
                  آدرس
                </h3>

                <p className="text-sm leading-7 text-gray-500">
                  تهران، خیابان مثال، کوچه نمونه، پلاک ۱۲
                </p>
              </div>
            </div>

            {/* شماره تماس */}
            <div className="mb-6 flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-700 text-lg text-white">
                ☎
              </div>

              <div>
                <h3 className="mb-1 font-bold text-gray-800">
                  شماره تماس
                </h3>

                <a
                  href="tel:02112345678"
                  className="text-sm font-semibold text-purple-800 hover:text-purple-900"
                >
                  ۰۲۱-۱۲۳۴۵۶۷۸
                </a>
              </div>
            </div>

            {/* پشتیبانی */}
            <div className="mb-6 flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-600 text-lg text-white">
                💬
              </div>

              <div>
                <h3 className="mb-1 font-bold text-gray-800">
                  شماره پشتیبانی
                </h3>

                <a
                  href="tel:09121234567"
                  className="text-sm font-semibold text-purple-800 hover:text-purple-900"
                >
                  ۰۹۱۲-۱۲۳۴۵۶۷
                </a>
              </div>
            </div>

            {/* ساعات کاری */}
            <div className="rounded-xl bg-purple-50 p-4">
              <h3 className="mb-2 font-bold text-purple-900">
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
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-purple-100">

            <div className="border-b border-purple-100 px-6 py-5">
              <h2 className="font-bold text-purple-900">
                موقعیت ما روی نقشه
              </h2>

              <p className="mt-1 text-xs text-gray-500">
                برای مشاهده مسیر می‌توانید روی نقشه کلیک کنید.
              </p>
            </div>

            <div className=" w-full">
<ContactMap />

            </div>

          </div>

        </div>

        {/* نوار پایانی */}
        <div className="mt-6 rounded-2xl bg-purple-800 px-6 py-6 text-center text-white">
          <h2 className="font-bold">
            خوشحالیم که با ما در ارتباط هستید 💜
          </h2>

          <p className="mt-2 text-sm text-purple-100">
            در صورت داشتن هرگونه سوال، از طریق شماره تماس یا پشتیبانی با ما در ارتباط باشید.
          </p>
        </div>

      </div>
    </section>
    </>

  );
};

export default ContactUs;
