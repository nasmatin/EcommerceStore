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
          hidden
          md:flex
          w-full
          items-center
          gap-10
          bg-fuchsia-800
          px-10
          py-3
          text-white
          shadow-sm
          font-myfont
          font-bold
        "
      >
        <CategoryItem
          item={{
            id: 0,
            name: "محصولات",
          }}
          rootItems={categories}
        />

        <Link
          to="/aboutus"
          className="transition-colors duration-200 hover:text-fuchsia-200"
        >
          درباره ما
        </Link>

        <Link
          to="/contactus"
          className="transition-colors duration-200 hover:text-fuchsia-200"
        >
          تماس ما
        </Link>

        <Link
          to="/support"
          className="transition-colors duration-200 hover:text-fuchsia-200"
        >
          پشتیبانی
        </Link>
      </nav>

      {/* ================= MOBILE BUTTON ================= */}

      <div
        dir="rtl"
        className="
          md:hidden
          w-full
          bg-fuchsia-800
          px-4
          py-3
          text-white
          font-myfont
        "
      >
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="
            flex
            items-center
            gap-2
            text-lg
          font-myfont transition-colors duration-200 hover:text-fuchsia-200"
        >
          <i className="fa-solid fa-bars"></i>

          <span>منو</span>
        </button>
      </div>

      {/* ================= OVERLAY ================= */}

      {mobileMenuOpen && (
        <div
          className="
            fixed
            inset-0
            z-40
            bg-black/40
            md:hidden
          font-myfont"
          onClick={closeMobileMenu}
        ></div>
      )}

      {/* ================= MOBILE DRAWER ================= */}

      <div
        dir="rtl"
        className={`
          fixed
          right-0
          top-0
          z-50
          h-full
          w-80
          max-w-[85%]
          bg-fuchsia-800
          text-white
          shadow-2xl
          transition-transform
          duration-300
          md:hidden

          ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* DRAWER HEADER */}

        <div
          className="
            flex
            font-myfont
            items-center
            justify-between
            border-b
            border-fuchsia-700
            px-4
            py-4
          transition-transform
duration-300"
        >
          {/* بستن */}

          <button type="button" onClick={closeMobileMenu} className="text-xl">
            <i className="fa-solid fa-xmark"></i>
          </button>

          {/* عنوان */}

          <div className="font-myfont font-bold">{currentTitle}</div>

          {/* برگشت */}

          {menuStack.length > 1 ? (
            <button type="button" onClick={goBack} className="text-xl">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          ) : (
            <div className="w-5"></div>
          )}
        </div>

        {/* DRAWER CONTENT */}

        <div className="font-myfont p-3">
          {/* ================= MAIN MENU ================= */}

          {currentParentId === null && (
            <>
              <button
                type="button"
                onClick={openProducts}
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  rounded-md
                  px-3
                  py-3
                  hover:bg-fuchsia-700
               font-myfont "
              >
                <span>محصولات</span>

                <i className="fa-solid fa-angle-left text-sm"></i>
              </button>

              <Link
                to="/about"
                onClick={closeMobileMenu}
                className="
                  block
                  rounded-md
                  px-3
                  py-3
                  hover:bg-fuchsia-700
                "
              >
                درباره ما
              </Link>

              <Link
                to="/contactus"
                onClick={closeMobileMenu}
                className="
                  block
                  rounded-md
                  px-3
                  py-3
                  hover:bg-fuchsia-700
                "
              >
                تماس ما
              </Link>

              <Link
                to="/support"
                onClick={closeMobileMenu}
                className="
                  block
                  rounded-md
                  px-3
                  py-3
                  hover:bg-fuchsia-700
                "
              >
                پشتیبانی
              </Link>
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
                      className="flex w-full items-center justify-between rounded-md px-3 py-3 hover:bg-fuchsia-700"
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
                          className="mr-3"
                          aria-label={`نمایش زیرمجموعه‌های ${item.name}`}
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
