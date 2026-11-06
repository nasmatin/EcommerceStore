import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router";
import Input from "../Components/Input";
import Button from "../Components/Button";
import { PostRegister } from "../Features/RegisterSlice";
import { login } from "../Features/LoginSlice";
import { loadCart, add } from "../Features/AddToCartSlice";
import { loadFavorites, toggleFavorite } from "../Features/FavoriteSlice";

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

  const location = useLocation();
  const from = location.state?.from || "/";
  const pendingProduct = location.state?.pendingProduct;
  const pendingFavorite = location.state?.pendingFavorite;

  const [Registerform, setRegisterform] = useState({
    name: "",
    familyname: "",
    mobile: "",
    username: "",
    password: "",
    confirmpassword: "",
  });

  const inputchange = (e) => {
    const { name, value } = e.target;
    setRegisterform((previnput) => ({
      ...previnput,
      [name]: value,
    }));
  };

  const inputsubmit = async (e) => {
    e.preventDefault();

    if (Registerform.password !== Registerform.confirmpassword) {
      alert("پسوردها یکسان نیستند");
      return;
    }

    const registerdata = {
      name: Registerform.name,
      familyname: Registerform.familyname,
      mobile: Registerform.mobile,
      username: Registerform.username,
      password: Registerform.password,
    };

    try {
      const result = await dispatch(PostRegister(registerdata)).unwrap();
      dispatch(login(result.user));

      if (result.user?.id) {
        dispatch(loadCart(result.user.id));
        dispatch(loadFavorites(result.user.id));
      }

      if (pendingProduct) {
        dispatch(add(pendingProduct));
      }

      if (pendingFavorite) {
        dispatch(toggleFavorite(pendingFavorite));
      }

      navigate(from, { replace: true });
    } catch {
      alert("ثبت‌نام ناموفق بود. اطلاعات را بررسی کن.");
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate(from, { replace: true });
    }
  }, [isLoggedIn, navigate, from]);

  return (
    <div
      dir="rtl"
      className="
        relative flex min-h-screen w-full
        items-center justify-center overflow-hidden
        bg-linear-to-br from-purple-950
        via-purple-800 to-fuchsia-900
        px-4 py-8 font-myfont
      "
    >
      {/* تزئینات پس‌زمینه */}
      <div className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-purple-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 size-96 rounded-full bg-fuchsia-200/40 blur-3xl" />

      <div
        className="
          relative z-10 w-full max-w-md
          overflow-hidden rounded-3xl
          border border-purple-100
          bg-white shadow-2xl shadow-purple-200/40
        "
      >
        {/* سربرگ */}
        <div
          className="
            relative overflow-hidden
            bg-linear-to-br from-purple-950
            via-purple-900 to-fuchsia-800
            px-6 py-7 text-center text-white
            sm:py-8
          "
        >
          <div className="absolute -left-10 -top-10 size-36 rounded-full border border-white/10" />
          <div className="absolute -bottom-16 -right-8 size-44 rounded-full border border-white/10" />

          <div
            className="
              relative mx-auto mb-3 flex size-16
              items-center justify-center rounded-2xl
              border border-white/20 bg-white/10
              text-3xl shadow-lg backdrop-blur-sm
            "
          >
            <i className="fa-solid fa-user-plus" />
          </div>

          <h2 className="relative text-2xl font-extrabold">
            ایجاد حساب کاربری
          </h2>

          <p className="relative mt-3 text-sm leading-7 text-purple-100">
            به جمع همراهان ما بپیوند و خریدت رو شروع کن
          </p>
        </div>

        {/* فرم ثبت‌نام */}
        <form
          onSubmit={inputsubmit}
          className="flex flex-col gap-3 p-5 sm:gap-4 sm:p-7"
        >
          <div className="mb-1 flex items-center gap-2">
            <span className="h-5 w-1 rounded-full bg-fuchsia-600" />
            <span className="text-sm font-bold text-purple-950">
              اطلاعات شخصی
            </span>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-purple-950">
              نام
            </label>
            <Input
              type="text"
              name="name"
              value={Registerform.name}
              placeholder="نام خود را وارد کن"
              onChange={inputchange}
              className="my-0"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-purple-950">
              نام خانوادگی
            </label>
            <Input
              type="text"
              name="familyname"
              value={Registerform.familyname}
              placeholder="نام خانوادگی خود را وارد کن"
              onChange={inputchange}
              className="my-0"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-purple-950">
              شماره موبایل
            </label>
            <Input
              type="number"
              name="mobile"
              value={Registerform.mobile}
              placeholder="شماره موبایل خود را وارد کن"
              onChange={inputchange}
              className="my-0"
            />
          </div>

          <div className="mb-1 mt-2 flex items-center gap-2">
            <span className="h-5 w-1 rounded-full bg-fuchsia-600" />
            <span className="text-sm font-bold text-purple-950">
              اطلاعات ورود
            </span>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-purple-950">
              نام کاربری
            </label>
            <Input
              type="text"
              name="username"
              value={Registerform.username}
              placeholder="نام کاربری خود را وارد کن"
              onChange={inputchange}
              className="my-0"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-purple-950">
              رمز عبور
            </label>
            <Input
              type="password"
              name="password"
              value={Registerform.password}
              placeholder="رمز عبور خود را وارد کن"
              onChange={inputchange}
              className="my-0"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-purple-950">
              تکرار رمز عبور
            </label>
            <Input
              type="password"
              name="confirmpassword"
              value={Registerform.confirmpassword}
              placeholder="رمز عبور را دوباره وارد کن"
              onChange={inputchange}
              className="my-0"
            />
          </div>

          <div className="mt-2 flex justify-center">
            <Button label="ثبت‌نام و ایجاد حساب" />
          </div>

          <div className="relative my-1 flex items-center">
            <div className="flex-1 border-t border-purple-100" />
            <span className="px-4 text-xs text-gray-400">یا</span>
            <div className="flex-1 border-t border-purple-100" />
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500">قبلاً حساب کاربری ساختی؟</p>

            <Link
              to="/login"
              state={location.state}
              className="
                mt-3 inline-flex items-center justify-center gap-2
                rounded-xl bg-purple-50 px-5 py-3
                text-sm font-bold text-purple-800
                transition-all duration-300
                hover:bg-purple-100 hover:text-fuchsia-800
              "
            >
              <i className="fa-solid fa-right-to-bracket" />
              ورود به حساب کاربری
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
