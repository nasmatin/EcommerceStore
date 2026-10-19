import { Fragment, useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router";

import { GetProduct } from "../Features/ProductSlice";

import Header from "../Components/Header";
import Menu from "../Components/Menu";
import ProductCard from "../Components/ProductCard";
import NoProducts from "../Components/NoProducts";

function Products() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const [searchParams] = useSearchParams();
  const formatPrice = (price) => Math.round(price).toLocaleString("fa-IR");

  const catId = Number(searchParams.get("catId"));
  const query = searchParams.get("search");

  const categoryProducts = useSelector(
    (state) => state.product?.products?.[catId]
  );
  const searchProducts = useSelector(
    (state) => state.search?.searchitems?.[query]
  );
  const categories = useSelector((state) => state.menu.category);
  const allCategories = Object.values(categories).flat();

const [sortBy, setSortBy] = useState("newest");

  useEffect(() => {
    // اگر جست‌وجو داریم، درخواست مربوط به دسته‌بندی اجرا نشود
    if (query) return;
    if (!catId || categoryProducts !== undefined) {
      return;
    }

    dispatch(GetProduct(catId));
  }, [dispatch, catId, categoryProducts, query]);

  const products = query ? searchProducts : (categoryProducts ?? []);

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
  const categoryPath = query ? [] : getCategoryPath(catId);


  const sortMenuRef = useRef(null);

useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      sortMenuRef.current &&
      !sortMenuRef.current.contains(event.target)
    ) {
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
      return Number(b.sale ?? 0) - Number(a.sale ?? 0);

    case "newest":
    default:
      return new Date(b.createdAt ?? 0) - new Date(a.createdAt ?? 0);
  }
});
return (
  <>
    <Header />
    <Menu />

    <div dir="ltr" className="flex items-start justify-between gap-4 px-10">
      {/* فیلتر - سمت چپ */}
      <div className="relative order-1 mt-6 shrink-0">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer p-2"
          aria-label="باز کردن منو"
        >
          <i className="fa-solid fa-filter text-xl text-purple-600 sm:text-2xl"></i>
        </button>

        {isOpen && (
          <div
            ref={sortMenuRef}
            dir="rtl"
            className="absolute left-0 top-full z-48 w-30 rounded-lg border border-purple-300 bg-white font-myfont "
          >
<button    className=" w-full block px-4 py-3 hover:bg-purple-300" onClick={() => {setSortBy("newest");setIsOpen(false);}}>
  جدیدترین
</button>
<button    className=" w-full block px-4 py-3 hover:bg-purple-300" onClick={() => {setSortBy("oldest");setIsOpen(false);}}>
  قدیمی ترین
</button>
<button    className=" w-full block px-4 py-3 hover:bg-purple-300" onClick={() => {setSortBy("priceLow");setIsOpen(false);}}>
  ارزان‌ترین
</button>

<button     className=" w-full block px-4 py-3 hover:bg-purple-300" onClick={() => {setSortBy("priceHigh");setIsOpen(false);}}>
  گران‌ترین
</button>

          </div>
        )}
      </div>

      {/* مسیر معرفی صفحه - سمت راست */}
      <div
        dir="rtl"
        className="order-2 mt-8 mb-6 flex min-w-0 flex-wrap items-center justify-end gap-2 text-sm text-gray-500"
      >
        <span
          className="cursor-pointer hover:text-purple-800"
          onClick={() => navigate("/")}
        >
          خانه
        </span>

        <span>/</span>
        <span>محصولات</span>

        {query && (
          <>
            <span>/</span>
            <span className="font-semibold text-purple-800">
              نتایج جست‌وجو: {query}
            </span>
          </>
        )}

        {categoryPath.map((category) => (
          <Fragment key={category.id}>
            <span>/</span>
            <span
              className="cursor-pointer hover:text-purple-800"
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
    </div>

    {/* محصولات */}
    <div dir="rtl" className="text-center">
      <div className="grid grid-cols-1 gap-4 px-4 md:grid-cols-3 lg:grid-cols-4">
        {!products || products.length === 0 ? (
          <NoProducts />
        ) : (
          sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              label={product.name}
              price={formatPrice(product.price)}
              link={`/products/productdetail?id=${product.id}`}
              
            />
          ))
        )}
      </div>
    </div>
  </>
);


}

export default Products;
