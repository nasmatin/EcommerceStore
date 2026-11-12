import ProductCard from "./ProductCard";
import { Link } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProductTag } from "../Features/ProductTagSlice";

function BestTrend() {
  const dispatch = useDispatch();

  const tag = "trend";
  const count = 4;

  const formatPrice = (price) => Math.round(price).toLocaleString("fa-IR");

  const productsale = useSelector(
    (state) => state.producttag?.productstags?.[tag] || []
  );

  useEffect(() => {
    dispatch(GetProductTag({ tag, count }));
  }, [dispatch, tag, count]);

  return (
    <section
      className="relative w-full overflow-hidden py-8 sm:py-12 lg:py-16 font-myfont"
      dir="rtl"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute left-0 top-10 size-40 rounded-full bg-purple-100/50 blur-3xl sm:size-48" />
      <div className="pointer-events-none absolute bottom-0 right-0 size-40 rounded-full bg-fuchsia-100/40 blur-3xl sm:size-48" />

      <div className="relative mx-auto max-w-7xl px-3 sm:px-5 lg:px-8">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between gap-3 sm:mb-8">
          <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
            <div
              className="
              flex size-10 shrink-0 items-center justify-center
              rotate-[-5deg] rounded-xl
              bg-linear-to-br from-purple-600 to-fuchsia-500
              text-xl shadow-md shadow-purple-200
              sm:size-14 sm:rounded-2xl sm:text-3xl
            "
            >
              🚀
            </div>

            <div className="min-w-0">
              <span className="mb-1 inline-block text-[10px] font-bold tracking-wide text-fuchsia-600 sm:text-xs">
                محبوب این روزها
              </span>

              <h2 className="text-base font-extrabold text-gray-800 sm:text-xl md:text-2xl">
                محصولات ترند
              </h2>
            </div>
          </div>

          <Link
            to="/tags?tag=trend"
            className="
              group hidden shrink-0 items-center gap-2
              rounded-xl border border-purple-200
              px-3 py-2 text-xs font-bold text-purple-700
              transition-all duration-300
              hover:border-purple-600 hover:bg-purple-600 hover:text-white
              sm:flex sm:px-4 sm:text-sm
            "
          >
            مشاهده همه
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
          </Link>
        </div>

        {/* Products Grid */}
        <div
          className="
          flex snap-x snap-mandatory gap-2
          overflow-x-auto px-1 py-3
          scrollbar-hide
          min-[480px]:gap-3
          sm:gap-4
          lg:grid lg:grid-cols-4 lg:gap-5
          lg:overflow-visible
        "
        >
          {productsale.slice(0, 4).map((product) => (
            <div
              key={product.id}
              className="
  w-40 shrink-0 snap-start
  rounded-xl border border-purple-100
  bg-white p-1.5 shadow-sm
  transition-all duration-300
  hover:-translate-y-1
  hover:border-fuchsia-300
  hover:shadow-lg hover:shadow-purple-100/60
  min-[480px]:w-48
  sm:w-56 sm:rounded-2xl sm:p-2
  lg:w-auto
"
            >
              <ProductCard
                id={product.id}
                image={product.img1}
                label={product.name}
                sale={product.sale}
                price={formatPrice(product.price)}
                brand={product.brand}
                link={`/store/products/productdetail?id=${product.id}`}
              />
            </div>
          ))}
        </div>

        {/* VIEW ALL MOBILE */}
        <div className="mt-5 flex justify-center sm:hidden">
          <Link
            to="/tags?tag=trend"
            className="
              flex w-full items-center justify-center gap-2
              rounded-xl border border-purple-200
              bg-white py-3 text-sm font-bold text-purple-700
              transition-all duration-300
              hover:border-purple-700 hover:bg-purple-700 hover:text-white
            "
          >
            مشاهده همه محصولات
            <span>←</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BestTrend;
