import { Fragment, useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router";
import Footer from "../Components/Footer";
import { GetProduct } from "../Features/ProductSlice";
import { GetProductTag } from "../Features/ProductTagSlice";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import ProductCard from "../Components/ProductCard";
import NoProducts from "../Components/NoProducts";

function Products() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [isOpen, setIsOpen] = useState(false);
  const [sortBy, setSortBy] = useState("newest");

  const formatPrice = (price) =>
    Math.round(Number(price) || 0).toLocaleString("fa-IR");

  const catId = Number(searchParams.get("catId"));
  const query = searchParams.get("search");
  const tag = searchParams.get("tag");
  const isTagPage = Boolean(tag);

  const categoryProducts = useSelector(
    (state) => state.product?.products?.[catId]
  );

  const tagProducts = useSelector(
    (state) => state.producttag?.productstags?.[tag]
  );

  const statusbar = useSelector((state) => state.product.statusbar);
  const errorbar = useSelector((state) => state.product.errorbar);

  const tagStatus = useSelector((state) => state.producttag?.statusbar);
  const tagError = useSelector((state) => state.producttag?.errorbar);

  const searchProducts = useSelector(
    (state) => state.search?.searchitems?.[query]
  );

  const categories = useSelector((state) => state.menu.category);
  const allCategories = Object.values(categories).flat();

  useEffect(() => {
    // اگر جست‌وجو یا تگ داریم، درخواست دسته‌بندی اجرا نشود
    if (query || isTagPage) return;

    if (!catId || categoryProducts !== undefined) {
      return;
    }

    dispatch(GetProduct(catId));
  }, [dispatch, catId, categoryProducts, query, isTagPage]);

  useEffect(() => {
    // دریافت تمام محصولات بر اساس تگ
    if (!isTagPage || tagProducts !== undefined) return;

    dispatch(GetProductTag({ tag }));
  }, [dispatch, tag, isTagPage, tagProducts]);

  const products = query
    ? searchProducts
    : isTagPage
      ? tagProducts
      : categoryProducts;

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

  const categoryPath = query || isTagPage ? [] : getCategoryPath(catId);

  const sortMenuRef = useRef(null);

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

  const sortedProducts = [...(products ?? [])].sort((a, b) => {
    switch (sortBy) {
      case "priceLow":
        return Number(a.price) - Number(b.price);

      case "priceHigh":
        return Number(b.price) - Number(a.price);

      case "oldest":
        return new Date(a.createdAt ?? 0) - new Date(b.createdAt ?? 0);

      case "mostViewed":
        return Number(b.viewCount ?? 0) - Number(a.viewCount ?? 0);

      case "bestSelling":
        return Number(b.soldCount ?? 0) - Number(a.soldCount ?? 0);

      case "newest":
      default:
        return new Date(b.createdAt ?? 0) - new Date(a.createdAt ?? 0);
    }
  });

  const isLoading = isTagPage
    ? tagStatus === "loading"
    : !query && statusbar === "loading";

  const hasError = isTagPage
    ? tagStatus === "failed" || tagError
    : !query && errorbar;

  const pageTitle = isTagPage
    ? tag === "sell"
      ? "محصولات پرفروش"
      : tag === "festival"
        ? "محصولات شگفت انگیز"
        : tag === "view"
          ? "محصولات پربازدید"
          : tag === "trend"
            ? "محصولات ترند"
            : `محصولات ${tag}`
    : query
      ? "نتایج جست‌وجو"
      : "محصولات";

  const sortOptions = [
    { value: "newest", label: "جدیدترین", icon: "fa-clock" },
    { value: "oldest", label: "قدیمی‌ترین", icon: "fa-clock-rotate-left" },
    { value: "mostViewed", label: "پربازدیدترین", icon: "fa-eye" },
    { value: "bestSelling", label: "پرفروش‌ترین", icon: "fa-fire" },
    {
      value: "priceLow",
      label: "ارزان‌ترین",
      icon: "fa-arrow-down-wide-short",
    },
    { value: "priceHigh", label: "گران‌ترین", icon: "fa-arrow-up-wide-short" },
  ];

  const selectedSort = sortOptions.find((item) => item.value === sortBy);

  return (
    <>
      <Header />
      <Menu />

      <main
        dir="rtl"
        className="min-h-screen bg-[#faf8fc] py-6 font-myfont sm:py-9"
      >
        <div className="mx-auto w-full max-w-7xl px-3 sm:px-6 lg:px-8">
          {/* سربرگ صفحه */}
          <section className="relative mb-6 overflow-hidden rounded-3xl bg-linear-to-l from-purple-950 via-purple-800 to-fuchsia-800 px-5 py-7 text-white shadow-lg shadow-purple-200/50 sm:px-8 sm:py-9">
            {/* تزئینات پس‌زمینه */}
            <div className="pointer-events-none absolute -left-16 -top-20 size-56 rounded-full bg-fuchsia-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 right-1/3 size-52 rounded-full bg-purple-300/20 blur-3xl" />

            <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-purple-100 backdrop-blur-sm">
                  <i className="fa-solid fa-sparkles text-fuchsia-200" />
                  دنیای زیبایی و مراقبت
                </div>

                <h1 className="text-xl font-black leading-9 sm:text-3xl">
                  {pageTitle}
                </h1>

                <p className="mt-2 max-w-xl text-xs leading-7 text-purple-100 sm:text-sm">
                  محصولات مورد علاقه‌ات رو پیدا کن و با خیال راحت انتخاب کن.
                </p>
              </div>

              <div className="flex size-16 shrink-0 items-center justify-center self-end rounded-2xl border border-white/20 bg-white/10 text-3xl text-fuchsia-100 shadow-inner backdrop-blur-sm sm:size-20 sm:self-center">
                <i className="fa-solid fa-bag-shopping" />
              </div>
            </div>
          </section>

          {/* مسیر دسته‌بندی و مرتب‌سازی */}
          <section className="mb-6 rounded-2xl border border-purple-100 bg-white p-3 shadow-sm shadow-purple-100/40 sm:p-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              {/* مسیر دسته‌بندی‌ها */}
              <div className="flex min-w-0 flex-wrap items-center gap-2 text-xs text-gray-500 sm:text-sm">
                <span
                  className="cursor-pointer transition-colors hover:text-fuchsia-700"
                  onClick={() => navigate("/")}
                >
                  خانه
                </span>

                <i className="fa-solid fa-chevron-left text-[9px] text-purple-300" />

                <span>محصولات</span>

                {query && (
                  <>
                    <i className="fa-solid fa-chevron-left text-[9px] text-purple-300" />
                    <span className="max-w-full break-all font-bold text-purple-800">
                      نتایج جست‌وجو: {query}
                    </span>
                  </>
                )}

                {isTagPage && (
                  <>
                    <i className="fa-solid fa-chevron-left text-[9px] text-purple-300" />
                    <span className="font-bold text-purple-800">
                      {pageTitle}
                    </span>
                  </>
                )}

                {categoryPath.map((category) => (
                  <Fragment key={category.id}>
                    <i className="fa-solid fa-chevron-left text-[9px] text-purple-300" />
                    <span
                      className="cursor-pointer transition-colors hover:text-fuchsia-700"
                      onClick={() => {
                        if (category.id !== catId) {
                          navigate(`/products?catId=${category.id}`);
                        }
                      }}
                    >
                      {category.name}
                    </span>
                  </Fragment>
                ))}
              </div>

              {/* منوی مرتب‌سازی */}
              <div ref={sortMenuRef} className="relative z-20 shrink-0">
                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label="باز کردن منوی مرتب‌سازی"
                  aria-expanded={isOpen}
                  className="
                    flex w-full items-center justify-between gap-3
                    rounded-xl border border-purple-200
                    bg-purple-50/70 px-4 py-3
                    text-sm font-bold text-purple-900
                    transition-all duration-200
                    hover:border-fuchsia-300 hover:bg-fuchsia-50
                    sm:w-auto sm:min-w-48
                  "
                >
                  <span className="flex items-center gap-2">
                    <i className="fa-solid fa-sliders text-fuchsia-700" />
                    مرتب‌سازی:
                    <span className="text-fuchsia-800">
                      {selectedSort?.label}
                    </span>
                  </span>

                  <i
                    className={`fa-solid fa-chevron-down text-xs text-purple-500 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    dir="rtl"
                    className="
                      absolute right-0 top-full z-50 mt-2
                      w-full min-w-52 overflow-hidden
                      rounded-2xl border border-purple-100
                      bg-white p-1.5 shadow-xl shadow-purple-200/40
                      animate-in fade-in zoom-in-95 duration-200
                    "
                  >
                    {sortOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => {
                          setSortBy(option.value);
                          setIsOpen(false);
                        }}
                        className={`
                          flex w-full items-center gap-3
                          rounded-xl px-3 py-3 text-right text-sm
                          font-medium transition-colors duration-200
                          ${
                            sortBy === option.value
                              ? "bg-purple-100 font-extrabold text-purple-900"
                              : "text-gray-600 hover:bg-purple-50 hover:text-fuchsia-800"
                          }
                        `}
                      >
                        <i
                          className={`fa-solid ${option.icon} w-5 text-center text-fuchsia-700`}
                        />
                        {option.label}

                        {sortBy === option.value && (
                          <i className="fa-solid fa-check mr-auto text-fuchsia-700" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* تعداد محصولات */}
          {!isLoading && !hasError && products?.length > 0 && (
            <div className="mb-4 flex items-center justify-between px-1">
              <p className="text-sm font-bold text-purple-950">
                <i className="fa-solid fa-box-open ml-2 text-fuchsia-700" />
                فهرست محصولات
              </p>

              <span className="rounded-lg bg-purple-100 px-3 py-1.5 text-xs font-bold text-purple-800">
                {products.length.toLocaleString("fa-IR")} کالا
              </span>
            </div>
          )}

          {/* نمایش محصولات */}
          <section>
            {isLoading ? (
              <div className="flex min-h-80 flex-col items-center justify-center gap-4 rounded-3xl border border-purple-100 bg-white shadow-sm">
                <div className="size-12 animate-spin rounded-full border-4 border-purple-100 border-t-fuchsia-700" />
                <p className="text-sm font-medium text-gray-500">
                  در حال دریافت محصولات...
                </p>
              </div>
            ) : hasError ? (
              <div className="flex min-h-80 flex-col items-center justify-center gap-4 rounded-3xl border border-red-100 bg-white px-5 text-center shadow-sm">
                <div className="flex size-16 items-center justify-center rounded-2xl bg-red-50 text-red-500">
                  <i className="fa-solid fa-triangle-exclamation text-2xl" />
                </div>

                <p className="text-sm font-bold text-red-600">
                  دریافت محصولات با خطا مواجه شد.
                </p>
              </div>
            ) : !products || products.length === 0 ? (
              <div className="rounded-3xl border border-purple-100 bg-white p-4 shadow-sm">
                <NoProducts />
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {sortedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="min-w-0 animate-in fade-in slide-in-from-bottom-2 duration-300"
                  >
                    <ProductCard
                      id={product.id}
                      image={product.img1}
                      label={product.name}
                      sale={product.sale}
                      brand={product.brand}
                      price={formatPrice(product.price)}
                      link={`/store/products/productdetail?id=${product.id}`}
                    />
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Products;
