import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { GetCategory } from "../Features/MenuSlice";
import CategoryItem from "../Components/CategoryItem";

function Menu() {
  const dispatch = useDispatch();
  const { category, status, error } = useSelector((state) => state.menu);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  /*
    مسیر منوی موبایل

    null = منوی اصلی
    0 = محصولات
    id = یک دسته
  */
  const [menuStack, setMenuStack] = useState([
    {
      id: null,
      name: "منو",
    },
  ]);

  // گرفتن دسته‌های اصلی
  useEffect(() => {
    if (!category[0]) {
      dispatch(GetCategory(0));
    }
  }, [dispatch, category]);

  // گرفتن همه زیرمجموعه‌ها از قبل
  useEffect(() => {
    Object.values(category).forEach((items) => {
      if (!Array.isArray(items)) {
        return;
      }

      items.forEach((item) => {
        if (category[item.id] === undefined) {
          dispatch(GetCategory(item.id));
        }
      });
    });
  }, [category, dispatch]);

  // دسته‌های اصلی
  const categories = category[0] || [];

  // آخرین سطحی که داخل آن هستیم
  const currentLevel = menuStack[menuStack.length - 1];

  // شناسه سطح فعلی
  const currentParentId = currentLevel.id;

  // عنوان فعلی
  const currentTitle = currentLevel.name;

  // آیتم‌های سطح فعلی
  const currentItems =
    currentParentId === null ? [] : category[currentParentId] || [];

  // ورود به محصولات
  const openProducts = () => {
    setMenuStack((prev) => [
      ...prev,
      {
        id: 0,
        name: "محصولات",
      },
    ]);
  };

  // ورود به یک دسته
  const openCategory = (item) => {
    const hasChildren = category[item.id] && category[item.id].length > 0;

    if (hasChildren) {
      // اگر زیرمجموعه داره → برو سطح بعد
      if (!category[item.id]) {
        dispatch(GetCategory(item.id));
      }

      setMenuStack((prev) => [
        ...prev,
        {
          id: item.id,
          name: item.name,
        },
      ]);
    } else {
      // اگر زیرمجموعه نداره → برو صفحه محصولات و منو رو ببند
      closeMobileMenu();
      // اینجا می‌تونی از navigate استفاده کنی یا Link
    }
  };

  // برگشت یک سطح
  const goBack = () => {
    setMenuStack((prev) => {
      if (prev.length <= 1) {
        return prev;
      }

      return prev.slice(0, -1);
    });
  };

  // بستن منوی موبایل
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);

    setMenuStack([
      {
        id: null,
        name: "منو",
      },
    ]);
  };

  if (status === "failed") {
    return <p style={{ padding: "20px", color: "red" }}>خطا: {error}</p>;
  }

  return (
    <>
      {/* ================= DESKTOP ================= */}

      <nav
        dir="rtl"
        className="
          hidden md:flex
          w-full items-center gap-10
          bg-linear-to-l from-fuchsia-900 via-fuchsia-800 to-purple-900
          px-6 lg:px-10 py-3
          text-white
          shadow-[0_5px_20px_rgba(112,26,117,0.18)]
          font-myfont font-bold
        "
      >
        <div className="group relative">
          <CategoryItem
            item={{
              id: 0,
              name: "محصولات",
            }}
            rootItems={categories}
          />
        </div>

        {[
          { to: "/aboutus", label: "درباره ما" },
          { to: "/contactus", label: "تماس ما" },
          { to: "/support", label: "پشتیبانی" },
          { to: "/blog", label: "وبلاگ" },
        ].map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="
              relative py-2
              text-white/90 hover:text-white
              transition-colors duration-300
              after:absolute after:right-0 after:bottom-0
             after:h-0.5 after:w-0
              after:bg-fuchsia-200
              after:transition-all after:duration-300
              hover:after:w-full
            "
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* ================= MOBILE BUTTON ================= */}

      <div
        dir="rtl"
        className="
          md:hidden w-full
          bg-linear-to-l from-fuchsia-900 to-purple-900
          px-4 py-3
          text-white font-myfont
          shadow-md
        "
      >
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          aria-expanded={mobileMenuOpen}
          aria-label="باز کردن منو"
          className="
            flex items-center gap-3
            rounded-xl px-4 py-2
            bg-white/10 border border-white/10
            transition-all duration-300
            hover:bg-white/20
            active:scale-95
          "
        >
          <i className="fa-solid fa-bars text-lg"></i>
          <span className="font-bold">منو</span>
        </button>
      </div>

      {/* ================= OVERLAY ================= */}

      {mobileMenuOpen && (
        <div
          className="
            fixed inset-0 z-40
            bg-black/50 backdrop-blur-sm
            md:hidden
          "
          onClick={closeMobileMenu}
        ></div>
      )}

      {/* ================= MOBILE DRAWER ================= */}

      <div
        dir="rtl"
        aria-hidden={!mobileMenuOpen}
        className={`
          fixed right-0 top-0 z-50
          h-full w-80 max-w-[85%]
          bg-linear-to-b from-fuchsia-900 via-fuchsia-800 to-purple-950
          text-white shadow-2xl
          transition-transform duration-300 ease-out
          md:hidden
          ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* DRAWER HEADER */}

        <div
          className="
            flex items-center justify-between
            border-b border-white/15
            bg-white/5 backdrop-blur-md
            px-4 py-5
            font-myfont
          "
        >
          {/* بستن */}

          <button
            type="button"
            onClick={closeMobileMenu}
            aria-label="بستن منو"
            className="
              flex h-9 w-9 items-center justify-center
              rounded-full bg-white/10
              transition-all duration-300
              hover:bg-white/20 hover:rotate-90
            "
          >
            <i className="fa-solid fa-xmark text-lg"></i>
          </button>

          {/* عنوان */}

          <div className="font-myfont font-bold text-lg">{currentTitle}</div>

          {/* برگشت */}

          {menuStack.length > 1 ? (
            <button
              type="button"
              onClick={goBack}
              aria-label="بازگشت"
              className="
                flex h-9 w-9 items-center justify-center
                rounded-full bg-white/10
                transition-all duration-300
                hover:bg-white/20
              "
            >
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          ) : (
            <div className="w-9"></div>
          )}
        </div>

        {/* DRAWER CONTENT */}

        <div className="font-myfont p-4">
          {/* ================= MAIN MENU ================= */}

          {currentParentId === null && (
            <>
              <button
                type="button"
                onClick={openProducts}
                className="
                  flex w-full items-center justify-between
                  rounded-xl px-4 py-3
                  bg-white/10 border border-white/10
                  hover:bg-white/20
                  transition-all duration-300
                  font-myfont
                "
              >
                <span>محصولات</span>
                <i className="fa-solid fa-angle-left text-sm"></i>
              </button>

              {[
                { to: "/about", label: "درباره ما" },
                { to: "/contactus", label: "تماس ما" },
                { to: "/support", label: "پشتیبانی" },
                { to: "/blog", label: "وبلاگ" },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={closeMobileMenu}
                  className="
                    flex items-center
                    rounded-xl px-4 py-3 mt-2
                    text-white/90
                    hover:bg-white/10 hover:text-white
                    transition-all duration-300
                  "
                >
                  {item.label}
                </Link>
              ))}
            </>
          )}

          {/* ================= CATEGORIES ================= */}

          {currentParentId !== null && (
            <>
              {currentItems.length > 0 ? (
                currentItems.map((item) => {
                  const hasChildren =
                    category[item.id] && category[item.id].length > 0;

                  return (
                    <div
                      key={item.id}
                      className="
                        flex w-full items-center justify-between
                        rounded-xl px-4 py-3 mb-2
                        border border-white/10
                        bg-white/5
                        hover:bg-white/15
                        transition-all duration-300
                      "
                    >
                      <Link
                        to={`/products?catId=${item.id}`}
                        onClick={closeMobileMenu}
                        className="flex-1 text-right"
                      >
                        {item.name}
                      </Link>

                      {hasChildren && (
                        <button
                          type="button"
                          onClick={() => openCategory(item)}
                          aria-label={`نمایش زیرمجموعه‌های ${item.name}`}
                          className="
                            mr-3 flex h-8 w-8
                            items-center justify-center
                            rounded-full bg-white/10
                            hover:bg-white/20
                            transition-all duration-300
                          "
                        >
                          <i className="fa-solid fa-angle-left text-sm"></i>
                        </button>
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="px-3 py-4 text-fuchsia-200">
                  در حال بارگذاری...
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Menu;
