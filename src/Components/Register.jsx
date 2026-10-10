import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router";
import Input from "../Components/Input";
import Button from "../Components/Button";
import Login from "../Components/Login";
import { PostRegister } from "../Features/RegisterSlice";
import { login } from "../Features/LoginSlice";
function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.register.isLoggedIn);

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
  try{
    const result = await dispatch(PostRegister(registerdata)).unwrap();
    dispatch(login(result.user));
navigate("/", { replace: true });
  }
 catch{
  alert("ثبت‌نام ناموفق بود. اطلاعات را بررسی کن.");
 }
  };
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/", { replace: true });
    }
  }, [isLoggedIn, navigate]);
  return (
    <div
      dir="rtl"
      className="
      font-['Digi_Hamishe_Regular']
      min-h-screen
      flex
      items-center
      justify-center
      bg-[#713f7a]
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
        bg-[rgb(212,137,219)]
        gap-4
        shadow-lg
      "
      >
        <h2 className="text-xl font-bold text-center mb-2"> ثبت نام </h2>

        <Input
          type="text"
          name="name"
          value={Registerform.name}
          placeholder="نام "
          onChange={inputchange}
        />
<Input
          type="text"
          name="familyname"
          value={Registerform.familyname}
          placeholder="نام خانوادگی "
          onChange={inputchange}
        />
        <Input
          type="text"
          name="username"
          value={Registerform.username}
          placeholder="نام کاربری  "
          onChange={inputchange}
        />
        <Input
          type="number"
          name="mobile"
          value={Registerform.mobile}
          placeholder="موبایل  "
          onChange={inputchange}
        />
        
        <Input
          type="password"
          name="password"
          value={Registerform.password}
          placeholder="پسورد"
          onChange={inputchange}
        />
<Input
  type="password"
  name="confirmpassword"
  value={Registerform.confirmpassword}
  placeholder="تکرار پسورد"
  onChange={inputchange}
/>

        <Button label="ثبت نام" />
     
        <Link
          to="/login"
          element={<Login />}
          className="text-purple-800 text-l font-semibold text-center mb-2"
        >
          ورود به حساب کاربری
        </Link>
      </form>
    </div>
  );
}
export default Register;
