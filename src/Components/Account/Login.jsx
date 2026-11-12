import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { PostLogin } from "../Features/LoginSlice";
import { useNavigate, Link, useLocation } from "react-router";
import Input from "../Components/Input";
import Button from "../Components/Button";
import { loadCart, add } from "../Features/AddToCartSlice";
import { loadFavorites, toggleFavorite } from "../Features/FavoriteSlice";

// Handles user login and pending actions.
function LoginClient() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const location = useLocation();

  const from = location.state?.from || "/";
  const pendingProduct = location.state?.pendingProduct;
  const pendingFavorite = location.state?.pendingFavorite;

  const [loginform, setLoginform] = useState({
    username: "",
    password: "",
  });

  // Updates login form fields.
  const inputchange = (e) => {
    const { name, value } = e.target;

    setLoginform((previnput) => ({
      ...previnput,
      [name]: value,
    }));
  };

  // Authenticates the user and restores pending actions.
  const inputsubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(PostLogin(loginform)).unwrap();

      const user = JSON.parse(localStorage.getItem("user") || "null");

      if (user?.id) {
        dispatch(loadCart(user.id));
        dispatch(loadFavorites(user.id));
      }

      if (pendingProduct) {
        dispatch(add(pendingProduct));
      }

      if (pendingFavorite) {
        dispatch(toggleFavorite(pendingFavorite));
      }

      navigate(from, { replace: true });
    } catch {
      alert("ورود ناموفق بود. نام کاربری و رمز عبور را بررسی کن.");
    }
  };

    // Redirects authenticated users.
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
  px-4 py-10 font-myfont
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
            px-6 py-9 text-center text-white
          "
        >
          <div className="absolute -left-10 -top-10 size-36 rounded-full border border-white/10" />
          <div className="absolute -bottom-16 -right-8 size-44 rounded-full border border-white/10" />

          <div
            className="
            relative mx-auto mb-4 flex size-16
            items-center justify-center rounded-2xl
            border border-white/20 bg-white/10
            text-3xl shadow-lg backdrop-blur-sm
          "
          >
            <i className="fa-solid fa-user-lock" />
          </div>

          <h2 className="relative text-2xl font-extrabold">
            ورود به حساب کاربری
          </h2>

          <p className="relative mt-3 text-sm leading-7 text-purple-100">
            برای ادامه خرید و مشاهده حساب کاربری وارد شو
          </p>
        </div>

        {/* فرم ورود */}
        <form onSubmit={inputsubmit} className="flex flex-col gap-5 p-6 sm:p-8">
          <div>
            <label
              htmlFor="username"
              className="mb-2 block text-sm font-bold text-purple-950"
            >
              نام کاربری
            </label>

            <Input
              type="text"
              name="username"
              value={loginform.username}
              placeholder="نام کاربری خود را وارد کن"
              onChange={inputchange}
              className="my-0"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-bold text-purple-950"
            >
              رمز عبور
            </label>

            <Input
              type="password"
              name="password"
              value={loginform.password}
              placeholder="رمز عبور خود را وارد کن"
              onChange={inputchange}
              className="my-0"
            />
          </div>

          <div className="mt-2 flex justify-center">
            <Button label="ورود به حساب" />
          </div>
          <div className="relative my-1 flex items-center">
            <div className="flex-1 border-t border-purple-100" />
            <span className="px-4 text-xs text-gray-400">یا</span>
            <div className="flex-1 border-t border-purple-100" />
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500">هنوز حساب کاربری نداری؟</p>

            <Link
              to="/register"
              state={location.state}
              className="
                mt-3 inline-flex items-center justify-center gap-2
                rounded-xl bg-purple-50 px-5 py-3
                text-sm font-bold text-purple-800
                transition-all duration-300
                hover:bg-purple-100 hover:text-fuchsia-800
              "
            >
              <i className="fa-solid fa-user-plus" />
              ایجاد حساب کاربری
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginClient;
