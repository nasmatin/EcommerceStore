import ProductCard from "./ProductCard";
import { Link } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProductTag } from "../Features/ProductTagSlice";

function BestSelling() {
  const dispatch = useDispatch();

  const tag = "sell";
  const count = 4;

  const formatPrice = (price) => Math.round(price).toLocaleString("fa-IR");

  const productsale = useSelector(
    (state) => state.producttag?.productstags?.[tag] || []
  );

  useEffect(() => {
    dispatch(GetProductTag({ tag, count }));
  }, [dispatch, tag, count]);

  return (
    <section className="w-full py-8 sm:py-12 lg:py-16 font-myfont" dir="rtl">
      <div className="mx-auto max-w-7xl px-3 sm:px-5 lg:px-8">
        {/* HEADER */}
        <div className="mb-6 flex items-center justify-between gap-3 sm:mb-8">
          <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
            <div
              className="
              flex size-10 shrink-0 items-center justify-center
              rounded-xl bg-purple-100
              text-xl sm:size-14 sm:rounded-2xl sm:text-3xl
            "
            >
              🏆
            </div>

            <div className="min-w-0">
              <span className="text-[10px] font-bold text-purple-600 sm:text-xs">
                محبوب‌ترین انتخاب‌ها
              </span>

              <h2
                className="
                mt-1 text-base font-extrabold text-gray-800
                sm:text-xl md:text-2xl
              "
              >
                پرفروش‌ترین محصولات
              </h2>
            </div>
          </div>

          <Link
            to="/tags?tag=sell"
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

        {/* PRODUCTS */}
        <div
          className="
          grid grid-cols-2 gap-2
          min-[480px]:gap-3
          sm:gap-4
          lg:grid-cols-4 lg:gap-5
        "
        >
          {productsale.slice(0, 4).map((product) => (
            <div
              key={product.id}
              className="
                group relative min-w-0
                rounded-xl border border-gray-100
                bg-white p-1
                shadow-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:border-purple-200
                hover:shadow-lg hover:shadow-purple-100/60
                min-[480px]:rounded-2xl min-[480px]:p-1.5
                sm:p-2
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
        <div className="mt-6 flex justify-center sm:hidden">
          <Link
            to="/tags?tag=sell"
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

export default BestSelling;
