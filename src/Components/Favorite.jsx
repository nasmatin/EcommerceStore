import Header from "../Components/Header";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import { useSelector } from "react-redux";

import ProductCard from "../Components/ProductCard";
function Favorite() {
  const formatPrice = (price) => Math.round(price).toLocaleString("fa-IR");

  const favorites = useSelector((state) => state.favorite.items);
  return (
    <div>
      <Header />
      <Menu />
      <div dir="rtl" className=" font-myfont mx-auto max-w-6xl p-4">
        {!Array.isArray(favorites) || favorites.length === 0 ? (
          <div className="my-10 text-center">
            <h2 className="text-xl font-bold text-fuchsia-800">
              لیست علاقه‌مندی‌های شما خالی است
            </h2>
            <p className="mt-3 text-fuchsia-600">
              محصولات مورد علاقه‌ات رو با زدن قلب ذخیره کن.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {favorites.map((item) => (
              <ProductCard
                key={item.id}
                id={item.id}
                image={item.image}
                label={item.title}
                price={formatPrice(item.price)}
                link={item.link}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Favorite;
