
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router";

import { GetProduct } from "../Features/ProductSlice";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import ProductCard from "../Components/ProductCard";
import NoProducts from "../Components/NoProducts";

function Products() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const catId = Number(searchParams.get("catId"));

  console.log("1. Products rendered");
  console.log("2. catId:", catId);

  const categoryProducts = useSelector(
    (state) => state.product?.products?.[catId]
  );

  console.log("3. categoryProducts:", categoryProducts);

  useEffect(() => {
    console.log("4. useEffect executed");

    if (!catId || categoryProducts !== undefined) {
      return;
    }

    console.log("5. Dispatching GetProduct:", catId);

    dispatch(GetProduct(catId));
  }, [dispatch, catId, categoryProducts]);

  const products = categoryProducts ?? [];
console.log("Products:", products);
  return (
    <>
      <Header />
      <Menu />

      <div dir="rtl" className="text-center">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
         {products.length === 0 ? (
  <NoProducts />
) : (
  products.map((product) => (
    <ProductCard
      key={product.ID}
      id={product.ID}
      image={product.image}
      label={product.name}
      price={product.price}
      link={`/productdetail/${product.ID}`}
    />
  ))
)}
        </div>
      </div>
    </>
  );
}

export default Products;