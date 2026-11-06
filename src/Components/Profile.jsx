import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router";
import { logout } from "../Features/LoginSlice";
import { clearCurrentCart } from "../Features/AddToCartSlice";


function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const account = useSelector((state) => state.login);
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const sortMenuRef = useRef(null);
  const location = useLocation();

  const handleclickUser = () => {
    if (account.isLoggedIn) {
      setIsOpen(!isOpen);
    } else {
      setShowLoginPopup(true);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sortMenuRef.current && !sortMenuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const totalCount = useSelector((state) => state.cart.totalCount);

  const menuItems = [
    {
      to: "/favorite",
      label: "علاقه‌مندی‌ها",
      icon: "fa-heart",
    },
    {
      to: "/orders",
      label: "سفارش‌های من",
      icon: "fa-box-open",
    },
    {
      to: "/address",
      label: "آدرس‌های من",
      icon: "fa-location-dot",
    },
    {
      to: "/support",
      label: "پشتیبانی",
      icon: "fa-headset",
    },
  ];

  return (
    <div dir="ltr" className="flex shrink-0 items-center gap-4 sm:gap-5">
      {/* سبد خرید */}
      {account.isLoggedIn ? (
        <Link
          to="/cart"
          aria-label="سبد خرید"
          className="
            group flex h-10 w-10 items-center justify-center
            rounded-xl text-fuchsia-800
            transition-all duration-200
            hover:bg-fuchsia-50 hover:text-fuchsia-600
            sm:h-11 sm:w-11
          "
        >
          <span className="relative inline-flex">
            <i className="fa-solid fa-cart-shopping text-xl transition-transform duration-200 group-hover:scale-110 sm:text-2xl"></i>

            {totalCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-fuchsia-600 px-1 text-[10px] font-bold text-white">
                {totalCount.toLocaleString("fa-IR")}
              </span>
            )}
          </span>
        </Link>
      ) : (
        <button
          onClick={() => setShowLoginPopup(true)}
          aria-label="سبد خرید"
          className="
            group flex h-10 w-10 cursor-pointer items-center justify-center
            rounded-xl text-fuchsia-800
            transition-all duration-200
            hover:bg-fuchsia-50 hover:text-fuchsia-600
            sm:h-11 sm:w-11
          "
        >
          <span className="relative inline-flex">
            <i className="fa-solid fa-cart-shopping text-xl transition-transform duration-200 group-hover:scale-110 sm:text-2xl"></i>

            {totalCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-fuchsia-600 px-1 text-[10px] font-bold text-white">
                {totalCount.toLocaleString("fa-IR")}
              </span>
            )}
          </span>
        </button>
      )}

      {/* پروفایل کاربر */}
      <div className="relative flex items-center justify-center">
        <button
          onClick={handleclickUser}
          aria-label="حساب کاربری"
          aria-expanded={isOpen}
          className="
            flex h-10 w-10 cursor-pointer items-center justify-center
            rounded-xl text-fuchsia-800
            transition-all duration-200
            hover:bg-fuchsia-50 hover:text-fuchsia-600
            sm:h-11 sm:w-11
          "
        >
          <i className="fa-solid fa-user-pen text-xl sm:text-2xl"></i>
        </button>

        {/* آیتم‌های منو */}
        {isOpen && account.isLoggedIn && (
          <div
            ref={sortMenuRef}
            dir="rtl"
            className="
              absolute left-0 top-full z-50 mt-3
              w-64 max-w-[calc(100vw-24px)]
              overflow-hidden rounded-2xl
              border border-purple-100 bg-white
              font-myfont shadow-xl shadow-purple-200/40
              animate-in fade-in slide-in-from-top-2 duration-200
            "
          >
            {/* اطلاعات کاربر */}
            <Link
              to="/account"
              onClick={() => setIsOpen(false)}
              className="
                flex items-center gap-3
                bg-linear-to-l from-purple-900 to-fuchsia-800
                px-4 py-4 text-white
                transition-all duration-200
                hover:from-purple-800 hover:to-fuchsia-700
              "
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 text-xl">
                <i className="fa-solid fa-user"></i>
              </span>

              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-bold">
                  {account.name} {account.familyname}
                </span>
                <span className="mt-1 block text-xs text-purple-100">
                  حساب کاربری من
                </span>
              </span>

              <i className="fa-solid fa-chevron-left text-xs text-purple-100"></i>
            </Link>

            {/* لینک‌های حساب */}
            <div className="p-2">
              {menuItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className="
                    flex items-center gap-3 rounded-xl
                    px-3 py-3 text-sm font-semibold text-purple-900
                    transition-all duration-200
                    hover:bg-fuchsia-50 hover:text-fuchsia-700
                  "
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-50 text-fuchsia-700">
                    <i className={`fa-solid ${item.icon}`}></i>
                  </span>
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mx-3 border-t border-purple-100"></div>

            {/* خروج */}
            <button
              onClick={() => {
                dispatch(clearCurrentCart());
                dispatch(logout());
                setIsOpen(false);
                navigate("/", { replace: true });
              }}
              className="
                flex w-full cursor-pointer items-center gap-3
                px-5 py-4 text-sm font-bold text-red-500
                transition-colors duration-200
                hover:bg-red-50
              "
            >
              <i className="fa-solid fa-right-from-bracket"></i>
              خروج از حساب کاربری
            </button>
          </div>
        )}
      </div>

      {/* پنجره ورود */}
      {showLoginPopup && (
        <div
          className="
  fixed inset-0 z-index: 9999;
  flex items-center justify-center
  bg-purple-950/40 p-4 backdrop-blur-sm
  animate-in fade-in duration-200
"
          onClick={() => setShowLoginPopup(false)}
        >
          <div
            dir="rtl"
            className="
              w-full max-w-sm overflow-hidden rounded-3xl
              border border-purple-100 bg-white
              font-myfont shadow-2xl shadow-purple-950/20
              animate-in fade-in zoom-in-95 duration-200
            "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative overflow-hidden bg-linear-to-l from-purple-900 to-fuchsia-800 px-6 py-7 text-center text-white">
              <div className="absolute -left-8 -top-10 h-28 w-28 rounded-full bg-white/10 blur-xl"></div>

              <div className="relative mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-2xl">
                <i className="fa-solid fa-user-lock"></i>
              </div>

              <h3 className="relative text-lg font-bold">
                ورود به حساب کاربری
              </h3>

              <p className="relative mt-2 text-xs text-purple-100">
                برای دسترسی به امکانات فروشگاه وارد حساب خود شوید.
              </p>
            </div>

            <div className="p-6">
              <button
                className="
                  w-full cursor-pointer rounded-xl
                  bg-linear-to-l from-purple-900 to-fuchsia-800
                  px-4 py-3.5 text-sm font-bold text-white
                  shadow-md shadow-purple-200/60
                  transition-all duration-200
                  hover:-translate-y-0.5 hover:shadow-lg
                  active:scale-95
                "
                onClick={() => {
                  setShowLoginPopup(false);
                  navigate("/login", {
                    state: {
                      from: location.pathname + location.search,
                    },
                  });
                }}
              >
                ورود به حساب کاربری
              </button>

              <button
                className="
                  mt-3 w-full cursor-pointer rounded-xl
                  border border-purple-200 bg-white
                  px-4 py-3 text-sm font-semibold text-purple-800
                  transition-all duration-200
                  hover:border-fuchsia-300 hover:bg-fuchsia-50
                "
                onClick={() => setShowLoginPopup(false)}
              >
                انصراف
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
