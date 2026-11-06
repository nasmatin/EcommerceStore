import { Fragment, useEffect, useState } from "react";
import Gallery from "../Components/Gallery";
//import Rating from "../Components/Rating";
import FavoriteButton from "../Components/FavoriteButton";
import Button from "../Components/Button";
import ShareButton from "../Components/ShareButton";
//import ProductReview from "../Components/Reviews";
//import RelatedProduct from "../Components/RelatedProduct";
import ArrowIcon from "../Components/ArrowIcon";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useSearchParams, useLocation } from "react-router";
import { GetProductDetail } from "../Features/ProductDetailSlice";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import Footer from "./Footer";
import { add, decrement, increment } from "../Features/AddToCartSlice";
import { loadFavorites, toggleFavorite } from "../Features/FavoriteSlice";

function ProductDetail() {
  const [showDescription, setShowDescription] = useState(false);
  const [showUsage, setShowUsage] = useState(false);
  const [loginAction, setLoginAction] = useState(null);

  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const Id = Number(searchParams.get("id"));
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const account = useSelector((state) => state.login);
  const user = JSON.parse(localStorage.getItem("user") || "null");
  const userId = user?.id ?? null;
  const [showCartPopup, setShowCartPopup] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const favorites = useSelector((state) => state.favorite.items);

  // بارگذاری علاقه‌مندی‌های کاربر پس از ورود
  useEffect(() => {
    if (!account.isLoggedIn) return;

    const user = JSON.parse(localStorage.getItem("user") || "null");
    if (user?.id) {
      dispatch(loadFavorites(user.id));
    }
  }, [dispatch, account.isLoggedIn]);

  const [isLoading, setIsLoading] = useState(false);
  const [loadError, setLoadError] = useState(false);

  const isFavorite =
    Array.isArray(favorites) &&
    favorites.some((item) => Number(item.id) === Number(Id));

  const existingInCart = cartItems.find((item) => item.id === Id);

  const quantity = existingInCart ? existingInCart.quantity : selectedQuantity;

  const ProDetails = useSelector(
    (state) => state.productdetail?.productdetails?.[Id]
  );

  const categories = useSelector((state) => state.menu.category);

  const allCategories = Object.values(categories).flat();

  useEffect(() => {
    if (!Id || ProDetails !== undefined) {
      return;
    }

    let isActive = true;
    // setIsLoading(true);
    // setLoadError(false);
    dispatch(
      GetProductDetail({
        id: Id,
        userId: userId,
      })
    )
      .unwrap()
      .catch(() => {
        if (isActive) {
          setLoadError(true);
        }
      })
      .finally(() => {
        if (isActive) {
          setIsLoading(false);
        }
      });

    return () => {
      isActive = false;
    };
  }, [dispatch, Id, userId, ProDetails]);

  const pdetail = ProDetails ?? {};

  const handleclick = () => {
    if (!account.isLoggedIn) {
      setLoginAction("cart");
      setShowLoginPopup(true);
      return;
    }

    if (account.isLoggedIn) {
      dispatch(
        add({
          id: pdetail.id,
          name: pdetail.name,
          price: pdetail.price,
          quantity: quantity,
          stock: pdetail.quantity,
          image: pdetail.img1,
          link: `/products/productdetail?id=${pdetail.id}`,
        })
      );

      setShowCartPopup(true);
    }
  };

  const handlefavorite = () => {
    if (!pdetail.id) return;

    const product = {
      id: pdetail.id,
      title: pdetail.name,
      price: pdetail.price,
      image: pdetail.img1,
      link: `/products/productdetail?id=${pdetail.id}`,
    };

    if (!account.isLoggedIn) {
      setLoginAction("favorite");
      setShowLoginPopup(true);
      return;
    }

    dispatch(toggleFavorite(product));
  };

  const closeLoginPopup = () => {
    setShowLoginPopup(false);
    setLoginAction(null);
  };

  const handlepopupclick = () => {
    setShowLoginPopup(false);

    const state = {
      from: location.pathname + location.search,
    };

    if (loginAction === "cart") {
      state.pendingProduct = {
        id: pdetail.id,
        name: pdetail.name,
        price: pdetail.price,
        quantity: quantity,
        stock: pdetail.quantity,
        image: pdetail.img1,
        link: `/products/productdetail?id=${pdetail.id}`,
      };
    }

    if (loginAction === "favorite") {
      state.pendingFavorite = {
        id: pdetail.id,
        title: pdetail.name,
        price: pdetail.price,
        image: pdetail.img1,
        link: `/products/productdetail?id=${pdetail.id}`,
      };
    }

    navigate("/login", { state });
  };

  const getCategoryPath = (categoryId) => {
    const path = [];
    let currentId = categoryId;

    while (currentId != null) {
      const category = allCategories.find((item) => item.id === currentId);

      if (!category) break;

      path.unshift(category);
      currentId = category.parentid;
    }

    return path;
  };

  const categoryPath = getCategoryPath(pdetail.catid);

  const formatPrice = (price) => Math.round(price).toLocaleString("fa-IR");

  const descriptionCardClass =
    "rounded-2xl border border-purple-100 bg-white p-5 shadow-sm shadow-purple-100/40 transition-all duration-300 hover:-translate-y-1 hover:border-fuchsia-200 hover:shadow-lg hover:shadow-purple-100/60 sm:p-6";

  const toggleButtonClass =
    "mt-4 flex w-full items-center justify-end gap-2 text-sm font-bold text-fuchsia-800 transition-all duration-200 hover:gap-3 hover:text-purple-950";

  if (!Id) {
    return (
      <>
        <Header />
        <Menu />
        <main
          dir="rtl"
          className="flex min-h-[60vh] flex-col items-center justify-center gap-4 bg-[#faf8fc] px-4 font-myfont"
        >
          <div className="flex size-16 items-center justify-center rounded-2xl bg-red-50 text-red-500">
            <i className="fa-solid fa-triangle-exclamation text-2xl" />
          </div>
          <p className="text-sm font-bold text-red-600">
            شناسه محصول معتبر نیست.
          </p>
        </main>
        <Footer />
      </>
    );
  }

  if (isLoading) {
    return (
      <>
        <Header />
        <Menu />
        <main
          dir="rtl"
          className="flex min-h-[60vh] items-center justify-center bg-[#faf8fc]"
        >
          <div className="flex flex-col items-center gap-4 rounded-3xl border border-purple-100 bg-white px-12 py-10 shadow-sm">
            <div
              role="status"
              aria-label="در حال بارگذاری محصول"
              className="size-11 animate-spin rounded-full border-4 border-purple-100 border-t-fuchsia-700"
            />
            <p className="text-sm font-medium text-gray-500">
              در حال دریافت اطلاعات محصول...
            </p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (loadError) {
    return (
      <>
        <Header />
        <Menu />
        <main
          dir="rtl"
          className="flex min-h-[60vh] flex-col items-center justify-center gap-5 bg-[#faf8fc] px-4 font-myfont"
        >
          <div className="flex size-16 items-center justify-center rounded-2xl bg-red-50 text-red-500">
            <i className="fa-solid fa-triangle-exclamation text-2xl" />
          </div>
          <p className="text-center text-sm text-red-600">
            دریافت اطلاعات محصول با خطا مواجه شد.
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="rounded-xl bg-linear-to-l from-purple-900 to-fuchsia-800 px-6 py-3 text-sm font-bold text-white shadow-md shadow-purple-200/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-95"
          >
            <i className="fa-solid fa-rotate-left ml-2" />
            تلاش مجدد
          </button>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <Menu />

      <main
        dir="rtl"
        className="min-h-screen bg-[#faf8fc] py-6 font-myfont sm:py-9"
      >
        <div className="mx-auto w-full max-w-7xl px-3 sm:px-6 lg:px-8">
          {/* مسیر دسته‌بندی */}
          <div className="mb-6 flex flex-wrap items-center gap-2 rounded-2xl border border-purple-100 bg-white px-4 py-3 text-xs text-gray-500 shadow-sm sm:text-sm">
            <span
              className="cursor-pointer transition-colors hover:text-fuchsia-700"
              onClick={() => navigate("/")}
            >
              خانه
            </span>

            <i className="fa-solid fa-chevron-left text-[10px] text-purple-300" />

            <span>محصولات</span>

            {categoryPath.map((category) => (
              <Fragment key={category.id}>
                <i className="fa-solid fa-chevron-left text-[10px] text-purple-300" />
                <span
                  onClick={() => navigate(`/products?catId=${category.id}`)}
                  className="cursor-pointer transition-colors hover:text-fuchsia-700"
                >
                  {category.name}
                </span>
              </Fragment>
            ))}

            <i className="fa-solid fa-chevron-left text-[10px] text-purple-300" />

            <span className="max-w-full truncate font-bold text-purple-800">
              {pdetail.name}
            </span>
          </div>

          {/* گالری و اطلاعات خرید */}
          <section className="grid grid-cols-1 gap-6 overflow-hidden rounded-3xl border border-purple-100 bg-white p-3 shadow-md shadow-purple-100/50 sm:gap-8 sm:p-5 lg:grid-cols-2 lg:gap-10 lg:p-7">
            {/* گالری تصاویر */}
            <div className="min-w-0 overflow-hidden rounded-2xl border border-purple-100 bg-linear-to-br from-purple-50 to-fuchsia-50 p-2 sm:p-4 [&_img:first-of-type]:transition-transform [&_img:first-of-type]:duration-500 [&_img:first-of-type]:ease-out [&_img:first-of-type:hover]:scale-105">
              <Gallery
                images={[
                  pdetail.img1,
                  pdetail.img2,
                  pdetail.img3,
                  pdetail.img4,
                ]}
                productName={pdetail.name}
              />
            </div>

            {/* اطلاعات محصول */}
            <div className="flex min-w-0 flex-col px-1 py-2 sm:px-2 sm:py-3">
              {/* نام و برند */}
              <div>
                <span className="inline-flex items-center gap-2 rounded-lg bg-purple-50 px-3 py-1.5 text-[11px] font-bold text-purple-700">
                  <i className="fa-solid fa-sparkles text-fuchsia-600" />
                  مشخصات محصول
                </span>

                <h1 className="mt-4 text-lg font-black leading-9 text-purple-950 sm:text-2xl">
                  {pdetail.name}
                </h1>

                <p className="mt-2 text-sm font-medium text-gray-400">
                  {pdetail.brand}
                </p>
              </div>

              {/* وضعیت موجودی */}
              <div className="mt-5">
                <span
                  className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-bold ${
                    pdetail.quantity > 0
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-red-50 text-red-600"
                  }`}
                >
                  <span
                    className={`size-2 rounded-full ${
                      pdetail.quantity > 0 ? "bg-emerald-500" : "bg-red-500"
                    }`}
                  />
                  {pdetail.quantity > 0 ? "موجود در انبار" : "ناموجود"}
                </span>
              </div>

              <div className="my-6 border-t border-dashed border-purple-200" />

              {/* قیمت و تخفیف */}
              <div className="rounded-2xl bg-linear-to-l from-purple-50 to-fuchsia-50 p-4 sm:p-5">
                {pdetail.sale > 0 && (
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span className="text-sm font-medium text-gray-400 line-through">
                      {formatPrice(pdetail.price)} تومان
                    </span>

                    <span className="rounded-lg bg-red-500 px-3 py-1 text-xs font-extrabold text-white shadow-sm">
                      {formatPrice(pdetail.sale)}٪ تخفیف
                    </span>
                  </div>
                )}

                <p className="mb-2 text-xs font-medium text-gray-500">
                  قیمت محصول
                </p>

                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-2xl font-black text-purple-950 sm:text-3xl">
                    {formatPrice(pdetail.price)}
                  </span>
                  <span className="text-sm font-medium text-gray-500">
                    تومان
                  </span>
                </div>
              </div>

              {/* خرید، علاقه‌مندی و اشتراک‌گذاری */}
              <div className="mt-6 flex flex-col gap-5">
                {/* انتخاب تعداد */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-sm font-bold text-purple-950">
                    تعداد:
                  </span>

                  <div className="inline-flex items-center overflow-hidden rounded-xl border border-purple-200 bg-white shadow-sm">
                    <button
                      type="button"
                      disabled={quantity >= 5}
                      onClick={() => {
                        if (existingInCart) {
                          dispatch(increment(Id));
                        } else {
                          setSelectedQuantity((q) => Math.min(q + 1, 5));
                        }
                      }}
                      aria-label="افزایش تعداد"
                      className="flex size-10 items-center justify-center text-lg font-bold text-purple-800 transition-all hover:bg-purple-50 hover:text-fuchsia-700 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      +
                    </button>

                    <span className="flex h-10 min-w-12 items-center justify-center border-x border-purple-100 px-3 text-sm font-extrabold text-purple-950">
                      {quantity}
                    </span>

                    <button
                      type="button"
                      disabled={quantity <= 1}
                      onClick={() => {
                        if (existingInCart) {
                          dispatch(decrement(Id));
                        } else {
                          setSelectedQuantity((q) => Math.max(1, q - 1));
                        }
                      }}
                      aria-label="کاهش تعداد"
                      className="flex size-10 items-center justify-center text-lg font-bold text-purple-800 transition-all hover:bg-purple-50 hover:text-fuchsia-700 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      −
                    </button>
                  </div>
                </div>

                {/* دکمه‌های خرید و علاقه‌مندی */}
                <div className="flex flex-wrap items-center gap-3">
                  <div className="min-w-0 flex-1">
                    {existingInCart ? (
                      <Button
                        onClick={() => navigate("/cart")}
                        label="مشاهده سبد خرید"
                      />
                    ) : (
                      <Button
                        onClick={handleclick}
                        label="افزودن به سبد خرید"
                      />
                    )}
                  </div>

                  <div className="flex shrink-0 items-center gap-2">
                    <FavoriteButton
                      isFavorite={isFavorite}
                      onClick={handlefavorite}
                    />

                    <ShareButton productName={pdetail.name} />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* توضیحات محصول و روش استفاده */}
          <section className="mt-7 space-y-4 sm:mt-9 sm:space-y-5">
            {/* توضیحات */}
            <div className={descriptionCardClass}>
              <div className="flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
                  <i className="fa-solid fa-file-lines" />
                </span>

                <h2 className="text-base font-extrabold text-purple-950 sm:text-lg">
                  توضیحات محصول
                </h2>
              </div>

              <div className="mt-4 border-t border-purple-100 pt-4">
                <p
                  className={`text-sm leading-8 text-gray-600 ${
                    showDescription ? "" : "line-clamp-2"
                  }`}
                >
                  {pdetail.description}
                </p>

                <button
                  type="button"
                  onClick={() => setShowDescription((prev) => !prev)}
                  className={toggleButtonClass}
                >
                  {showDescription ? "مشاهده کمتر" : "ادامه توضیحات"}
                  <ArrowIcon isOpen={showDescription} />
                </button>
              </div>
            </div>

            {/* روش استفاده */}
            <div className={descriptionCardClass}>
              <div className="flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-fuchsia-100 text-fuchsia-700">
                  <i className="fa-solid fa-wand-magic-sparkles" />
                </span>

                <h2 className="text-base font-extrabold text-purple-950 sm:text-lg">
                  روش استفاده
                </h2>
              </div>

              <div className="mt-4 border-t border-purple-100 pt-4">
                <p
                  className={`text-sm leading-8 text-gray-600 ${
                    showUsage ? "" : "line-clamp-2"
                  }`}
                >
                  {pdetail.usage}
                </p>

                <button
                  type="button"
                  onClick={() => setShowUsage((prev) => !prev)}
                  className={toggleButtonClass}
                >
                  {showUsage ? "مشاهده کمتر" : "ادامه توضیحات"}
                  <ArrowIcon isOpen={showUsage} />
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* پنجره ورود */}
        {showLoginPopup && (
          <div
            className="fixed inset-0 z-100 flex items-center justify-center bg-purple-950/50 px-4 backdrop-blur-sm"
            onClick={closeLoginPopup}
          >
            <div
              dir="rtl"
              className="w-full max-w-sm rounded-3xl border border-purple-100 bg-white p-6 font-myfont shadow-2xl shadow-purple-950/20 sm:p-7"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mx-auto mb-5 flex size-16 items-center justify-center rounded-2xl bg-linear-to-br from-purple-800 to-fuchsia-700 text-white shadow-lg shadow-purple-200">
                <i className="fa-solid fa-user-lock text-2xl" />
              </div>

              <h3 className="text-center text-lg font-black text-purple-950">
                ورود به حساب کاربری
              </h3>

              <p className="mb-6 mt-3 text-center text-sm leading-7 text-gray-500">
                برای استفاده از امکانات حساب کاربری، ابتدا وارد شوید.
              </p>

              <button
                className="w-full rounded-xl bg-linear-to-l from-purple-900 to-fuchsia-800 px-4 py-3.5 text-sm font-bold text-white shadow-md shadow-purple-200/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-[0.98]"
                onClick={handlepopupclick}
              >
                ورود به حساب کاربری
              </button>

              <button
                className="mt-3 w-full rounded-xl border border-purple-200 bg-white px-4 py-3 text-sm font-bold text-purple-800 transition-colors duration-200 hover:bg-purple-50"
                onClick={closeLoginPopup}
              >
                انصراف
              </button>
            </div>
          </div>
        )}

        {/* پنجره افزودن به سبد خرید */}
        {showCartPopup && (
          <div
            className="fixed inset-0 z-100 flex items-center justify-center bg-purple-950/50 px-4 backdrop-blur-sm"
            onClick={() => setShowCartPopup(false)}
          >
            <div
              dir="rtl"
              className="w-full max-w-sm rounded-3xl border border-purple-100 bg-white p-6 font-myfont shadow-2xl shadow-purple-950/20 sm:p-7"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mx-auto mb-5 flex size-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                <i className="fa-solid fa-circle-check text-3xl" />
              </div>

              <h3 className="text-center text-lg font-black text-purple-950">
                محصول به سبد خرید اضافه شد
              </h3>

              <p className="mb-6 mt-3 text-center text-sm leading-7 text-gray-500">
                {pdetail.name}
              </p>

              <button
                className="w-full rounded-xl bg-linear-to-l from-purple-900 to-fuchsia-800 px-4 py-3.5 text-sm font-bold text-white shadow-md shadow-purple-200/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-[0.98]"
                onClick={() => {
                  setShowCartPopup(false);
                  navigate("/cart");
                }}
              >
                مشاهده سبد خرید
              </button>

              <button
                className="mt-3 w-full rounded-xl border border-purple-200 bg-white px-4 py-3 text-sm font-bold text-purple-800 transition-colors duration-200 hover:bg-purple-50"
                onClick={() => setShowCartPopup(false)}
              >
                ادامه خرید
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}

export default ProductDetail;
