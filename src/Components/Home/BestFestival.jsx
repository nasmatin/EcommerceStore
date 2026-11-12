import ProductCard from "./ProductCard";
import { Link } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProductTag } from "../Features/ProductTagSlice";

function BestFestival() {
  const dispatch = useDispatch();

  const tag = "festival";
  const count = 4;

  const formatPrice = (price) => Math.round(price).toLocaleString("fa-IR");

  const productfestival = useSelector(
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
      <div className="mx-auto max-w-7xl px-3 sm:px-5 lg:px-8">
        {/* HEADER */}
        <div className="mb-6 flex items-center justify-between gap-3 sm:mb-8">
          <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
            <div
              className="
              flex size-10 shrink-0 items-center justify-center
              rounded-xl bg-fuchsia-100
              text-xl sm:size-14 sm:rounded-2xl sm:text-3xl
            "
            >
              🎁
            </div>

            <div className="min-w-0">
              <span className="text-[10px] font-bold text-fuchsia-600 sm:text-xs">
                پیشنهادهای ویژه
              </span>

              <h2
                className="
                mt-1 text-base font-extrabold text-gray-800
                sm:text-xl md:text-2xl
              "
              >
                شگفت‌انگیزترین محصولات
              </h2>
            </div>
          </div>

          <Link
            to="/tags?tag=festival"
            className="
              group hidden shrink-0 items-center gap-2
              rounded-xl border border-fuchsia-200
              px-3 py-2 text-xs font-bold text-fuchsia-700
              transition-all duration-300
              hover:border-fuchsia-600 hover:bg-fuchsia-600 hover:text-white
              sm:flex sm:px-4 sm:text-sm
            "
          >
            مشاهده همه
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
          </Link>
        </div>

        {/* PRODUCTS */}
        <div
          className="
          grid grid-cols-2 gap-2
          min-[480px]:gap-3
          sm:gap-4
          lg:grid-cols-4 lg:gap-5
          px-1 py-3
        "
        >
          {productfestival.slice(0, 4).map((product) => (
            <div
              key={product.id}
              className="
                group relative min-w-0
                rounded-xl border border-fuchsia-200
                bg-white p-1
                shadow-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:border-fuchsia-400
                hover:shadow-lg hover:shadow-fuchsia-100/60
                min-[480px]:rounded-2xl min-[480px]:p-1.5
                sm:p-2
              "
            >
              {/* FESTIVAL BADGE */}
              <div
                className="
                absolute -top-2.5 left-1/2 z-10
                -translate-x-1/2 whitespace-nowrap
                rounded-full
                bg-linear-to-l from-amber-500 via-orange-500 to-amber-600
                px-3 py-1
                text-[9px] font-bold text-white
                shadow-md shadow-orange-200/60
                sm:-top-3 sm:px-4 sm:py-1.5 sm:text-xs
              "
              >
                ✦ شگفت‌انگیز ✦
              </div>

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

        {/* VIEW ALL MOBILE */}
        <div className="mt-5 flex justify-center sm:hidden">
          <Link
            to="/tags?tag=festival"
            className="
              flex w-full items-center justify-center gap-2
              rounded-xl border border-fuchsia-200
              bg-white py-3 text-sm font-bold text-fuchsia-700
              transition-all duration-300
              hover:border-fuchsia-700 hover:bg-fuchsia-700 hover:text-white
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

export default BestFestival;
