import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { PostLogin } from "../Features/LoginSlice";
import { useNavigate, Link, useLocation } from "react-router";
import Input from "../Components/Input";
import Button from "../Components/Button";
import Register from "../Components/Register";
import { loadCart, add } from "../Features/AddToCartSlice";

function LoginClient() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const location = useLocation();
  const from = location.state?.from || "/";
  const pendingProduct = location.state?.pendingProduct;

  const [loginform, setLoginform] = useState({
    username: "",
    password: "",
  });

  //set inputchange for input
  const inputchange = (e) => {
    const { name, value } = e.target;
    setLoginform((previnput) => ({
      ...previnput,
      [name]: value,
    }));
  };

  const inputsubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(PostLogin(loginform)).unwrap();
      const user = JSON.parse(localStorage.getItem("user") || "null");

      if (user?.id) {
        dispatch(loadCart(user.id));
      }

      if (pendingProduct) {
        dispatch(add(pendingProduct));
      }

      navigate(from, { replace: true });
    } catch {
      alert("ورود ناموفق بود. نام کاربری و رمز عبور را بررسی کن.");
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
        font-myfont
        flex
        min-h-screen
        items-center
        justify-center
        bg-fuchsia-900
        px-4
      "
    >
      <form
        onSubmit={inputsubmit}
        className="
          flex
          min-h-sm
          w-full
          max-w-sm
          flex-col
          justify-center
          gap-4
          rounded-2xl
          bg-fuchsia-300
          p-8
          font-['Digi_Hamishe_Regular']
          shadow-lg
          transition-all
          duration-300
          ease-in-out
          hover:shadow-2xl
        "
      >
        <h2 className="mb-2 text-center text-xl font-bold transition-colors duration-300 hover:text-fuchsia-800">
          ورود به سیستم
        </h2>

        <Input
          type="text"
          name="username"
          value={loginform.username}
          placeholder="نام کاربری"
          onChange={inputchange}
        />

        <Input
          type="password"
          name="password"
          value={loginform.password}
          placeholder="پسورد"
          onChange={inputchange}
        />

        <Button label="ورود" />

        <h3 className="text-center text-l font-semibold">
          هنوز حساب کاربری ندارید؟
        </h3>

        <Link
          to="/register"
          element={<Register />}
          className="mt-2 text-center text-l font-semibold text-fuchsia-800 transition-all duration-300 hover:-translate-y-0.5 hover:text-fuchsia-950 hover:underline"
        >
          ایجاد حساب کاربری
        </Link>
      </form>
    </div>
  );
}

export default LoginClient;
