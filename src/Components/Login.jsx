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
      min-h-screen
      flex
      items-center
      justify-center
      bg-fuchsia-900
      px-4
    "
    >
      <form
        onSubmit={inputsubmit}
        className="
        font-['Digi_Hamishe_Regular']
        w-full
        max-w-sm
        min-h-sm
        flex
        flex-col
        justify-center
        p-8
        rounded-2xl
        bg-fuchsia-300
        gap-4
        shadow-lg
      "
      >
        <h2 className="text-xl font-bold text-center mb-2">ورود به سیستم</h2>

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
        <h3 className="text-l font-semibold text-center">
          هنوز حساب کاربری ندارید؟
        </h3>
        <Link
          to="/register"
          element={<Register />}
          className="text-fuchsia-800 text-l font-semibold text-center mb-2"
        >
          ایجاد حساب کاربری
        </Link>
      </form>
    </div>
  );
}
export default LoginClient;
