import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { logout } from "../Features/LoginSlice";
import { clearCurrentCart } from "../Features/AddToCartSlice";
function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const account = useSelector((state) => state.login);
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const sortMenuRef = useRef(null);

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
  return (
    <div dir="ltr" className="flex  items-center gap-4 sm:gap-5 shrink-0">
      {account.isLoggedIn ? (
        <Link
          to="/cart"
          className="flex items-center justify-center cursor-pointer"
        >
          <span className="relative inline-flex">
            <i className="fa-solid fa-cart-shopping text-fuchsia-700 text-xl sm:text-2xl"></i>

            {totalCount > 0 && (
              <span className="absolute -bottom-1 -right-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-pink-600 px-1 text-xs font-bold text-white">
                {totalCount.toLocaleString("fa-IR")}
              </span>
            )}
          </span>
        </Link>
      ) : (
        <button
          onClick={() => setShowLoginPopup(true)}
          className="flex items-center justify-center cursor-pointer"
        >
          <span className="relative inline-flex">
            <i className="fa-solid fa-cart-shopping text-fuchsia-700 text-xl sm:text-2xl"></i>

            {totalCount > 0 && (
              <span className="absolute -bottom-2 -right-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-600 px-1 text-xs font-bold text-white">
                {totalCount}
              </span>
            )}
          </span>
        </button>
      )}

      <div className="relative flex items-center justify-center">
        <button onClick={handleclickUser} className="p-2 cursor-pointer">
          <i className="fa-solid fa-user-pen text-fuchsia-700 text-xl sm:text-2xl"></i>
        </button>
        {/* آیتم‌های منو */}
        {isOpen && account.isLoggedIn && (
          <div
            ref={sortMenuRef}
            dir="rtl"
            className="absolute top-full mt-2
                        font-myfont w-66 rounded-lg bg-white shadow-lg
                        border border-fuchsia-200 z-50"
          >
            {}
            <Link
              to="/account"
              className="flex items-center w-full  text-lg font-bold border-b text-fuchsia-800 px-4 py-3 hover:bg-fuchsia-200"
              onClick={() => setIsOpen(false)}
            >
              {account.name} {account.familyname}
              <i className="mr-auto fa-solid fa-caret-left"></i>
            </Link>

            <Link
              to="/favorite"
              className="block px-4 py-3 text-fuchsia-700 font-semibold hover:bg-fuchsia-200"
              onClick={() => setIsOpen(false)}
            >
              علاقه مندی ها
            </Link>
            <Link
              to="/orders"
              className="block px-4 py-3 text-fuchsia-700 font-semibold hover:bg-fuchsia-200"
              onClick={() => setIsOpen(false)}
            >
              سفارش ها
            </Link>

            <Link
              to="/address"
              className="block px-4 py-3 text-fuchsia-700 font-semibold hover:bg-fuchsia-200"
              onClick={() => setIsOpen(false)}
            >
              آدرس‌{" "}
            </Link>
            <Link
              to="/support"
              className="block px-4 py-3 text-fuchsia-700 font-semibold hover:bg-fuchsia-200"
              onClick={() => setIsOpen(false)}
            >
              پشتیبانی{" "}
            </Link>
            <Link
              to="/"
              className="block px-4 py-3 text-fuchsia-700 font-semibold hover:bg-fuchsia-200"
              onClick={() => {
                dispatch(clearCurrentCart());
                dispatch(logout());
                setIsOpen(false);
                navigate("/", { replace: true });
              }}
            >
              خروج{" "}
            </Link>
          </div>
        )}
      </div>

      {showLoginPopup && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/40"
          onClick={() => setShowLoginPopup(false)}
        >
          <div
            dir="rtl"
            className="w-80 rounded-xl bg-white p-6 shadow-xl font-myfont"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="mb-4 text-center text-lg font-bold">
              ورود به حساب کاربری
            </h3>

            <p className="mb-5 text-center text-sm">
              برای استفاده از امکانات حساب کاربری، ابتدا وارد شوید.
            </p>

            <button
              className="w-full rounded-lg bg-fuchsia-800 px-4 py-3 text-white hover:bg-fuchsia-800"
              onClick={() => {
                setShowLoginPopup(false);
                navigate("/login");
              }}
            >
              ورود به حساب کاربری
            </button>

            <button
              className="mt-3 w-full rounded-lg border border-fuchsia-300 px-4 py-2 hover:bg-fuchsia-100"
              onClick={() => setShowLoginPopup(false)}
            >
              انصراف
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
