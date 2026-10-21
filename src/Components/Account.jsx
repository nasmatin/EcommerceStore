import Header from "../Components/Header";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import { useSelector } from "react-redux";
import { Link } from "react-router";
function Account() {
  const account = useSelector((state) => state.login);
  return (
    <>
      <Header />
      <Menu />

      <div dir="rtl" className="font-myfont flex  justify-center px-4 py-8">
        <div className="w-full rounded-2xl bg-white p-5 sm:p-8">
          {/* عنوان */}
          <div className="mb-8 border-b border-gray-400 pb-5">
            <h2 className="text-xl font-bold text-fuchsia-800">
              اطلاعات حساب کاربری
            </h2>
          </div>
          {/* اطلاعات کاربر */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex flex-wrap items-center gap-3">
              <label className="font-bold text-fuchsia-900 whitespace-nowrap">
                نام:
              </label>
              <span className="font-semibold text-fuchsia-800">
                {account.name || "ثبت نشده"}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <label className="font-bold text-fuchsia-900 whitespace-nowrap">
                نام خانوادگی:
              </label>
              <span className="font-semibold text-fuchsia-800">
                {account.familyname || "ثبت نشده"}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <label className="font-bold text-fuchsia-900 whitespace-nowrap">
                نام کاربری:
              </label>
              <span dir="ltr" className="font-semibold text-fuchsia-800">
                {account.username || "ثبت نشده"}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <label className="font-bold text-fuchsia-900 whitespace-nowrap">
                شماره موبایل:
              </label>
              <span dir="ltr" className="font-semibold text-fuchsia-800">
                {account.mobile || "ثبت نشده"}
              </span>
            </div>
          </div>

          {/* ویرایش */}
          <div className="mt-8 flex justify-end">
            <Link
              to="/accountedit"
              className="
           inline-flex gap-2
          rounded-lg bg-fuchsia-800
          px-5 py-3
           font-semibold text-white
          shadow-sm
          transition-colors
          hover:bg-fuchsia-900
          focus:outline-none focus:ring-2
          focus:ring-fuchsia-500 focus:ring-offset-2
        "
            >
              ویرایش حساب کاربری
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Account;
