import Header from "../Components/Header";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import { useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";
import { Link } from "react-router";

function Favorite() {
  const formatPrice = (price) => Math.round(price).toLocaleString("fa-IR");

  const favorites = useSelector((state) => state.favorite.items);

  return (
    <div className="min-h-screen bg-[#faf8fc]">
      <Header />
      <Menu />

      <main
        dir="rtl"
        className="mx-auto min-h-[60vh] max-w-7xl px-4 py-10 font-myfont sm:px-6 lg:px-8"
      >
        {/* عنوان صفحه */}
        <div className="mb-8 flex flex-col items-center text-center">
          <div
            className="
            mb-4 flex size-14 items-center justify-center
            rounded-2xl bg-linear-to-br from-purple-100 to-fuchsia-100
            text-2xl text-fuchsia-700 shadow-sm
          "
          >
            <i className="fa-solid fa-heart" />
          </div>

          <h1 className="text-xl font-extrabold text-purple-950 sm:text-2xl">
            علاقه‌مندی‌های من
          </h1>

          <p className="mt-2 text-xs text-gray-500 sm:text-sm">
            محصولاتی که دوست داری همیشه در دسترس تو هستند
          </p>

          <div className="mt-4 h-1 w-16 rounded-full bg-linear-to-l from-purple-700 to-fuchsia-500" />
        </div>

        {!Array.isArray(favorites) || favorites.length === 0 ? (
          /* حالت خالی */
          <div
            className="
            mx-auto my-8 flex max-w-xl flex-col items-center
            rounded-3xl border border-purple-100
            bg-white px-5 py-12 text-center
            shadow-sm shadow-purple-100/60
          "
          >
            <div
              className="
              flex size-20 items-center justify-center
              rounded-full bg-fuchsia-50
              text-4xl text-fuchsia-300
            "
            >
              <i className="fa-regular fa-heart" />
            </div>

            <h2 className="mt-5 text-lg font-extrabold text-purple-950">
              لیست علاقه‌مندی‌های شما خالی است
            </h2>

            <p className="mt-2 text-sm leading-7 text-gray-500">
              هنوز محصولی به علاقه‌مندی‌ها اضافه نکردی. با زدن قلب محصولات،
              اون‌ها رو اینجا ذخیره کن.
            </p>

            <Link
              to="/"
              className="
                mt-6 inline-flex items-center justify-center gap-2
                rounded-xl bg-linear-to-l from-purple-800 to-fuchsia-700
                px-6 py-3 text-sm font-bold text-white
                shadow-md shadow-purple-200/60
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-lg
              "
            >
              <i className="fa-solid fa-bag-shopping" />
              مشاهده محصولات
            </Link>
          </div>
        ) : (
          <>
            {/* تعداد علاقه‌مندی‌ها */}
            <div
              className="
              mb-6 flex items-center justify-between
              rounded-2xl border border-purple-100
              bg-white px-4 py-3 shadow-sm
            "
            >
              <span className="text-sm font-bold text-purple-950">
                محصولات ذخیره‌شده
              </span>

              <span
                className="
                rounded-lg bg-fuchsia-50 px-3 py-1.5
                text-xs font-extrabold text-fuchsia-700
              "
              >
                {favorites.length.toLocaleString("fa-IR")} محصول
              </span>
            </div>

            {/* محصولات */}
            <div
              className="
              grid grid-cols-2 gap-3
              sm:grid-cols-2 sm:gap-5
              lg:grid-cols-4
            "
            >
              {favorites.map((item) => (
                <ProductCard
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  label={item.title}
                  price={formatPrice(item.price)}
                  link={`/store/products/productdetail?id=${item.id}`}
                />
              ))}
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Favorite;
