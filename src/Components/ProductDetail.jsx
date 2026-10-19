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
import { useNavigate, useSearchParams } from "react-router";
import { GetProductDetail } from "../Features/ProductDetailSlice";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import Footer from "./Footer";
import { add } from "../Features/AddToCartSlice";
import { like, dislike } from "../Features/FavoriteSlice";
function ProductDetail() {
  const [showDescription, setShowDescription] = useState(false);
  const [showUsage, setShowUsage] = useState(false);

  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const Id = Number(searchParams.get("id"));
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const account = useSelector((state) => state.login);
  const [showCartPopup, setShowCartPopup] = useState(false);
  // ====================== این قسمت رو اینجا اضافه کن ======================
  const cartItems = useSelector((state) => state.cart.items);
  const favorites = useSelector((state) => state.favorite.items);

  const isFavorite =
    Array.isArray(favorites) &&
    favorites.some((item) => Number(item.id) === Number(Id));
  const existingInCart = cartItems.find((item) => item.id === Id);

  useEffect(() => {
    if (existingInCart) {
      setSelectedQuantity(existingInCart.quantity);
    }
  }, [existingInCart]);

  const quantity = selectedQuantity;

  const ProDetails = useSelector(
    (state) => state.productdetail?.productdetails?.[Id]
  );
  //const AddCart = useSelector((state) => state.cart);

  const categories = useSelector((state) => state.menu.category);

  const allCategories = Object.values(categories).flat();

  useEffect(() => {
    if (!Id || ProDetails !== undefined) {
      return;
    }

    dispatch(GetProductDetail(Id));
  }, [dispatch, Id, ProDetails]);
  const pdetail = ProDetails ?? {};

  const handleclick = () => {
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
    } else {
      setShowLoginPopup(true);
    }
  };
  const handlefavorite = () => {
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

  // قالب‌بندی قیمت
  const formatPrice = (price) => Math.round(price).toLocaleString("fa-IR");

  // کلاس‌های مشترک
  const descriptionCardClass =
    "rounded-2xl border-2 border-gray-300 bg-white p-5 shadow-sm sm:p-6";

  const toggleButtonClass =
    "mt-3 flex w-full items-center justify-end gap-2 text-sm font-semibold text-purple-800 transition hover:text-purple-950";

  return (
    <>
      <Header />
      <Menu />
      <main dir="rtl" className="min-h-screen bg-gray-50 py-8 font-[MyFont]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* مسیر صفحه */}
          <div className="font-myfont mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <span>خانه</span>
            <span>/</span>
            <span>محصولات</span>
            {categoryPath.map((category) => (
              <Fragment key={category.id}>
                <span>/</span>
                <span
                  onClick={() => navigate(`/products?catId=${category.id}`)}
                  className="cursor-pointer transition hover:text-purple-800"
                >
                  {category.name}
                </span>{" "}
              </Fragment>
            ))}
            <span>/</span>
            <span className="font-medium text-purple-800">{pdetail.name}</span>
          </div>

          {/* گالری و اطلاعات خرید */}
          <section className="grid grid-cols-1 gap-8 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6 lg:grid-cols-2 lg:gap-10 lg:p-8">
            <div className="min-w-0">
              <Gallery images={pdetail.images} productName={pdetail.name} />
            </div>

            {/* اطلاعات محصول */}
            <div className="font-myfont flex min-w-0 flex-col">
              <h1 className="text-xl font-bold leading-9 text-gray-900 sm:text-2xl">
                {pdetail.name}
              </h1>

              {/* <p className="mt-2 text-sm font-medium text-purple-800">
                {pdetail.brand}
              </p> */}

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
              {/* قیمت */}
              <div>
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
              </div>
              {/* قیمت */}
              <div className="text-2xl font-extrabold text-purple-900">
                {formatPrice(pdetail.price)}

                <span className="mr-2 text-sm font-normal text-gray-500">
                  تومان
                </span>
              </div>

              {/* خرید، علاقه‌مندی و اشتراک‌گذاری */}
              <div className="mt-4 flex items-center gap-6">
                <div className="min-w-0 flex-1">
                  <div dir="rtl" className="mb-3 flex items-center gap-3">
                    <span className="text-sm font-medium text-gray-700">
                      تعداد:
                    </span>

                    <div className="inline-flex items-center overflow-hidden rounded-xl border border-gray-400 bg-white">
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedQuantity((q) => Math.min(q + 1, 5))
                        }
                        aria-label="افزایش تعداد"
                        className="flex h-10 w-10  items-center justify-center text-gray-700
      transition hover:bg-purple-50 hover:text-purple-800"
                      >
                        <span className="text-xl leading-none">+</span>
                      </button>
                      <span className="flex h-10 min-w-10 items-center justify-center border-x border-gray-400 px-2 text-sm font-semibold text-gray-800">
                        {quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          setSelectedQuantity((q) => Math.max(1, q - 1))
                        }
                        aria-label="کاهش تعداد"
                        className="flex h-10 w-10 items-center justify-center text-gray-700
                                   transition hover:bg-purple-50 hover:text-purple-800"
                      >
                        <span className="text-xl leading-none">−</span>
                      </button>
                    </div>
                  </div>

                  <Button onClick={handleclick} label="افزودن به سبد خرید" />
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
          <section className="font-myfont mt-8 space-y-5">
            {/* توضیحات محصول */}
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

            {/* روش استفاده */}
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

          {/* امتیاز و نظرات */}
          {/* <section className="mt-8">
            <div className="font-myfont mb-3 rounded-xl border-2 border-gray-300 bg-white px-5 py-3 shadow-sm">
              <Rating averageRating={4.8} reviewCount={12} />
            </div>

            <ProductReview />
          </section> */}

          {/* محصولات مشابه */}
          {/* <section className="font-myfont mt-8 rounded-2xl border-2 border-gray-300 bg-white p-4 shadow-sm sm:p-6">
            <RelatedProduct />
          </section> */}
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
                className="w-full rounded-lg bg-purple-700 px-4 py-3 text-white hover:bg-purple-800"
                onClick={() => {
                  setShowLoginPopup(false);
                  navigate("/login");
                }}
              >
                ورود به حساب کاربری
              </button>

              <button
                className="mt-3 w-full rounded-lg border border-purple-300 px-4 py-2 hover:bg-purple-100"
                onClick={() => setShowLoginPopup(false)}
              >
                انصراف
              </button>
            </div>
          </div>
        )}
        {showCartPopup && (
          <div
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/40"
            onClick={() => setShowCartPopup(false)}
          >
            <div
              dir="rtl"
              className="w-80 rounded-xl bg-white p-6 font-myfont shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-3 text-center text-3xl text-green-600">
                <i className="fa-solid fa-circle-check"></i>
              </div>

              <h3 className="mb-3 text-center text-lg font-bold">
                محصول به سبد خرید اضافه شد
              </h3>

              <p className="mb-5 text-center text-sm text-gray-600">
                {pdetail.name}
              </p>

              <button
                className="w-full rounded-lg bg-purple-700 px-4 py-3 text-white hover:bg-purple-800"
                onClick={() => {
                  setShowCartPopup(false);
                  navigate("/cart");
                }}
              >
                مشاهده سبد خرید
              </button>

              <button
                className="mt-3 w-full rounded-lg border border-purple-300 px-4 py-2 hover:bg-purple-100"
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
