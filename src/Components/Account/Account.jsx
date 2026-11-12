
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import { useSelector } from "react-redux";
import { Link } from "react-router";

// Displays the current user's account information.
function Account() {
  const account = useSelector((state) => state.auth);

  const details = [
    {
      label: "نام",
      value: account.name,
      icon: "fa-user",
    },
    {
      label: "نام خانوادگی",
      value: account.familyname,
      icon: "fa-users",
    },
    {
      label: "نام کاربری",
      value: account.username,
      icon: "fa-at",
      ltr: true,
    },
    {
      label: "شماره موبایل",
      value: account.mobile,
      icon: "fa-mobile-screen",
      ltr: true,
    },
  ];

  return (
    <>
      <Header />
      <Menu />

      <main
        dir="rtl"
        className="
          min-h-[65vh] bg-[#faf8fc]
          px-4 py-10 font-myfont sm:py-14
        "
      >
        <div className="mx-auto max-w-4xl">
          {/* Page title */}
          <div className="mb-8 text-center">
            <div
              className="
                mx-auto mb-4 flex size-16 items-center
                justify-center rounded-2xl
                bg-linear-to-br from-purple-900 to-fuchsia-700
                text-2xl text-white
                shadow-lg shadow-purple-200
              "
            >
              <i className="fa-solid fa-user-circle" />
            </div>

            <h1 className="text-2xl font-extrabold text-purple-950 sm:text-3xl">
              اطلاعات حساب کاربری
            </h1>

            <p className="mt-3 text-sm text-gray-500">
              اطلاعات حساب خود را مشاهده و مدیریت کن
            </p>

            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-linear-to-l from-purple-800 to-fuchsia-600" />
          </div>

          {/* Account information card */}
          <div
            className="
              overflow-hidden rounded-3xl
              border border-purple-100
              bg-white shadow-lg shadow-purple-100/60
            "
          >
            <div
              className="
                flex items-center gap-3
                border-b border-purple-100
                bg-purple-50/60 px-5 py-5 sm:px-8
              "
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-white text-lg text-purple-800 shadow-sm">
                <i className="fa-solid fa-id-card" />
              </div>

              <div>
                <h2 className="font-extrabold text-purple-950">مشخصات شخصی</h2>
                <p className="mt-1 text-xs text-gray-500">
                  اطلاعات ثبت‌شده در حساب شما
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 p-5 sm:grid-cols-2 sm:gap-5 sm:p-8">
              {details.map((item, index) => (
                <div
                  key={index}
                  className="
                    flex min-w-0 items-center gap-3
                    rounded-2xl border border-purple-100
                    bg-[#fdfbff] p-4
                    transition-all duration-300
                    hover:border-fuchsia-200
                    hover:bg-purple-50/60
                    hover:shadow-sm
                  "
                >
                  <div
                    className="
                      flex size-11 shrink-0 items-center
                      justify-center rounded-xl
                      bg-purple-100 text-purple-800
                    "
                  >
                    <i className={`fa-solid ${item.icon}`} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <label className="mb-2 block text-xs font-semibold text-gray-500">
                      {item.label}
                    </label>

                    <p
                      dir={item.ltr ? "ltr" : "rtl"}
                      className={`
                        break-all text-sm font-bold text-purple-950
                        ${item.ltr ? "text-right" : "text-right"}
                      `}
                    >
                      {item.value || "ثبت نشده"}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Edit account button */}
            <div
              className="
                flex justify-center border-t border-purple-100
                bg-purple-50/40 p-5 sm:justify-end sm:px-8
              "
            >
              <Link
                to="/accountedit"
                className="
                  inline-flex min-h-12 w-full items-center
                  justify-center gap-3 rounded-xl
                  bg-linear-to-l from-purple-900 to-fuchsia-800
                  px-6 py-3 text-sm font-bold text-white
                  shadow-md shadow-purple-200/60
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:from-purple-800 hover:to-fuchsia-700
                  hover:shadow-lg hover:shadow-fuchsia-200/60
                  active:scale-95
                  sm:w-auto sm:min-w-52
                "
              >
                <i className="fa-solid fa-pen-to-square" />
                ویرایش حساب کاربری
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Account;
