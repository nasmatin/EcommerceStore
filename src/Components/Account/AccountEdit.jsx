import Header from "../Components/Header";
import Menu from "../Components/Menu";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Input from "../Components/Input";
import Button from "./Button";
import { PutAccountEdit } from "../Features/AccountSlice";
import { updateUserInfo } from "../Features/LoginSlice";
import { useNavigate } from "react-router";

// Handles user account information updates.
function AccountEdit() {
  const account = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formdata, setFormData] = useState({
    name: account.name || "",
    familyname: account.familyname || "",
    mobile: account.mobile || "",
    username: account.username || "",
  });

  // Updates form fields when their values change.
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

   // Submits updated account information.
  const handleSubmit = async (e) => {
    e.preventDefault();

    const id = account.id;

    if (!id) {
      return;
    }

    const result = await dispatch(
      PutAccountEdit({
        id: id,
        formdata: formdata,
      })
    );

    if (PutAccountEdit.fulfilled.match(result)) {
      dispatch(updateUserInfo(formdata));
      navigate("/account", { replace: true });
    }
  };

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
          {/* عنوان صفحه */}
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
              <i className="fa-solid fa-user-pen" />
            </div>

            <h1 className="text-2xl font-extrabold text-purple-950 sm:text-3xl">
              ویرایش حساب کاربری
            </h1>

            <p className="mt-3 text-sm text-gray-500">
              اطلاعات حساب کاربری خود را ویرایش کن
            </p>

            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-linear-to-l from-purple-800 to-fuchsia-600" />
          </div>

          {/* فرم ویرایش */}
          <form
            onSubmit={handleSubmit}
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
                  اطلاعات موردنظر را تغییر بده
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 sm:gap-6 sm:p-8">
              {/* نام */}
              <div className="min-w-0">
                <label className="mb-2 block text-sm font-bold text-purple-950">
                  نام
                </label>

                <Input
                  type="text"
                  name="name"
                  value={formdata.name}
                  placeholder="نام خود را وارد کن"
                  onChange={handleChange}
                  className="my-0"
                />
              </div>

              {/* نام خانوادگی */}
              <div className="min-w-0">
                <label className="mb-2 block text-sm font-bold text-purple-950">
                  نام خانوادگی
                </label>

                <Input
                  type="text"
                  name="familyname"
                  value={formdata.familyname}
                  placeholder="نام خانوادگی خود را وارد کن"
                  onChange={handleChange}
                  className="my-0"
                />
              </div>

              {/* نام کاربری */}
              <div className="min-w-0">
                <label className="mb-2 block text-sm font-bold text-purple-950">
                  نام کاربری
                </label>

                <Input
                  type="text"
                  name="username"
                  value={formdata.username}
                  readOnly
                  placeholder="نام کاربری"
                  className="my-0 cursor-not-allowed bg-purple-50 text-gray-400"
                />

                <p className="mt-2 text-xs text-gray-400">
                  نام کاربری قابل تغییر نیست.
                </p>
              </div>

              {/* موبایل */}
              <div className="min-w-0">
                <label className="mb-2 block text-sm font-bold text-purple-950">
                  شماره موبایل
                </label>

                <Input
                  type="number"
                  name="mobile"
                  value={formdata.mobile}
                  placeholder="شماره موبایل خود را وارد کن"
                  onChange={handleChange}
                  className="my-0"
                />
              </div>
            </div>

            {/* دکمه ثبت */}

            <div
              className="
  grid grid-cols-1 gap-3
  border-t border-purple-100
  bg-purple-50/40 p-5
  sm:grid-cols-2 sm:justify-end sm:px-8
"
            >
              <button
                type="button"
                onClick={() => navigate("/account")}
                className="
      flex min-h-12 w-full items-center justify-center
      rounded-xl border border-purple-200
      bg-white px-6 py-3
      text-sm font-bold text-purple-800
      transition-all duration-300
      hover:border-fuchsia-300 hover:bg-purple-50
    "
              >
                انصراف
              </button>

              <div className="w-full">
                <Button label="ثبت تغییرات" />
              </div>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default AccountEdit;
