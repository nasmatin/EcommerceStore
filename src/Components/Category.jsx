import CategoryCard from "./CategoryCard";
import icon from "../assets/—Pngtree—shop logo vector template design_4146475.png";

function Category() {
  return (
    <div
      dir="rtl"
      className="
        flex
        flex-wrap
        justify-center
        gap-6 sm:gap-10 md:gap-16 lg:gap-28
        m-5 sm:m-10 md:m-20
        font-myfont
      "
    >
      <CategoryCard
        image={icon}
        link="/products?catId=2003"
        label="مراقبت پوست"
      />

      <CategoryCard
        image={icon}
        link="/products?catId=2004"
        label="مراقبت مو"
      />

      <CategoryCard image={icon} link="/products?catId=2005" label="آرایشی" />

      <CategoryCard image={icon} link="/products?catId=2006" label="بهداشتی" />
    </div>
  );
}

export default Category;
