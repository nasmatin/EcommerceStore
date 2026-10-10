import Header from "../Components/Header";
import Menu from "../Components/Menu";
import Footer from "./Footer";
import { useDispatch,useSelector } from "react-redux";
import { useState } from "react";
import Input from "../Components/Input";
import Button from "./Button";
import { PutAccountEdit } from "../Features/AccountSlice";
import { updateUserInfo } from "../Features/LoginSlice";
import { useNavigate } from "react-router";
function AccountEdit() {
  const account = useSelector((state) => state.login);
const dispatch=useDispatch();
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
    console.log("شناسه کاربر پیدا نشد");
    return;
  }
  console.log("FORM DATA:", formdata);
  console.log("USER ID:", account.id);
  const result = await dispatch(
    PutAccountEdit({
      id:id,
      formdata:formdata,
    })
  );
  console.log("RESULT:", result);
  if (PutAccountEdit.fulfilled.match(result)) {
      dispatch(updateUserInfo(formdata)); // اینجا
    console.log("ویرایش موفق بود");
 navigate("/account", { replace: true });
  }

};

  return (
    <>
      <Header />
      <Menu />

      <div dir="rtl" className="font-myfont flex justify-center px-4 py-8">
        <form
          onSubmit={handleSubmit}
          className="
            w-full
            rounded-2xl
            bg-white
            p-5 sm:p-8
          "
        >
          {/* عنوان */}
          <div className="mb-8 border-b border-gray-400 pb-5">
            <h2 className="text-xl font-bold text-gray-800">
              ویرایش حساب کاربری
            </h2>
          </div>

          {/* اطلاعات کاربر */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex flex-wrap items-center gap-3">
              <label className="font-bold text-black whitespace-nowrap">
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
              <label className="font-bold text-black whitespace-nowrap">
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
              <label className="font-bold text-black whitespace-nowrap">
                نام کاربری:
              </label>
              <Input
                type="text"
                name="username"
                placeholder="نام کاربری"
                value={formdata.username}
             readOnly
  className="bg-gray-100 text-gray-400 cursor-not-allowed"
                onChange={handleChange}
             />
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <label className="font-bold text-black whitespace-nowrap">
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
            <Button label="ثبت تغییرات">
            </Button>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default AccountEdit;
