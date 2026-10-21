import Header from "../Components/Header";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
const AboutUs = () => {
  return (
    <>
      <Header />
      <Menu />
      <section dir="rtl" className=" bg-fuchsia-50 py-12 font-myfont">
        <div className="mx-auto max-w-5xl px-4">
          {/* عنوان */}
          <div className="mb-10 text-center">
            <span className="mb-3 inline-block rounded-full bg-fuchsia-100 px-4 py-1 text-sm font-medium text-fuchsia-800">
              درباره ما
            </span>

            <h1 className="text-3xl font-bold text-fuchsia-900">
              با ما بیشتر آشنا شوید
            </h1>

            <p className="mt-3 text-sm text-fuchsia-700">
              تجربه‌ای ساده، مطمئن و لذت‌بخش از خرید آنلاین
            </p>
          </div>

          {/* معرفی */}
          <div className="mb-6 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-fuchsia-100">
            <h2 className="mb-4 text-xl font-bold text-fuchsia-900">
              ما چه کاری انجام می‌دهیم؟
            </h2>

            <p className="text-sm leading-8 text-gray-600">
              ما تلاش می‌کنیم مجموعه‌ای از محصولات کاربردی و باکیفیت را در
              اختیار شما قرار دهیم تا بتوانید خریدی راحت و مطمئن داشته باشید.
              هدف ما این است که فرآیند انتخاب و خرید محصول، ساده و لذت‌بخش باشد.
            </p>

            <p className="mt-3 text-sm leading-8 text-gray-600">
              از انتخاب محصول تا ثبت سفارش و دریافت آن، تلاش می‌کنیم در کنار شما
              باشیم و تجربه خوبی از خرید آنلاین برایتان ایجاد کنیم.
            </p>
          </div>

          {/* سه ویژگی */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-fuchsia-100">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-fuchsia-800 text-xl text-white">
                ✓
              </div>

              <h3 className="mb-2 font-bold text-fuchsia-900">کیفیت</h3>

              <p className="text-sm leading-7 text-gray-500">
                تلاش می‌کنیم محصولات باکیفیت و مناسب را برای شما فراهم کنیم.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-fuchsia-100">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-fuchsia-700 text-xl text-white">
                ♡
              </div>

              <h3 className="mb-2 font-bold text-fuchsia-900">رضایت شما</h3>

              <p className="text-sm leading-7 text-gray-500">
                رضایت مشتری و تجربه خوب خرید، یکی از مهم‌ترین اهداف ماست.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-fuchsia-100">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-fuchsia-600 text-xl text-white">
                ⚡
              </div>

              <h3 className="mb-2 font-bold text-fuchsia-900">ارسال سریع</h3>

              <p className="text-sm leading-7 text-gray-500">
                سفارش‌ها را در سریع‌ترین زمان ممکن آماده و ارسال می‌کنیم.
              </p>
            </div>
          </div>

          {/* جمله پایانی */}
          <div className="mt-6 rounded-2xl bg-fuchsia-800 px-6 py-7 text-center text-white">
            <h2 className="text-lg font-bold">
              ممنون که ما را برای خرید انتخاب می‌کنید
            </h2>

            <p className="mt-2 text-sm text-fuchsia-100">
              همراهی شما باعث می‌شود هر روز برای بهتر شدن تلاش کنیم.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
