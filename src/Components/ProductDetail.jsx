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
import { like, dislike, loadFavorites } from "../Features/FavoriteSlice";

function ProductDetail() {
  const [showDescription, setShowDescription] = useState(false);
  const [showUsage, setShowUsage] = useState(false);

  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const Id = Number(searchParams.get("id"));
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const account = useSelector((state) => state.login);
  const [showCartPopup, setShowCartPopup] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const favorites = useSelector((state) => state.favorite.items);
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

    dispatch(GetProductDetail(Id))
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
  }, [dispatch, Id, ProDetails]);

  const pdetail = ProDetails ?? {};

  const handleclick = () => {
    if (!account.isLoggedIn) {
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
    if (!account.isLoggedIn) {
      setShowLoginPopup(true);
      dispatch(loadFavorites);
      return;
    }

    if (!pdetail.id) return;

    if (isFavorite) {
      dispatch(dislike(pdetail.id));
    } else {
      dispatch(
        like({
          id: pdetail.id,
          title: pdetail.name,
          price: pdetail.price,
          image: pdetail.img1,
          link: `/products/productdetail?id=${pdetail.id}`,
        })
      );
    }
  };

  const handlepopupclick = () => {
    setShowLoginPopup(false);

    navigate("/login", {
      state: {
        from: location.pathname + location.search,
        pendingProduct: {
          id: pdetail.id,
          name: pdetail.name,
          price: pdetail.price,
          quantity: quantity,
          stock: pdetail.quantity,
          image: pdetail.img1,
          link: `/products/productdetail?id=${pdetail.id}`,
        },
      },
    });
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
    "rounded-2xl border-2 border-gray-300 bg-white p-5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md sm:p-6";

  const toggleButtonClass =
    "mt-3 flex w-full items-center justify-end gap-2 text-sm font-semibold text-fuchsia-800 transition-all duration-200 hover:gap-3 hover:text-fuchsia-950";

  if (!Id) {
    return (
      <>
        <Header />
        <Menu />
        <main
          dir="rtl"
          className="flex min-h-screen items-center justify-center bg-gray-100 font-myfont"
        >
          <p className="text-red-600">شناسه محصول معتبر نیست.</p>
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
          className="flex min-h-screen items-center justify-center bg-gray-100"
        >
          <div
            role="status"
            aria-label="در حال بارگذاری محصول"
            className="h-10 w-10 animate-spin rounded-full border-4 border-purple-200 border-t-purple-800"
          />
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
          className="flex min-h-screen flex-col items-center justify-center gap-4 bg-gray-100 font-myfont"
        >
          <p className="text-red-600">دریافت اطلاعات محصول با خطا مواجه شد.</p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="rounded-lg bg-fuchsia-700 px-5 py-2 text-white transition-colors duration-200 hover:bg-fuchsia-800"
          >
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
      <main dir="rtl" className="min-h-screen bg-gray-100 py-8 font-myfont">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <span
              className="cursor-pointer transition-colors duration-200 hover:text-fuchsia-800"
              onClick={() => navigate("/")}
            >
              خانه
            </span>
            <span>/</span>
            <span>محصولات</span>

            {categoryPath.map((category) => (
              <Fragment key={category.id}>
                <span>/</span>
                <span
                  onClick={() => navigate(`/products?catId=${category.id}`)}
                  className="cursor-pointer transition-colors duration-200 hover:text-fuchsia-800"
                >
                  {category.name}
                </span>
              </Fragment>
            ))}

            <span>/</span>
            <span className="font-medium text-fuchsia-800">{pdetail.name}</span>
          </div>

          {/* گالری و اطلاعات خرید */}
          <section className="grid grid-cols-1 gap-8 rounded-2xl border border-fuchsia-200 bg-fuchsia-50 p-4 shadow-lg transition-shadow duration-300 hover:shadow-xl sm:p-6 lg:grid-cols-2 lg:gap-10 lg:p-8">
            <div className="min-w-0 overflow-hidden rounded-xl [&_img:first-of-type]:transition-transform [&_img:first-of-type]:duration-300 [&_img:first-of-type]:ease-out [&_img:first-of-type:hover]:scale-110">
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
            <div className="flex min-w-0 flex-col font-myfont">
              <h1 className="text-xl font-bold leading-9 text-gray-900 transition-colors duration-200 sm:text-2xl">
                {pdetail.name}
              </h1>

              {/* موجودی */}
              <div className="mt-4">
                <span
                  className={`inline-flex items-center gap-2 text-sm ${
                    pdetail.quantity > 0 ? "text-emerald-600" : "text-red-500"
                  }`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${
                      pdetail.quantity > 0 ? "bg-emerald-500" : "bg-red-500"
                    }`}
                  />
                  {pdetail.quantity > 0 ? "موجود در انبار" : "ناموجود"}
                </span>
              </div>

              <div className="my-6 border-t border-gray-200" />

              {/* تخفیف */}
              {pdetail.sale > 0 && (
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-sm text-gray-400 line-through">
                    {formatPrice(pdetail.price)} تومان
                  </span>
                  <span className="rounded-md bg-red-50 px-2 py-1 text-xs font-bold text-red-500">
                    {pdetail.sale}٪ تخفیف
                  </span>
                </div>
              )}

              {/* قیمت */}
              <div className="text-2xl font-extrabold text-fuchsia-900">
                {formatPrice(pdetail.price)}
                <span className="mr-2 text-sm font-normal text-gray-500">
                  تومان
                </span>
              </div>

              {/* خرید، علاقه‌مندی و اشتراک‌گذاری */}
              <div className="mt-4 flex items-center gap-6">
                <div className="min-w-0 flex-1">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-sm font-medium text-gray-700">
                      تعداد:
                    </span>

                    <div className="inline-flex items-center overflow-hidden rounded-xl border border-gray-400 bg-white">
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
                        className="flex h-10 w-10 items-center justify-center text-gray-700 transition-all duration-200 hover:scale-105 hover:bg-fuchsia-50 hover:text-fuchsia-800 active:scale-95 disabled:opacity-40"
                      >
                        <span className="text-xl leading-none">+</span>
                      </button>

                      <span className="flex h-10 min-w-10 items-center justify-center border-x border-gray-400 px-2 text-sm font-semibold text-gray-800">
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
                        className="flex h-10 w-10 items-center justify-center text-gray-700 transition-all duration-200 hover:scale-105 hover:bg-fuchsia-50 hover:text-fuchsia-800 active:scale-95 disabled:opacity-40"
                      >
                        <span className="text-xl leading-none">−</span>
                      </button>
                    </div>
                  </div>

                  {existingInCart ? (
                    <Button
                      onClick={() => navigate("/cart")}
                      label="مشاهده سبد خرید"
                    />
                  ) : (
                    <Button onClick={handleclick} label="افزودن به سبد خرید" />
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
          </section>

          {/* توضیحات محصول و روش استفاده */}
          <section className="mt-8 space-y-5 font-myfont">
            <div className={descriptionCardClass}>
              <h2 className="mb-3 text-lg font-bold text-gray-900">
                توضیحات محصول
              </h2>

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

            <div className={descriptionCardClass}>
              <h2 className="mb-3 text-lg font-bold text-gray-900">
                روش استفاده
              </h2>

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
          </section>
        </div>

        {/* پنجره ورود */}
        {showLoginPopup && (
          <div
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/40 transition-opacity duration-200"
            onClick={() => setShowLoginPopup(false)}
          >
            <div
              dir="rtl"
              className="w-80 rounded-xl bg-white p-6 font-myfont shadow-xl transition-all duration-200 hover:shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="mb-4 text-center text-lg font-bold">
                ورود به حساب کاربری
              </h3>

              <p className="mb-5 text-center text-sm">
                برای استفاده از امکانات حساب کاربری، ابتدا وارد شوید.
              </p>

              <button
                className="w-full rounded-lg bg-fuchsia-700 px-4 py-3 text-white transition-all duration-200 hover:bg-fuchsia-800 active:scale-[0.98]"
                onClick={handlepopupclick}
              >
                ورود به حساب کاربری
              </button>

              <button
                className="mt-3 w-full rounded-lg border border-fuchsia-300 px-4 py-2 transition-colors duration-200 hover:bg-fuchsia-100"
                onClick={() => setShowLoginPopup(false)}
              >
                انصراف
              </button>
            </div>
          </div>
        )}

        {/* پنجره افزودن به سبد خرید */}
        {showCartPopup && (
          <div
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/40 transition-opacity duration-200"
            onClick={() => setShowCartPopup(false)}
          >
            <div
              dir="rtl"
              className="w-80 rounded-xl bg-white p-6 font-myfont shadow-xl transition-all duration-200 hover:shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-3 text-center text-3xl text-green-600">
                <i className="fa-solid fa-circle-check" />
              </div>

              <h3 className="mb-3 text-center text-lg font-bold">
                محصول به سبد خرید اضافه شد
              </h3>

              <p className="mb-5 text-center text-sm text-gray-600">
                {pdetail.name}
              </p>

              <button
                className="w-full rounded-lg bg-fuchsia-700 px-4 py-3 text-white transition-all duration-200 hover:bg-fuchsia-800 active:scale-[0.98]"
                onClick={() => {
                  setShowCartPopup(false);
                  navigate("/cart");
                }}
              >
                مشاهده سبد خرید
              </button>

              <button
                className="mt-3 w-full rounded-lg border border-fuchsia-300 px-4 py-2 transition-colors duration-200 hover:bg-fuchsia-100"
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
