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

  dispatch(updateUserInfo(formdata));

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
      dispatch(updateUserInfo(formdata)); // اینجا
      navigate("/account", { replace: true });
    }
  };

  return (
    <>
      <Header />
      <Menu />

      <div
        dir="rtl"
        className="font-myfont flex justify-center bg-fuchsia-100 px-4 py-8"
      >
        <form
          onSubmit={handleSubmit}
          className="w-full rounded-2xl p-5 transition-shadow duration-300 hover:shadow-lg sm:p-8"
        >
          {/* عنوان */}
          <div className="mb-8 border-b border-gray-400 pb-5">
            <h2 className="text-xl font-bold text-gray-800 transition-colors duration-300 hover:text-fuchsia-800">
              ویرایش حساب کاربری
            </h2>
          </div>

          {/* اطلاعات کاربر */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="flex flex-wrap items-center gap-3">
              <label className="whitespace-nowrap font-bold text-black">
                نام:
              </label>
              <Input
                type="text"
                name="name"
                value={formdata.name}
                placeholder="نام "
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <label className="whitespace-nowrap font-bold text-black">
                نام خانوادگی:
              </label>
              <Input
                type="text"
                name="familyname"
                value={formdata.familyname}
                placeholder="نام خانوادگی"
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <label className="whitespace-nowrap font-bold text-black">
                نام کاربری:
              </label>
              <Input
                type="text"
                name="username"
                placeholder="نام کاربری"
                value={formdata.username}
                readOnly
                className="cursor-not-allowed bg-gray-100 text-gray-400"
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <label className="whitespace-nowrap font-bold text-black">
                شماره موبایل:
              </label>
              <Input
                type="number"
                name="mobile"
                value={formdata.mobile}
                placeholder="شماره موبایل"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* ثبت تغییرات */}
          <div className="mt-8 flex justify-center">
            <div className="transition-transform duration-300 hover:scale-[1.03] active:scale-95">
              <Button label="ثبت تغییرات"></Button>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default AccountEdit;
