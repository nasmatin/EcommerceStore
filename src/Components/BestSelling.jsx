import ProductCard from "./ProductCard";
import { Link } from "react-router";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { GetProductTag } from "../Features/ProductTagSlice";
function BestSelling() {
    const dispatch=useDispatch();

const tag="sell";
const count=4;
      const formatPrice = (price) => Math.round(price).toLocaleString("fa-IR");

    const productsale=useSelector((state) =>
         state.producttag?.productstags?.[tag]|| []);
console.log("PRODUCT SALE:", productsale);

    useEffect(()=>{
dispatch(GetProductTag({tag,count}))
    },[dispatch,tag,count]);
  return (
    <section className="w-full py-10 font-myfont" dir="rtl">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8 ">
          {/* Right Line */}
          <div className="flex-1 h-px bg-linear-to-l from-transparent to-fuchsia-200"></div>{" "}
          {/* Title */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-2xl">🔥</span>
            <h2 className="text-lg md:text-2xl font-bold text-gray-800 whitespace-nowrap">
              پرفروش‌ترین محصولات
            </h2>
            <span className="text-2xl">🔥</span>
          </div>
          {/* Left Line */}
          <div className="flex-1 h-px bg-linear-to-r from-transparent to-fuchsia-200"></div>
          {/* View All */}
        </div>

        {/* Products Grid */}
        <div className=" px-3 py-3 rounded-xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">
        { productsale.map((product) => (
                <div
                  key={product.id}
                  className="animate-in fade-in slide-in-from-bottom-2  duration-300"
                >
                  <ProductCard
                    id={product.id}
                    image={product.img1}
                    label={product.name}
                    sale={product.sale}
                    price={formatPrice(product.price)}
                    link={`/store/products/productdetail?id=${product.id}`}
                  />
                </div>
              ))}
             
        </div>
        <div className="flex justify-end mt-7">
          <Link
  to="/tags?tag=sell"
            className="group flex items-center gap-2 px-5 py-2.5 border rounded-xl  text-fuchsia-600  font-bold hover:bg-fuchsia-600 hover:text-white hover:border-fuchsia-600 transition-all duration-300"
          >
            مشاهده همه
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
export default BestSelling;
